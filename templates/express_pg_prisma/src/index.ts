import express from 'express';
import UserRoutes from '../routes/userRoutes'
import { Request, Response } from 'express';
import { test } from '../controllers/sampleController';
import { testDbConnection } from '../db/connectDB';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/users', UserRoutes);

app.get('/', (_, res: Response): void => {
  res.status(200).json({ message: 'Welcome to the Express-Prisma' });
});


app.listen(port, async () => {
  await testDbConnection();
  console.log(`Server is running on port ${port}`);
});
