import { prismaClient } from "../../database/prismaClient";
export class UpdateVagasParkingController {

  async handle(req: any, res: any) {

   try{
    const { id } = req.params;
    const { parking_spaces } = req.body;
    const updatedParking = await prismaClient.parking.update({
      where: { id },
      data:  req.body
    });
    res.json(updatedParking);
   }catch{
    return res.json({
      data: "Error"
    })
   }
  }

}