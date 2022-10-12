import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class CreateParkingController {
  async handle(req: Request, res: Response) {
    const { image_url, mail, phone, name, parking_spaces, first_price, price,latitude, longitude } = req.body;

    const parking = await prismaClient.parking.create({data: {image_url, mail, phone, name, parking_spaces, first_price, price,latitude, longitude, }});
    return res.json(parking)
  }
}
