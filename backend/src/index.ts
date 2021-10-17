import express from "express";
const app = express();
const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
