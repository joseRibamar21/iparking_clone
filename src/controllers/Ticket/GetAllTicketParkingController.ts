import { prismaClient } from '../../database/prismaClient';
import { Request, Response } from "express";

export class GetAllTicketParkingController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const oneTicket = await prismaClient.ticket.findMany({
            where: { parking_id: id }
        });

        if(oneTicket){
            return res.json(oneTicket);
        }else{
            return res.json({data:"Nâo encontrado!"});
        }
    }
}