// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/Token.sol";

contract TokenTest is Test {
    Token t;

    function setUp() public {
        t = new Token("I'm Token");
    }

    function testName() public {
        assertEq(t.name(), "Token");
    }

    function testGreet() public {
        assertEq(t.greet(), "I'm Token");
    }

    function testSetGreet() public {
        t.setGreeting("I'm Token2");
        assertEq(t.greet(), "I'm Token2");
    }
}
