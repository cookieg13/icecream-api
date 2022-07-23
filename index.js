const express = require('express');

const app = express();
//app - the actual api we are building
const PORT = 8080;

app.use(express.json())
//when a client requests this route, the callback function is fired
//endpoint /icecream
app.get('/icecream', (req, res) => {
    res.status(200).send({
        icecream: '🍦',
        flavour: 'chocolate'
    })

});
//endpoint /icecream/:id
app.post('/icecream/:id', (req, res) => {
    const { id } = req.params;
    const { topping } = req.body;
    if (!topping) {
        res.status(418).send({ message: 'We need a topping!' })
    }
    res.send({
        icecream: `🍦 with your ${topping} and ID ${id}`

    });
});

app.listen(PORT, () => {
    console.log(`Web Server is listening at port ${PORT}`)
})
//start server with command "node .""