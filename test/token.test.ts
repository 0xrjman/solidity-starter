import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token", function () {
  const greeting = "I'm Token"
  it("Should return name Token", async function () {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy(greeting);
    await token.deployed();

    expect(await token.name()).to.equal("Token");
  });
  it("Should return I'm Token", async function () {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy(greeting);
    await token.deployed();

    expect(await token.greet()).to.equal(greeting);
  });

  it("SetGreeting should change greeting", async function () {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy(greeting);
    await token.deployed();

    await token.setGreeting("Hello World");

    expect(await token.greet()).to.equal("Hello World");
  })
});
