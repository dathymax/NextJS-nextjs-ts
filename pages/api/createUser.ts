// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type userProps = {
    email: string,
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const user: userProps = JSON.parse(req.body);
        if (req.method === "POST") {
            if (!user.email.length) {
                return res.status(500).json({ message: "Please provide your email!" })
            }

            try {
                const data = await prisma.user.create({
                    data: {
                        email: user.email,
                        name: user.name
                    }
                })

                return res.status(200).json(data);
            } catch (error) {
                return res.status(500).json("Create user failed!")
            }
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}
