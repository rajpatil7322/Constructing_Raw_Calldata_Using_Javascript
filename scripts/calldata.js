const ethers = require("ethers");

async function createCallData(){
    const functionName="get(uint256)"
    const functionHash=ethers.utils.keccak256(ethers.utils.toUtf8Bytes(functionName));
    const functionSelector=functionHash.slice(0,10);
    console.log("Functionselector:",functionSelector);

    const input="4";
    const encodedInput=input.padStart(64,0);
    console.log("EncodedInput:",encodedInput);

    const CallData=functionSelector+encodedInput;
    console.log("CallData:",CallData);


}

createCallData();

