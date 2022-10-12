import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetParkingController {
  async handle(req: Request, res: Response) {
    const parkings = await prismaClient.parking.findMany();
    res.json(parkings);
  }
}