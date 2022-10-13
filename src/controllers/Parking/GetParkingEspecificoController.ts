import { prismaClient } from '../../database/prismaClient';
import { Request, Response } from "express";

export class GetParkingEspecificoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const deletedParking = await prismaClient.parking.findFirst({
            where: { id }
        });
        res.json(deletedParking);
    }
}