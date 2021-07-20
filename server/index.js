import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import listRoutes from './routes/lists.js';
import loginRoutes from './routes/login.js';
import logicRoutes from './routes/logic.js';
import orderRoutes from './routes/order.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/lists', listRoutes);
app.use('/login', loginRoutes);
app.use('/logic', logicRoutes);
app.use('/order', orderRoutes);

const PORT = process.env.PORT|| 5030;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
