const pg = require('pg');
const DATABASE_URL = 'postgres://localhost:5432/dancespacedb';
const Client = pg.Client;
const client = new Client(DATABASE_URL);

client.connect()
    .then(() => console.log('**************************\n* Connected to Database *\n**************************\n', DATABASE_URL, '\n\n'))
    .catch(err => console.error('**************************\nConnection ERROR\n', err, '\n**************************'));

client.on('error', err => {
    console.error('\n**************************\n DATABASE ERROR \n**************************\n\n\n', err);
});

module.exports = client;