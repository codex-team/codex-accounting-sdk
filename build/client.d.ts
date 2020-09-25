import { Settings } from './types';
/**
 * Represent client for sending queries to remote service
 */
export default class Client {
    /**
     * Instance of axios for connection to CodeX Accounting API
     */
    private readonly apiInstance;
    /**
     * Create axios instance with https agent
     *
     * @param settings - settings for client module
     */
    constructor(settings: Settings);
    /**
     * Calls remote service and returns response
     *
     * @param query - request to send
     * @param variables - request variables
     */
    call(query: string, variables?: object): Promise<any>;
    /**
     * Returns base URL endpoint
     */
    private get baseURL();
}
