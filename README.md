# CodeX Accounting SDK
This module simplifies communicating with CodeX Accounting API.

## Module initialization

1. Import module to project
    ```ts
    import Accounting from 'codex-accounting-sdk';
    ```

2. Create accounting object with accounting URL in parameter
    ```ts
    const accounting = new Accounting({
      baseURL: '127.0.0.1:25565',
    });
    ```

3. Use Accounting SDK in your project
    ```ts
    accounting.createAccount({
      name: 'Workspace',
      type: AccountType.LIABILITY,
      currency: Currency.USD,
    });
    ```

## Using with TLS verification

Create accounting object with settings like this:

```ts
const accounting = new Accounting({
  baseURL: '127.0.0.1:25565',
  tlsVerify: {
    tlsCaCertPath: '/usr/src/app/src/accounting/tls/ca.pem',
    tlsCertPath: '/usr/src/app/src/accounting/tls/client.pem',
    tlsKeyPath: '/usr/src/app/src/accounting/tls/client-key.pem',
  },
});
```

You need to assign path values to `tlsCaCertPath`, `tlsCertPath` and `tlsKeyPath` in `tlsVerify` object.

## Build library

To build the library, run the following command:

```shell script
yarn build
```
