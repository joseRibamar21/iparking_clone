import { prismaClient } from '../../database/prismaClient';
import { Request, Response } from "express";
export class DeleteParkingController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const deletedParking = await prismaClient.parking.delete({
            where: { id }
        });
        res.json(deletedParking);
    }
}