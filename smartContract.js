import {abiData,addressofSmartContract} from './constant.js';
import Web3 from 'web3';

async function readSmartContractMethods(){
const web3 = new Web3("ws://localhost:7545");
//getting lastest block height of blockchain.
const lastestBlockNo= await web3.eth.getBlockNumber() // its blockchain method.
console.log("lastest height is ",lastestBlockNo)

const instance = new web3.eth.Contract(abiData, addressofSmartContract)
const data=await instance.methods.depositeMoney().call() // its our smart contract read method..
console.log("our smart contract read method--",data)
}

readSmartContractMethods()