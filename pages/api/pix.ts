import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { amount } = req.body;
  const pixKey = process.env.PIX_KEY; // Chave Pix do .env

  if (!pixKey) {
    return res.status(500).json({ message: "Pix key is not configured" });
  }

  // Criando o código Pix no formato BR Code (EMV)
  const pixCode = `00020126360014BR.GOV.BCB.PIX0114${pixKey}520400005303986540${amount.toFixed(2)}5802BR5925MinhaLoja6009SAO PAULO62070503***6304`;

  // Criando a URL do QR Code usando API gratuita
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixCode)}`;

  return res.status(200).json({ qrCode: qrCodeUrl });
}
