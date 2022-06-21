import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try{
           //console.log("hice get")
            const datos = await prisma.post.findFirst();
            res.status(200).json({ datos }); 
        }catch(error){
            res.json({error: 'an error ocurred'});
            return;
        }
    }
    if (req.method == 'PATCH') {
        try {
         const administrador = JSON.parse(req.body);
         const updatedAdmin = await prisma.post.update({ 
            where: {
                id: "62b0a8cbcbf4f8e2dd844c70",
            },
            data: {
                admin: administrador
            },
         });
         res.status(200).json(updatedAdmin);
       } catch (err) {
         res.status(400).json({ message: 'Something went wrong' });
       }
     }
     if (req.method == 'DELETE') {
        try {
         const deletedAdmin = await prisma.post.delete({ 
            where: {
                id: "62b0a8cbcbf4f8e2dd844c70",
            },
         });
         res.status(200).json(deletedAdmin);
       } catch (err) {
         res.status(400).json({ message: 'Something went wrong' });
       }
     }
    if (req.method == 'POST') {
       try {
        const administrador = JSON.parse(req.body);
        const savedContact = await prisma.post.create({ 
            data: {
                admin: administrador
            }
        });
        res.status(200).json(savedContact);
      } catch (err) {
        res.status(400).json({ message: 'Something went wrong' });
      }
    }
    
      
} 