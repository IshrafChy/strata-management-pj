// pages/api/data.js
export default function handler(req, res) {
    const data = {
      message: "Hello from the API!",
      date: new Date(),
      success: true,
    };
  
    res.status(200).json(data);
  }
  