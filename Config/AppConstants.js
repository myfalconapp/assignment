const Server = {
    App_Name: "Node Express Assignment App",
    Port: {
        Express: 3000
    }
};
const Status_Message = {
    Required: {
        Data_Required: {
            statusCode: 400,
            customMessage: "Data is required",
            type: "DATA_REQUIRED"
        }
    },
    Success: {
        Default: {
            statusCode: 200,
            customMessage: "Success",
            type: "DEFAULT"
        }
    }
}
const App_Constants = {
    Server,
    Status_Message
}
module.exports = App_Constants;