import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";

export default async function showAccounts(
  hre: HardhatRuntimeEnvironment
): Promise<void> {
  const [account] = await hre.ethers.getSigners();

  console.log(`Account address: ${await account.getAddress()}`)
}