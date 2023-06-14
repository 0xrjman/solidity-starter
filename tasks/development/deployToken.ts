import { task } from "hardhat/config";
import deployToken from "../../scripts/development/deployToken"

task("deploy:token", "Deploy Token").setAction(async (_, DRE) => {
    await deployToken(DRE);
});
