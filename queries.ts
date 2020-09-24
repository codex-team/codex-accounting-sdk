// language=GraphQL
/**
 * Query to get account by id
 */
export const QUERY_GET_ACCOUNT = `
query getAccount($id: ID!) {
  getAccount(id: $id) {
    id
    name
    currency
    balance
  }
}
`;

// language=GraphQL
/**
 * Mutation for creating account
 */
export const MUTATION_CREATE_ACCOUNT = `
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
export const MUTATION_PURCHASE = `
  mutation Purchase($input: PurchaseInput!){
    purchase(input: $input) {
      recordId
    }
  }
`;
