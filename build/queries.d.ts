/**
 * Query to get account by id
 */
export declare const QUERY_GET_ACCOUNT = "\nquery getAccount($id: ID!) {\n  getAccount(id: $id) {\n    id\n    name\n    currency\n    balance\n  }\n}\n";
/**
 * Mutation for creating account
 */
export declare const MUTATION_CREATE_ACCOUNT = "\n  mutation AccountCreateMutation($input: AccountInput!) {\n    account {\n      create(input: $input) {\n        recordId\n      }\n    }\n  }\n";
/**
 * Purchase mutation
 */
export declare const MUTATION_PURCHASE = "\n  mutation Purchase($input: PurchaseInput!){\n    purchase(input: $input) {\n      recordId\n    }\n  }\n";
/**
 * Increase account balance
 */
export declare const MUTATION_PAY_ONCE = "\n  mutation PayOnce($input: DepositInput!) {\n    deposit(input:$input){\n      recordId\n    }\n  }\n";
