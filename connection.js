const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@minimize-cluster.tliq3.mongodb.net/minimize?retryWrites=true&w=majority`;

try {
  mongoose.connect(uri), {
      useNewUrlParser: true, useUnifiedTopology: true
  }
} catch (error) {
  console.log(error);
}

process.on("uncaughtException", (error) => {
  mongoose.disconnect();
});

module.exports = mongoose;