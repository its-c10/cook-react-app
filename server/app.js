// https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req,res) => {
  res.json({message: "Hello from server!"});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});