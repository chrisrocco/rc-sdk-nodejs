
export interface Config {
    secret: string;
}

export interface JWTPayload {
    authorizedTasks: number[];
    authorizedInstances: number[];
}