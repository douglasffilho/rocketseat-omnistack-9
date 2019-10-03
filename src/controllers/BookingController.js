'use strict';

const Booking = require('../models/Booking');

module.exports = {

    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        let booking = await Booking.findOne({
            user: user_id,
            spot: spot_id,
            date
        });

        if (!booking) {
            booking = await Booking.create({
                user: user_id,
                spot: spot_id,
                date
            });

            await booking.populate('spot').populate('user').execPopulate();
            return res.status(201).json(booking);
        }

        await booking.populate('spot').populate('user').execPopulate();
        return res.status(202).json(booking);
    }

};