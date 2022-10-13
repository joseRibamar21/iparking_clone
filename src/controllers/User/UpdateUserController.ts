import { prismaClient } from "../../database/prismaClient";

import { Request, Response } from "express";

export class UpdateUserController {

  async handle(req: Request, res: Response) {

    const { id } = req.params;

    res.json();
  }

}