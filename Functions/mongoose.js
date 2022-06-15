const mongoose = require("mongoose");
const { mongoConnection } = require("../config/ayarlar.json");

mongoose.connect(mongoConnection , { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("[MONGO] - MongoDB bağlandı!");
});

mongoose.connection.on("error", () => {
  console.error("[MONGO] - MongoDB bağlanılamadı!");
});

