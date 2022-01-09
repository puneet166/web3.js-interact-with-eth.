export const addressofSmartContract = "0x15973367E20696F86eA0D613E0B4d66c0Cc7f7D7"
// only [abikey]'s value putted in abiData.
export const abiData=
[
  {
    "constant": false,
    "inputs": [
      {
        "name": "addharCardNo",
        "type": "string"
      },
      {
        "name": "panCardNo",
        "type": "string"
      }
    ],
    "name": "createAccount",
    "outputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "accountNo",
        "type": "uint256"
      }
    ],
    "name": "verfiedAccount",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "depositeMoney",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "money",
        "type": "uint256"
      }
    ],
    "name": "withdrwalMoney",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]