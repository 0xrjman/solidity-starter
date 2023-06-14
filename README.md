# Foundry & Hardhat Starter

## Usage

TLDR;
`cp .env.sample .env && make demo`

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
