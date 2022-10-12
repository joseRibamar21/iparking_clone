import { prismaClient } from "../../database/prismaClient";

import { Request, Response } from "express";

export class UpdateParkingController {

  async handle(req: Request, res: Response) {

    const { id } = req.params;
    const { name, phone, mail, first_price, price, image_url } = req.body;
    const updatedParking = await prismaClient.parking.update({
      where: { id },
      data: { name, phone, mail, first_price, price, image_url }
    });
    res.json(updatedParking);
  }

}