import Web3 from 'web3';
const web3 = new Web3("ws://localhost:7545");
// web3 function for lastest block height.
async function lastestBlock(){
const lastestBlockNo= await web3.eth.getBlockNumber()
console.log("lastest height is ",lastestBlockNo)
return lastestBlockNo
}
// web3 function for gasprice.

async function getGasPrice(){
  const gasPrice= await web3.eth.getGasPrice()
console.log("gasPrice is - ",gasPrice)
return gasPrice
}
getGasPrice()