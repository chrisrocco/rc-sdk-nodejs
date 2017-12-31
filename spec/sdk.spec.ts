import RC from '../src/index';
import {JWTPayload} from "../src/definitions";
import * as jsonwebtoken from 'jsonwebtoken';

describe('SDK Test', function(){

    let payload: JWTPayload = {
        authorizedInstances: [ 1, 4, 37 ],
        authorizedTasks: [ 27, 13 ]
    };

    let jwt = jsonwebtoken.sign({
        data: payload
    }, 'some-secret', { expiresIn: '1h' });

    it('Should expose research coder helper functions', () => {

        RC.setConfig({
            secret: 'some-secret'
        });

        expect(RC.authorizeInstance(jwt, 37)).toBeTruthy();
        expect(RC.authorizeInstance(jwt, 99)).toBeFalsy();
        expect(RC.authorizeTask(jwt, 27)).toBeTruthy();
        expect(RC.authorizeTask(jwt, 99)).toBeFalsy();

    })
});