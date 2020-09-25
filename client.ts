import https, { Agent } from 'https';
import fs from 'fs';
import axios, { AxiosInstance } from 'axios';
import { Settings } from './types';

/**
 * Represent client for sending queries to remote service
 */
export default class Client {
  /**
   * Instance of axios for connection to CodeX Accounting API
   */
  private readonly apiInstance: AxiosInstance;

  /**
   * Create axios instance with https agent
   *
   * @param settings - settings for client module
   */
  constructor(settings: Settings) {
    let httpsAgent: Agent | null = null;

    if (settings.tlsVerify) {
      try {
        httpsAgent = new https.Agent({
          ca: fs.readFileSync(settings.tlsVerify.tlsCaCertPath),
          cert: fs.readFileSync(settings.tlsVerify.tlsCertPath),
          key: fs.readFileSync(settings.tlsVerify.tlsKeyPath),
        });
      } catch (error) {
        if (error.code === 'ENOENT') {
          console.error('Cert files not found!');
        } else {
          console.error(error);
        }
      }
    }

    this.apiInstance = axios.create({
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
  public async call(
    query: string,
    variables?: object
    // eslint-disable-next-line
  ): Promise<any> {
    const response = await this.apiInstance.post(this.baseURL, {
      query,
      variables,
    });

    return response.data.data;
  }

  /**
   * Returns base URL endpoint
   */
  private get baseURL(): string {
    return this.apiInstance.defaults.baseURL || '';
  }
}
