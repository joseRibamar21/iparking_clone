import { prismaClient } from "../../database/prismaClient";
export class UpdateParkingController {

  async handle(req: any, res: any) {

   try{
    const { id } = req.params;
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