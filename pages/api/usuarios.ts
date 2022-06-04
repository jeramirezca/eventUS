import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const RutaApiUsuarios = (req:NextApiRequest, res: NextApiResponse) =>{
    if (req.method === "GET"){
        console.log("hice get");
        //const listusuarios = prisma.usuarios.findMany({});
        //res.status(200).json({usuarios})
    }
}

export default RutaApiUsuarios;