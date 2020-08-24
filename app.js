const express = require('express');
const bodyParser = require('body-parser');
const {
    validate,
    ValidationError
} = require('express-validation');
const app = express();
const appSchema = require("./Schema/AppSchema");
const AppConstants = require("./Config/AppConstants");
const UniversalFunctions = require("./Utils/UniversalFunctions");
const Controllers = require("./Controllers/ParseController");
const port = AppConstants.Server.Port.Express;
app.get('/', (req, res) => {
    res.send("Started - " + AppConstants.Server.App_Name);
});
// Configuring body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.post('/api/:version(v1|v2)/parse', validate(appSchema.parse_schema), (req, res) => {
    Controllers.parseData(req.params.version, (err, response) => {
        if(err){
            res.json(err);
        }
        else{
            res.send(UniversalFunctions.sendSuccess(AppConstants.Status_Message.Success.Default, response));            
        }
    })
});
//Error Handling
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
})
const server = app.listen(port, () => console.log(AppConstants.Server.App_Name + " running on port" + ` ${port}!`));

module.exports = server;