import { AccountInput, CreateAccountResponse, Settings, Account } from './types';
import { MUTATION_CREATE_ACCOUNT, QUERY_GET_ACCOUNT } from './queries';
import Client from './client';

/**
 * Class for communicating with CodeX Accounting API
 */
export default class Accounting {
  /**
   * Client for sending queries to CodeX Accounting API
   */
  private readonly client: Client;

  /**
   * Default constructor
   *
   * @param settings - settings for client module
   */
  constructor(settings: Settings) {
    this.client = new Client(settings);
  }

  /**
   * Create account in Accounting service
   *
   * @param accountInput - Account creation mutation input
   */
  public async createAccount(accountInput: AccountInput): Promise<CreateAccountResponse> {
    return (await this.client.call(MUTATION_CREATE_ACCOUNT, {
      input: accountInput,
    })).account.create;
  }

  /**
   * Get workspace account
   *
   * @param accountId - workspace account id
   */
  public async getAccount(accountId: string): Promise<Account> {
    return (await this.client.call(QUERY_GET_ACCOUNT, {
      id: accountId,
    })).getAccount;
  }
}

export * from './types';
