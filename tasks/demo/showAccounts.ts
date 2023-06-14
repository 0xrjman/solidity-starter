import { task } from "hardhat/config";
import showAccounts from "../../scripts/demo/showAccounts"

task("show:accounts", "Show Accounts").setAction(async (_, DRE) => {
  await showAccounts(DRE);
});
