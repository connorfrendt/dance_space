const client = require('../lib/db-client.js');

client.query(`
    CREATE TABLE IF NOT EXISTS profile (
        Id Serial Primary Key,
        Username VARCHAR(255) NOT NULL,
        Password VARCHAR(255) NOT NULL
    );
`)
    .then(() => console.log('Create Tables COMPLETE'),
    err => console.log(err)
    )
    .then(() => {
        client.end();
    });