
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
app.use(require('./routes/varieties'))
app.use(require('./routes/types'))
app.use(require('./routes/trays'))
app.use(require('./routes/pallets'))
app.use(require('./routes/storages'))
app.use(require('./routes/receptions'))
app.use(require('./routes/packs'))
app.use(require('./routes/producerAccounts'))
app.use(require('./routes/advances'))
app.use(require('./routes/customers'))
app.use(require('./routes/customerAccounts'))
app.use(require('./routes/dispatchs'))
app.use(require('./routes/settlements'))
app.use(require('./routes/traysMovements'))




app.listen(port, () => {
    console.log('server work! at port: ' + port)
})
