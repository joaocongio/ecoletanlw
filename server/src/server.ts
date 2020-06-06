import express from 'express'; 
import cors from 'cors';//instalar a dependencia com npm install @type/express -d (-d = dependencia de desenvolvimento)
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(3333);