import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class CloseTicketController{
async handle(req : Request, res: Response){
    const {id} = req.params;
    let ticket = await prismaClient.ticket.update({where: {id}, data: {time_checkout: new Date(), status: "closed"}});
    if(!ticket) return res.status(400).json({error: 'Ticket not found'});
   
    
    const parking = await prismaClient.parking.findFirst(
        {where: 
            { id: 
                ticket.parking_id
            }
        });
    

    if(!parking) return res.status(400).json({error: 'Parking not found'});    


    let date1 = ticket.time_checkin.getTime();
    let date2 = ticket.time_checkout?.getTime();

    let TotalHours =  (( (date2 || new Date().getTime()) - date1) / 1000) / 60 / 60 ;
    
    const finalPrice = TotalHours * parking?.price + parking?.first_price;

    ticket = await prismaClient.ticket.update({where: {id}, data: {price: finalPrice}});

    return res.json({ticket, parking});
}

}