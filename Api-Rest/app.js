const express= require('express');
const app = express();
const port = process.env.PORT ?? 3000;
app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.json({message: 'Hello, world!'});
})

app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
});
