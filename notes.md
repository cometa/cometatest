# Cometa Blockchain

### Scaffold the Cometa chain
Scaffold a new Cosmos SDK blockchain using the ignite scaffold chain command.

By default a chain is scaffolded with a new empty Cosmos SDK module. Use the --no-module flag to skip module scaffolding.

Account addresses on Cosmos SDK-based blockchains have string prefixes. For example, the Cosmos Hub blockchain uses the default "cosmos" prefix. To use the "cometa" address prefix use the "--address-prefix" flag
```
$ ignite scaffold chain cometa --no-module --address-prefix cometa
```
The command creates a new `cometa` directory with a brand new Cosmos SDK blockchain. This blockchain doesn't have any application-specific logic yet, but it imports the following Cosmos SDK modules:

1. Auth - Authentication of accounts and transactions for Cosmos SDK applications.
2. Authz - Authorization for accounts to perform actions on behalf of other accounts.
3. Bank - Token transfer functionalities.
4. Distribution - Fee distribution, and staking token provision distribution.
5. Evidence - Evidence handling for double signing, misbehaviour, etc.
6. Feegrant - Grant fee allowances for executing transactions.
7. Governance - On-chain proposals and voting.
8. Mint - Creation of new units of staking token.
9. Params - Globally available parameter store.
1. Slashing - Validator punishment mechanisms.
2. Staking - Proof-of-Stake layer for public blockchains.
3. Upgrade - Software upgrades handling and coordination.
4. IBC - Inter-Blockchain Communication protocol (IBC) allows blockchains to talk to each other.

### Scaffold the devices module
Scaffold a new module called devices. This module manages the devices data and metadat, including users and owners.

Use the optional --dep flag to specify the bank module.
```
ignite scaffold module devices --dep bank
```
This command creates the x/devices directory and imports the devices module into the blockchain in the app/app.go directory.