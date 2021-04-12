import express from 'express';
import path from 'path';
// Cors permite acesso a todos os front-ends
import cors from 'cors';
import 'express-async-errors';
// getRepository todo dado passa por um repositório que tem as regras do que e inserido ou deletado
import "./database/connection";
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

// Cors permite acesso a todos os front-ends
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

// Usa um fluxo de REQ(requisição) e RES(resposta)

// localhost:3333 e a porta, que pode ser trocada

