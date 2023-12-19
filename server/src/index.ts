// https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
import ChatGPTHandler  from './chatgpt';
import express, {Request, Response, Application} from 'express';

let chatGPT;
const PORT = process.env.PORT || 3001;

const app: Application = express();

app.listen(PORT, (): void => {
  console.log(`Server listening on ${PORT}`);
  chatGPT = new ChatGPTHandler();
});