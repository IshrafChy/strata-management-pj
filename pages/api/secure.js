export default function handler(req, res) {
    const secretKey = process.env.SECRET_API_KEY;
  
    if (!secretKey) {
      return res.status(500).json({ error: "API key missing" });
    }
  
    res.json({ message: "Authenticated request successful!", key: secretKey });
  }
  