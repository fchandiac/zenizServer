
const express = require('express')
const app = express()
const path = require('path')


const port = process.env.PORT || 3003
app.set('json spaces', 2)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require('cors')
app.use(cors({ origin: '*' }))

app.use(require('./routes/profiles'))
app.use(require('./routes/users'))
app.use(require('./routes/producers'))
app.use(require('./routes/records'))
app.use(require('./routes/varietyFruits'))
app.use(require('./routes/types'))
app.use(require('./routes/trays'))
app.use(require('./routes/pallets'))
app.use(require('./routes/storages'))
app.use(require('./routes/receptions'))
app.use(require('./routes/receptionsDetails'))





app.listen(port, () => {
    console.log('server work! at port: ' + port)
})
