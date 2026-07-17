import express from "express";
import { createRequire } from "module";
import { Message } from "../types";

const messagesRouter = express.Router();

const require = createRequire(import.meta.url);
const { Vigenere } = require("caesar-salad");

// const path = "./messages";
// let data: Message[] = [];

// const run = async () => {
//   const files = await fs.readdir(path);
//   const messages = await Promise.all(
//     files.map(async file => {
//       const fileContents = await fs.readFile(path + "/" + file);
//       return JSON.parse(fileContents.toString());
//     })
//   );
//   data = messages;
// };

// run().catch(console.error);


// messagesRouter.get("/", async (req, res) => {
//   const response = data.slice(-5);
//   res.send(response);
// });

// messagesRouter.post("/", async (req, res) => {
//   const newMessage = {
//     message: req.body.message,
//     datetime: new Date().toISOString(),
//   };

//   const fileName = `./messages/${newMessage.datetime}.txt`;

//   try {
//     await fs.writeFile(fileName, JSON.stringify(newMessage));
//   } catch (e) {
//     console.error(e);
//   }
//   data.push(newMessage)
//   res.send(newMessage);
// });

messagesRouter.post("/encode", (req, res) => {
  
  const newMessage: Message = {
    password: req.body.password,
    message: req.body.message,
  };

  const encodeMessage = Vigenere.Cipher(newMessage.password).crypt(newMessage.message);
  res.send(encodeMessage);
});

messagesRouter.post("/decode", (req, res) => {
  const newMessage: Message = {
    password: req.body.password,
    message: req.body.message,
  };

  const decodedMessage = Vigenere.Decipher(newMessage.password).crypt(newMessage.message);
  console.log("decodeMessage", decodedMessage);
  res.send(decodedMessage);
});

export default messagesRouter;
