/**
 * The base unit of an accounting system
 */
export interface Account {
    /**
     * Account id
     */
    id: string;
    /**
     * Account name (for example, "Cashbook")
     */
    name: string;
    /**
     * Date when account was created
     */
    dtCreated: number;
    /**
     * Account currency
     */
    currency: string;
    /**
     * Account balance
     */
    balance: {
        /**
         * Amount of balance
         */
        amount: bigint;
    };
}
