const fs = require('fs');


exports.guestExists = (email) => {
    const database = fs.readdirSync(process.env.JSONDBPATH);
    return database.some(guest => email === guest.split('-')[0]);
}
