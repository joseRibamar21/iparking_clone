import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, mail, password, confirmPassword } = req.body;

    const userExists = await prismaClient.user.findFirst(
        {where: 
            { mail: 
                mail
            }
        });

    if (userExists) return res.json({message: "User e-mail already exists!"})

    if(password !== confirmPassword) return res.json({message: "Password does not match!"})
    

    const user = await prismaClient.user.create({data: { name, mail, password }});

    return res.json(user)
  }
}
