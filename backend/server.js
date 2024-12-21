const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Endpoint
app.post("/api/contact", (req, res) => {
  const { name, contact, message } = req.body;

  // Form məlumatlarının yoxlanılması
  if (!name || !contact || !message) {
    return res.status(400).json({ error: "Bütün sahələri doldurun." });
  }

  console.log("Alınan məlumatlar:", { name, contact, message });

  // Mesajı müvəffəqiyyətlə alındığı haqqında cavab
  res.status(200).json({ message: "Mesaj uğurla alındı!" });
});

// Serveri Başlat
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} ünvanında işləyir.`);
});
