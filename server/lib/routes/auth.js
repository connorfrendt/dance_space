const router = require('express').Router();
const client = require('../db-client');

router
    .post('/signup', (req, res) => {
        const body = req.body;
        const username = body.username;
        const password = body.password;

        console.log('*****CREATING NEW USER PROFILE*****');

        client.query(`
            INSERT INTO profile (Username, Password)
            VALUE($1, $2)
            RETURNING Id, Username
        `, [username, password])
            .then(result => {
                res.json(result.rows[0]);
            });
    });

module.exports = router;