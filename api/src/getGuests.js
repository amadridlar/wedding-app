const fs = require('fs');


exports.getTotalGuests = (guestsArray) => {
    let totalGuests = 0;
    guestsArray.forEach(guest => {
        totalGuests += 1;
        if (guest.guestName)
            totalGuests += 1;

        totalGuests += parseInt(guest.kidsNumber);
    });

    return totalGuests;
};

exports.getTotalActives = (guestsArray) => {
    let totalActives = 0;
    guestsArray.forEach(guest => {
        if (guest.active) {
            totalActives += 1;
            if (guest.guestName)
                totalActives += 1;

            totalActives += parseInt(guest.kidsNumber);
        }

    });

    return totalActives;
};

exports.getTotalInactives = (guestsArray) => {
    let totalInactives = 0;
    guestsArray.forEach(guest => {
        if (!guest.active) {
            totalInactives += 1;
            if (guest.guestName)
                totalInactives += 1;

            totalInactives += parseInt(guest.kidsNumber);
        }

    });

    return totalInactives;
};

exports.getTotalKids = (guestsArray) => {
    let totalKids = 0;
    guestsArray.forEach(guest => {
        if (guest.active) {
            totalKids += parseInt(guest.kidsNumber);
        }

    });

    return totalKids;
};

exports.getTotalKidsMenus = (guestsArray) => {
    let totalKidsMenus = 0;
    guestsArray.forEach(guest => {
        if (guest.active)
            totalKidsMenus += parseInt(guest.kidsMenuNumber);
    });

    return totalKidsMenus;
};

exports.getTotalBus = (guestsArray) => {
    let totalBus = 0;
    guestsArray.forEach(guest => {
        if (guest.active)
            totalBus += parseInt(guest.busNumber);
    });

    return totalBus;
 };

exports.getGuestObjects = () => {

    const databasePath = process.env.JSONDBPATH;

    const guestObjects = [];
    const guestObjectsNames = fs.readdirSync(databasePath);

    guestObjectsNames.forEach(objectName => {
        guestObjects.push(JSON.parse(fs.readFileSync(`${databasePath}/${objectName}`)));
    });

    return guestObjects;
};