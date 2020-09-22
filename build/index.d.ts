import { AccountInput, CreateAccountResponse, Settings, Account } from './types';
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
}
export * from './types';
