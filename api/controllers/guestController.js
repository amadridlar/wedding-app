const newGuest = require('../src/newGuest');
const readGuestDB = require('../src/readGuestDB');
const getGuests = require('../src/getGuests');

module.exports = {
    newGuest: (req, res) => {
        const guestObject = {
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            guestName: req.body.guestName,
            kidsNumber: req.body.kidsNumber,
            busNeeded: req.body.busNeeded,
            busNumber: req.body.busNumber,
            intolerances: req.body.intolerances,
            veggi: req.body.veggi,
            kidsMenu: req.body.kidsMenu,
            kidsMenuNumber: req.body.kidsMenuNumber,
            otherIntolerances: req.body.otherIntolerances,
            active: true,
        };

        newGuest.createNewGuest(guestObject);
        res.status(201);
        res.json(guestObject);
    },
    checkGuest: (req, res) => {
        res.json({
            email: req.query.email,
            exists: readGuestDB.guestExists(req.query.email),
        });
    },
    getAllGuests: (req, res) => {
        const guestsArray = getGuests.getGuestObjects();
        res.status(200);
        res.json({
            totalGuests: getGuests.getTotalGuests(guestsArray),
            totalActives: getGuests.getTotalActives(guestsArray),
            totalUnactives: getGuests.getTotalInactives(guestsArray),
            totalKids: getGuests.getTotalKids(guestsArray),
            totalKidsMenu: getGuests.getTotalKidsMenus(guestsArray),
            totalBus: getGuests.getTotalBus(guestsArray),
            guests: guestsArray,
        });
    },
}