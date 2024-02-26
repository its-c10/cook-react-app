// https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
import ChatGPTHandler  from './chatgpt';
import express, {Request, Response, Application} from 'express';
import Trie from './trie';

let chatGPT: ChatGPTHandler;
const PORT = process.env.PORT || 3001;

const app: Application = express();

app.get("/api", (req, res): void => {
  res.json({message: "Everything should work now"});
});

app.listen(PORT, (): void => {
  console.log(`Server listening on ${PORT}`);

  let trie = new Trie();
  trie.insert('Chicken');
  trie.insert('Chick');
  
  console.log(`Starts: ${trie.startsWith('Ch')}`);

  // chatGPT = new ChatGPTHandler();
});