'use strict';

const nodeCron = require('node-cron');
const config = require('config');

module.exports = {

    async startSchedullers() {
        if (process.env.NODE_ENV === 'production') {
            console.log('starting schedulled jobs');
            nodeCron.schedule('* * * * * *', () => { console.log('second schedule') });
        } else {
            console.log(`${process.env.NODE_ENV} profile has not cron jobs`);
        }
    }

};