import express from 'express';
import bodyParser from 'body-parser';
import { assignments as assignmentsFromFile } from './data/assignments.js';
import { comments as commentsFromFile } from './data/comments.js';
import assignmentRouter from './routers/assignment.mjs';
import accountsRouter from './routers/accountsRouter.mjs';

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
   return res.send('Hello Teacher!!');
});

app.use('/assignments', assignmentRouter);

app.use('/accounts', accountsRouter);

app.listen(port, () => {
   console.log(`Server is running at the port ${port}`);
});
