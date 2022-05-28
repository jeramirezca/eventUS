// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

/* // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default  async(req, res) =>{
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
} */