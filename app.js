const express = require('express');
const app = express();

app.get('/' , (req, res) => {
    res.send("hello world");
})

app.get('/api/users' ,(req,res) => {
    res.send([1,2,3])
})
app.listen(3000, () =>{
    console.log("listen")
})