import { AccountInput, CreateAccountResponse, Settings, Account, TransactionResponse, DepositMutationInput } from './types';
import { PurchaseInput, PurchaseResponse } from './types/purchaseMutation';
/**
 * Class for communicating with CodeX Accounting API
 */
export default class Accounting {
    /**
     * Client for sending queries to CodeX Accounting API
     */
    private readonly client;
    /**
     * Default constructor
     *
     * @param settings - settings for client module
     */
    constructor(settings: Settings);
    /**
     * Create account in Accounting service
     *
     * @param accountInput - Account creation mutation input
     */
    createAccount(accountInput: AccountInput): Promise<CreateAccountResponse>;
    /**
     * Get workspace account
     *
     * @param accountId - workspace account id
     */
    getAccount(accountId: string): Promise<Account>;
    /**
     * Decrease money from account
     *
     * @param purchaseInput - purchase data
     */
    purchase(purchaseInput: PurchaseInput): Promise<PurchaseResponse>;
    /**
     * Increase account balance
     *
     * @param input - data for depositing money
     */
    payOnce(input: DepositMutationInput): Promise<TransactionResponse>;
}
export * from './types';
