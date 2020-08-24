let parseData = (version, callback) => {
    let response = {};
    if (version === "v1") {
        response = {
            "firstName": "JOHN000",
            "lastName": "MICHAEL000",
            "clientId": "9994567",
        }
    } else {
        response = {
            "firstName": "JOHN",
            "lastName": "MICHAEL",
            "clientId": "999-4567",
        }
    }
    callback(null, response);    
}

module.exports = {
    parseData
}