'use strict';
const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        try {
            const user = await User.findById(user_id);

            if (!user) {
                console.log(`user does not exist=${user_id}`);
                return res.status(404).json({
                    rel: 'user does not exists',
                    arguments: [
                        user_id
                    ],
                    logref: 'user_not_found'
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                rel: 'error trying to get user by id',
                arguments: [
                    user_id,
                    error
                ],
                logref: 'get_user_by_id_error'
            });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            techs: techs.split(',').map(tech => tech.trim()),
            company,
            price
        });
        
        console.log('stored spot');
        console.log(spot);

        return res.status(201).json(spot);
    },

    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({techs: tech});

        return res.json(spots);
    }

};