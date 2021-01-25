/**
 * Input of purchase mutation
 */
export interface PurchaseInput {
    /**
     * Purchaser account identifier
     */
    accountId: string;
    /**
     * The cost of service or payment amount
     */
    amount: bigint;
    /**
     * Operation purpose or description
     */
    description?: string;
}
/**
 * Special type for purchase response
 */
export interface PurchaseResponse {
    /**
     * Purchase transaction identifier
     */
    recordId: string;
}
