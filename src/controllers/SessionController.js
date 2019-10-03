'use strict';

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });

            console.log('stored user');
            console.log(user);

            return res.status(201).json(user);
        }

        console.log('found user');
        console.log(user);

        return res.status(202).json(user);
    }
};