# Solidity Starter 🪭

A `Foundry` &🌟& `Hardhat` compatible solidity starter

TLDR;
`cp .env.sample .env && make demo`

## Demo

[![asciicast](https://asciinema.org/a/591482.svg)](https://asciinema.org/a/591482)

## Usage

```makefile
# Step.0: essential
cp .env.sample .env

# Step.1: install dependencies
make init

# Step.3: run forge & hardhat tests
forge test
# or
pnpm test

# Step.4: run hardhat tasks
make show-accounts

# Step.5: run hardhat deploy task
# make deploy-token
```

- [Foundry documentation](https://book.getfoundry.sh/)
- [Hardhat documentation](https://hardhat.org/hardhat-runner/docs/getting-started#overview)

## Acknowledge

- [https://github.com/foundry-rs/hardhat-foundry-template](https://github.com/foundry-rs/hardhat-foundry-template)
