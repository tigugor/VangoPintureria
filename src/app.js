import  express  from "express";
import {loggermid} from './utils.js'
import usersRouter from './routes/users.routers.js'
import handlebars from 'express-handlebars'

const app = express()
app.use(loggermid)

app.use(express.static('./src/public'))
app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.use('/', usersRouter)

app.listen(8080, () => console.log('Servidor activo Para verlo ingresa a http://127.0.0.1:8080/'))