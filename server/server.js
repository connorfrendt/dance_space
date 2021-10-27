const app = require('./lib/app');
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server APP has started on port ', PORT);
});