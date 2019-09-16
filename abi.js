var ABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "bookid",
				"type": "uint256"
			}
		],
		"name": "get_owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_owner_lists",
		"outputs": [
			{
				"name": "",
				"type": "address[2500]"
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
				"name": "bookid",
				"type": "uint256"
			},
			{
				"name": "secret_code",
				"type": "uint16"
			}
		],
		"name": "owner_register",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "bookid",
				"type": "uint256"
			},
			{
				"name": "secret_code",
				"type": "uint16"
			}
		],
		"name": "setcodes",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
] 
