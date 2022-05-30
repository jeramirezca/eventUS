import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default  async(req: NextApiRequest, res: NextApiResponse) =>{
    if (req.method== "GET")
  try{
    const post = await prisma.post.create({
      data:{
        title: 'Prisma love',
        body: 'holi'
      }
    })
    res.json(post);
  }catch(error){
    res.json({error: 'an error ocurred'});
    return;
  }
} 