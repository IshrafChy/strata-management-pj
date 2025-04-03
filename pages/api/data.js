// pages/api/data.js

export default function handler(req, res) {
    // Sample data you want to return
    const data = {
      message: "Hello from the API!",
      date: new Date(),
      success: true,
    };
  
    // Sending the data as a JSON response
    res.status(200).json(data);
  }
  