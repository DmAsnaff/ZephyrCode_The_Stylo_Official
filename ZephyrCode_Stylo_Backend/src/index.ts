import dotenv from 'dotenv'
dotenv.config()

import { v4 as uuidv4 } from 'uuid';
import express from "express"
import bodyParser from "body-parser"
import authenticationRouter from './routes'
import cors from 'cors'
import { bucket } from "./constant/firebaseAdmin"
import multer from 'multer';
import stream from 'stream'

const app = express()
const PORT = 5000

process.env.NODE_OPTIONS = '--openssl-legacy-provider';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.json({
    "Result": "Success"

  })

})

const users = ["asnaff"]

app.get('/users', (req, res) => {
  return res.send(users)
})

const upload = multer();


app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const fileName = req.file.originalname;
  const fileBuffer = req.file.buffer;

  console.log({
    file: req.file
  })

  const blob = bucket.file(fileName);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
      metadata: {
        firebaseStorageDownloadTokens: uuidv4() // Generate a download token
      }
    }
  });

  blobStream.on('error', (err) => {
    console.error('Error uploading file:', err);
    res.status(500).send('Error uploading file.');
  });

  blobStream.on('finish', () => {
    //@ts-ignore
    const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(blob.name)}?alt=media&token=${blob.metadata.metadata.firebaseStorageDownloadTokens}`;
    res.status(200).send({ fileName, url: publicUrl });
  });

  blobStream.end(fileBuffer);

});

app.post('/users', (req, res) => {
  console.log("params", req.body)
  const newUser = req.body.username
  users.push(newUser)
  return res.send("success")
})

app.use(authenticationRouter)

app.listen(PORT, () => {
  console.log("Backend is running on", PORT)
})
