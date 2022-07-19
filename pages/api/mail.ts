import { NextApiRequest, NextApiResponse } from 'next';
import { verifyMailer } from '../../utils/mail';

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    await verifyMailer();

    res.status(200).json(true);
}
