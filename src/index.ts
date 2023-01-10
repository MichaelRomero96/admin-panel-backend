import express from 'express';
import cors from 'cors';
import routes from './routes/';

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const PORT = 3001;

// routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
