import { prismaClient } from '../../database/prismaClient';
import { Request, Response } from "express";

export class RelatorioTicketController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const list = await prismaClient.ticket.findMany({
            where: { parking_id:id }
        });

        let value = 0
        let countClose= 0

        list.map((e)=>{
            value += e.price??0
            if(e.status ==="closed"){
                countClose +=1 
            }
        })

        if(list){
            return res.json({
                count_current: list.length,
                count_closet: countClose,
                total_price: value
            });
        }else{
            return res.json({data:"Nâo encontrado!"});
        }
    }
}