const express = require('express')
    , app = express()
    , dotenv = require('dotenv')
    , cors  = require('cors')
    , router = require('./src/routes/index.route')
    , { StatusCodes } = require('http-status-codes')
    , { NODE_ENVIRONMENT } = require('./src/config/constant')
    , { defaultToIfEmpty, setLog } = require('./src/helper/utils')
    , { sequelizeConnectionChecker } = require('./src/database/mssqlConnection');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use( express.urlencoded( {extended: true } ) );
app.use(sequelizeConnectionChecker);

app.use('/api/v1', router);
const port = defaultToIfEmpty(process.env.PORT, 7010)
    , env = defaultToIfEmpty(process.env.NODE_ENV, NODE_ENVIRONMENT.dev);

app.get("/", (req, res) => {
    res.status(StatusCodes.OK).json({
        success: {
            status: true,
            message: 'Welcome to Songs API!'
        },
        data: null
    })
})

try {
    app.listen(port, () => {
        setLog({
            level: 'Server', method: 'Connecting to port', message: port, others: Date()
        });
    });
} catch(e) {
    setLog({
        level: 'Server', method: 'Connecting to port failed', message: e.message, others: port
    });
}

