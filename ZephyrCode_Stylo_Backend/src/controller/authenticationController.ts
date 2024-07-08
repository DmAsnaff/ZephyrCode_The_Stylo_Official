import { Request, Response } from 'express'
import { dbDisconnector, prisma } from '../prisma/database'
import bcrypt from 'bcryptjs';

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

interface LoginRequest {
  email: string;
  password: string;
}

export const loginController = async (req: Request<{}, {}, LoginRequest>, res: Response) => {
  const { email, password } = req.body;

  try {
    // Retrieve user from database based on email
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Validate password using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password || '');

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Successful login, return user data or JWT token for authentication
    res.status(200).json({ user });

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
};