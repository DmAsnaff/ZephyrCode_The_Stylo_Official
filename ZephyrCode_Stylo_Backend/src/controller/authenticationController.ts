import { Request, Response } from 'express'
import { dbDisconnector, prisma } from '../prisma/database'

export const registerContoller = async (req: Request, res: Response) => {
    // Request body from the endpoint
//     const body = req.body

//     // Create data by prisma
//    return await prisma.user.create({
//         data: body
//     }).then((primaRes) => {
//        return  res.status(201).json(primaRes)
//     }).catch((err) => {
//         return res.status(500).json({
//             message: err 
//         })
//     }).finally(()=> {
//         dbDisconnector()
//     })
// }

const {userName, email, password } = req.body
try {
    const existingUser = await prisma.user.findUnique({ where: { email: email } })

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' })
    }

    const newUser = await prisma.user.create({
      data: {userName,email,password  }
    })

    res.status(201).json(newUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  } finally {
    dbDisconnector()
  }
}