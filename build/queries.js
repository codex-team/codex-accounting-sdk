"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUTATION_PAY_ONCE = exports.MUTATION_PURCHASE = exports.MUTATION_CREATE_ACCOUNT = exports.QUERY_GET_ACCOUNT = void 0;
// language=GraphQL
/**
 * Query to get account by id
 */
exports.QUERY_GET_ACCOUNT = `
  query getAccount($id: ID!) {
    getAccount(id: $id) {
      id
      name
      dtCreated
      currency
      balance {
        amount
      }
    }
  }
`;
// language=GraphQL
/**
 * Mutation for creating account
 */
exports.MUTATION_CREATE_ACCOUNT = `
  mutation AccountCreateMutation($input: AccountInput!) {
    account {
      create(input: $input) {
        recordId
      }
    }
  }
`;
// language=GraphQL
/**
 * Purchase mutation
 */
exports.MUTATION_PURCHASE = `
  mutation Purchase($input: PurchaseInput!){
    purchase(input: $input) {
      recordId
    }
  }
`;
/**
 * Increase account balance
 */
exports.MUTATION_PAY_ONCE = `
  mutation PayOnce($input: DepositInput!) {
    deposit(input:$input){
      recordId
    }
  }
`;
