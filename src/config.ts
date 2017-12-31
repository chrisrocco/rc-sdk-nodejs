import {Config} from "./definitions";

let _config: Config = null;

export function setConfig(config: Config) {
    _config = config;
}

export function getConfig(): Config {
    return _config;
}