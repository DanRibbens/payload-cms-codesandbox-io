const express = require("express");
const payload = require("payload");
const { MongoMemoryServer } = require("mongodb-memory-server");

(async () => {
  const app = express();

  // mongodb in memory
  const mongod = new MongoMemoryServer();
  const uri = await mongod.getUri();
  console.log(uri);

  // Initialize Payload
  payload.init({
    secret: "myappsecret",
    mongoURL: uri,
    express: app
  });

  // force sandbox to open to admin panel
  app.use("/", (req, res) => res.redirect("admin"));

  app.listen(3000, async () => {
    console.log("Payload running on port 3000!");
  });
})().catch((err) => {
  console.log(err);
});
