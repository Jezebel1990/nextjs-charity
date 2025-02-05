import { NextApiRequest, NextApiResponse } from "next";
import { Pix } from "../../utils/Pix";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { amount, txid } = req.body;

  const pixKey = process.env.PIX_KEY?.trim();
  const merchantName = process.env.PIX_MERCHANT_NAME?.trim();
  const merchantCity = process.env.PIX_MERCHANT_CITY?.trim();
  const description = process.env.PIX_DESCRIPTION?.trim() || "Pagamento";

  if (!pixKey || !merchantName || !merchantCity) {
    return res.status(500).json({ message: "Configuração do Pix ausente" });
  }

  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ message: "Valor inválido" });
  }

  // Criar o Pix Copia e Cola
  const pix = new Pix(pixKey, description, merchantName, merchantCity, txid, amount);
  const pixCode = pix.getPayload();

  // Criar URL do QR Code
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixCode)}`;

  return res.status(200).json({ pixCode, qrCode: qrCodeUrl });
}
