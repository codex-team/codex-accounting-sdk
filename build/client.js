"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
/**
 * Represent client for sending queries to remote service
 */
class Client {
    /**
     * Create axios instance with https agent
     *
     * @param settings - settings for client module
     */
    constructor(settings) {
        let httpsAgent = null;
        if (settings.tlsVerify) {
            httpsAgent = new https_1.default.Agent({
                ca: fs_1.default.readFileSync(settings.tlsCaCertPath || ''),
                cert: fs_1.default.readFileSync(settings.tlsCertPath || ''),
                key: fs_1.default.readFileSync(settings.tlsKeyPath || ''),
            });
        }
        this.apiInstance = axios_1.default.create({
            baseURL: settings.baseURL,
            timeout: 1000,
            httpsAgent: httpsAgent,
        });
    }
    /**
     * Calls remote service and returns response
     *
     * @param query - request to send
     * @param variables - request variables
     */
    call(query, variables
    // eslint-disable-next-line
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiInstance.post(this.baseURL, {
                query,
                variables,
            });
            return response.data.data;
        });
    }
    /**
     * Returns base URL endpoint
     */
    get baseURL() {
        return this.apiInstance.defaults.baseURL || '';
    }
}
exports.default = Client;
