// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const ethers=require("ethers");
const contractData=require("../artifacts/contracts/Lock.sol/Lock.json");

async function main() {
  const provider=new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');

  const signer=provider.getSigner();
  console.log(await signer.getAddress());

  const factory= new ethers.ContractFactory(contractData.abi,contractData.bytecode,signer);

  const contract=await factory.deploy();
  console.log("Contract deployed At",contract.address);

  const transaction={
    to:contract.address,
    value:ethers.utils.parseEther("0"),
    data:"0x9507d39a0000000000000000000000000000000000000000000000000000000000000004"
  }

  const tx=signer.sendTransaction(transaction);
  
  console.log("Transaction included!!!!!!");

  contract.on("Log", (value) => {
    console.log("The value emitted by the event Lod is:",Number(value));
});

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
