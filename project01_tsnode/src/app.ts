import express, { Request, Response, Application } from 'express';
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send({
    hello: 'world',
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
