'use strict';

const express = require('express');
const router = require('./routes');
const config = require('config');
const mongoose = require('mongoose');
const cron = require('./cron');

const app = express();
mongoose.connect(
    config.mongodb.connection,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// req.query acessa os parametros da URL, Ex.: /teste?idade=20 | req.query.idade == 20
// req.params acessa o path parameter pelo nome. Ex.: /teste/:id | req.params.id
// req.body acessa o corpo da requisição

app.use(express.json());
app.use(router);

app.listen(config.app.port, () => {
    console.log(`listening to port ${config.app.port}`);
    cron.startSchedullers();
});
