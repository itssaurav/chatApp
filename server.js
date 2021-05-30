let server = require('express');
let app = server();
app.use(server.static('public'))
const port = 3000
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})