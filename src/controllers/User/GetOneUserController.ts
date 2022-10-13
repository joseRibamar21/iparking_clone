import { prismaClient } from '../../database/prismaClient';
import { Request, Response } from "express";

export class GetOneUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const oneUser = await prismaClient.user.findFirst({
            where: { id }
        });

        if(oneUser){
            return res.json(oneUser);
        }else{
            return res.json({data:"Nâo encontrado!"});
        }
    }
}