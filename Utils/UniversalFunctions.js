const {
    func
} = require("joi");
const AppConstants = require("../Config/AppConstants");
const sendSuccess = function(successMsg, data) {
    successMsg = successMsg || AppConstants.Status_Message.Success.Default.customMessage;
    if (typeof successMsg == "object" && successMsg.hasOwnProperty("statusCode") && successMsg.hasOwnProperty("customMessage")) {
        return {
            statusCode: successMsg.statusCode,
            message: successMsg.customMessage,
            data: data || null
        }
    } else {
        return {
            statusCode: 200,
            message: successMsg,
            data: data || null
        }
    }
}
module.exports = {
    sendSuccess
}