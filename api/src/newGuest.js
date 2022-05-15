const fs = require('fs');


exports.createNewGuest = (guestObject) => {
    const objectTitle = `${guestObject.userEmail}-guest.json`;
    fs.writeFileSync(
        `${process.env.JSONDBPATH}/${objectTitle}`,
        JSON.stringify(guestObject)
    );
}