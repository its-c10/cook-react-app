// https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});