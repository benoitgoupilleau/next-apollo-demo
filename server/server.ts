import express from 'express';
import cors from 'cors';
import apolloServer from './schema';

const app = express();

app.use(cors());
apolloServer.applyMiddleware({ app });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Graphql Server started on: http://localhost:${port}`);
});
