const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

app.use(express.static(__dirname + '/public'))

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`)) 