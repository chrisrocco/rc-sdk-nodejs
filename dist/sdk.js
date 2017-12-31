"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken = require("jsonwebtoken");
const config_1 = require("./config");
function authorizeTask(jwt, taskID) {
    let tkn = verify(jwt);
    if (!tkn)
        return false;
    let scope = tkn.authorizedTasks;
    return scope.indexOf(taskID) >= 0;
}
exports.authorizeTask = authorizeTask;
function authorizeInstance(jwt, instanceID) {
    let tkn = verify(jwt);
    if (!tkn)
        return false;
    let scope = tkn.authorizedInstances;
    return scope.indexOf(instanceID) >= 0;
}
exports.authorizeInstance = authorizeInstance;
function verify(jwt) {
    let config = config_1.getConfig();
    let tkn = null;
    try {
        tkn = jsonwebtoken.verify(jwt, config.secret);
    }
    catch (e) { }
    if (tkn)
        return tkn.data;
    return null;
}
//# sourceMappingURL=sdk.js.map