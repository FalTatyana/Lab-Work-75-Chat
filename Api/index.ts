import express from "express";
import cors from "cors";
import messagesRouter from "./routers/messages.js";

const app = express();
app.use(express.json());
app.use('/', messagesRouter);

app.use(express.json());
app.use(cors());

const port = 8000;


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
