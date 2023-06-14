import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";

export default async function deployToken(
    hre: HardhatRuntimeEnvironment
): Promise<void> {
    const [account] = await hre.ethers.getSigners();

    console.log(`Deployer address: ${await account.getAddress()}`)
    console.log(`Deploying ...`)

    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy("Hello I'm Token");
    await token.deployed();

    console.log(`Token deployed to: ${token.address}`);

    const greeting = await token.greet();
    console.log(`Greeting from token: ${greeting}`);

    const balance = await token.balanceOf(account.address);
    console.log(`Balance of ${await account.getAddress()}: ${balance.toString()}`);
}
