const endpoint = 'http://127.0.0.1:8545/'; //e.g., http://127.0.0.1:8545
const from = parseInt('0'); //input a valid block number here
const to = parseInt('6'); //input a valid block number here

const hre = require("hardhat");
const ethers=require("ethers");


async function main(){
    const requests = [];
    for (let i = from; i < to; i++) {
      requests.push({
        method: 'eth_getBlockByNumber',
        params: [`0x${i.toString(16)}`, false],
        // Set unique ID for each request based on its position in the array
        id: i - from,
        jsonrpc: '2.0'
      });
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(requests),
        headers: { 'Content-Type': 'application/json' }
      });
    
      // Parse the response as JSON
      const data = await response.json();
    
      console.log(data)
}

main().catch(err => console.log(err));