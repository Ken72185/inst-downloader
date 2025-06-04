const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

const downloadRoute = require("./routes/downloadRoute");
app.use("/api/download", downloadRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});