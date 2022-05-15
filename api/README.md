#wedding-app API

## Start api in background
`pm2` needs to be installed https://pm2.keymetrics.io/docs/usage/quick-start/

### Start the api
- In the server, go to directory where `index.js` is been located
- Start the api typing `pm2 start index.js`
- Type `pm2 list` to check if api is running

### Stop the api
- When `pm2 list` is typed, an id is linked to the api process (i.e. 0)
- Stop the process with `pm2 stop <id>`


## Global variables
This variables are defined in the `environment/.env` file in the root folder
```
JSONDBPATH  path to database json files
```

## Services

### Check gest
Check if the guest already exists by its email

`GET /guests/checkGuest/?email={userEmail}`

Response
```
status: 200
body: 
{
    "email": "{userEmail}"
    "exists": boolean
}
```

### Update guest (NOT NECESSARY)
Update info of an already saved guest
`POST /guests/updateGuest/?email={userEmail}`

Response
```
status: 201
body:
{
    "email": "{userEmail}"
    "updated": true
}
```

### Create new guest
Save form from a new guest

`POST /guests/newGuest`

Request

``` json
{
    "userName": "string",
    "userEmail": "string",
    "guestName": "string",
    "kidsNumber": "number",
    "busNeeded": "boolean",
    "busNumber" : "number",
    "intolerances": "string",
    "veggi": "string",
    "kidsMenu": "boolean",
    "kidsMenuNumber": "number",
    "otherIntolerances": "string"
}
```

Response
```
status: 204
body: 
{
    "userName": "string",
    "userEmail": "string",
    "guestName": "string",
    "kidsNumber": "number",
    "busNeeded": "boolean",
    "busNumber" : "number",
    "intolerances": "string",
    "veggi": "string",
    "kidsMenu": "boolean",
    "kidsMenuNumber": "number",
    "otherIntolerances": "string"
    "active": "boolean"
}
```

### Get all guests

`GET /guests/getAllGuests`

```
Response: 200
Body:
{
    "totalGuests": number,
    "totalActives": number,
    "totalUnactives": number,
    "totalKids": number,
    "totalKidsMenu": number,
    "totalBus": number,
    "guests": [
            {guest},
            {guest},
            {guest},
            ...
        ]
}
```

## Database
`/jsondbpath/`
```
userEmail1-guest.json
userEmail2-guest.json
userEmail3-guest.json
...
```
### Guest object
```
{
    "userName": "string",
    "userEmail": "string",
    "guestName": "string",
    "kidsNumber": "number",
    "busNeeded": "boolean",
    "busNumber" : "number",
    "intolerances": "string",
    "veggi": "string",
    "kidsMenu": "boolean",
    "kidsMenuNumber": "number",
    "otherIntolerances": "string"
    "active": "boolean"
}

```