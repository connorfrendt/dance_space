const client = require('../lib/db-client');

client.query(`
    DROP TABLE IF EXISTS profile;
`)
    .then(
        () => console.log('Drop tables COMPLETE'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    })