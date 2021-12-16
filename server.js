import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 9000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});