import express, {Request, Response} from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
})