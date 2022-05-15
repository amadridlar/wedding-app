const router = require('express').Router();
const guestController = require('../controllers/guestController');

router.route('/newGuest')
    .post(guestController.newGuest);

router.route('/checkGuest')
    .get(guestController.checkGuest);

router.route('/getAllGuests')
    .get(guestController.getAllGuests);

module.exports = router;