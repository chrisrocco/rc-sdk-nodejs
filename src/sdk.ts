import * as jsonwebtoken from 'jsonwebtoken';
import {Config, JWTPayload} from "./definitions";
import {getConfig} from "./config";

export function authorizeTask(jwt, taskID): boolean {
    let tkn = verify(jwt);
    if(!tkn) return false;
    let scope = tkn.authorizedTasks;
    return scope.indexOf(taskID) >= 0;
}

export function authorizeInstance(jwt, instanceID): boolean {
    let tkn = verify(jwt);
    if(!tkn) return false;
    let scope = tkn.authorizedInstances;
    return scope.indexOf(instanceID) >= 0;
}




function verify(jwt): JWTPayload {
    let config: Config = getConfig();
    let tkn = null;
    try {
        tkn = jsonwebtoken.verify(jwt, config.secret);
    } catch (e) { }
    if(tkn) return tkn.data;
    return null;
}