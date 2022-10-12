import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetTicketController {
  async handle(req: Request, res: Response) {
    const ticket = await prismaClient.ticket.findMany();
    res.json(ticket);
  }
}