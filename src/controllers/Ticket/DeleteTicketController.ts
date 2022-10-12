import { prismaClient } from '../../database/prismaClient';
import { Request, Response } from "express";
export class DeleteTicketController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const deletedTicket = await prismaClient.ticket.delete({
            where: { id }
        });
        res.json(deletedTicket);
    }
}