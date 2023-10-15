// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    event Log(uint256);
    function get(uint a) external {
        emit Log(a*2);
    }
}
