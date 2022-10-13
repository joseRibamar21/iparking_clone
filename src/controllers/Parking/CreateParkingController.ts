
import { prismaClient } from '../../database/prismaClient';

export class CreateParkingController {
  async handle(req:any, res:any) {
    try{
      const {manager_id , image_url, phone ,name, parking_spaces, first_price, price ,latitude, longitude} = req.body;

    const parking = await prismaClient.parking.create({data:  req.body});
    return res.json(parking)
    }catch{
      return res.json({
        data: "Error"
      })
    } 
  }
}
