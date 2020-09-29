import { AccountInput, CreateAccountResponse, Settings, Account, TransactionResponse, DepositMutationInput } from './types';
import { QUERY_GET_ACCOUNT, MUTATION_CREATE_ACCOUNT, MUTATION_PAY_ONCE, MUTATION_PURCHASE } from './queries';
import Client from './client';
import { PurchaseInput, PurchaseResponse } from './types/purchaseMutation';

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

  /**
   * Decrease money from account
   *
   * @param purchaseInput - purchase data
   */
  public async purchase(purchaseInput: PurchaseInput): Promise<PurchaseResponse> {
    return (await this.client.call(MUTATION_PURCHASE, {
      input: purchaseInput,
    })).purchase;
  }

  /**
   * Increase account balance
   *
   * @param input - data for depositing money
   */
  public async payOnce(input: DepositMutationInput): Promise<TransactionResponse> {
    return (await this.client.call(MUTATION_PAY_ONCE, {
      input,
    })).deposit;
  }
}

export * from './types';
