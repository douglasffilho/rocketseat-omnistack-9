'use strict';

const router = require('express').Router();

const SessionController = require('./controllers/SessionController');
const SpotsController = require('./controllers/SpotsController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const multer = require('multer');
const UploadFilterUtil = require('./utils/UploadFilterUtil');
const UploadFilter = multer(UploadFilterUtil);

router.post('/sessions', SessionController.store);

router.post('/spots', UploadFilter.single('thumbnail'), SpotsController.store);
router.get('/spots', SpotsController.index);
router.post('/spots/:spot_id/bookings', BookingController.store);

router.get('/dashboard', DashboardController.show);

module.exports = router;