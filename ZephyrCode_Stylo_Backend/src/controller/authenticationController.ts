import { Request, Response } from 'express'
import { dbDisconnector, prisma } from '../prisma/database'

export const registerContoller = async (req: Request, res: Response) => {
    // Request body from the endpoint
    const body = req.body

    // Create data by prisma
   return await prisma.user.create({
        data: body
    }).then((primaRes) => {
       return  res.status(201).json(primaRes)
    }).catch((err) => {
        return res.status(500).json({
            message: err 
        })
    }).finally(()=> {
        dbDisconnector()
    })
}