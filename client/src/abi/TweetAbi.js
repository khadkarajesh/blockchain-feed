export const TweetAbi =[
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "count",
         "type": "uint256"
       }
     ],
     "name": "TweeterTotalCount",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "id",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "string",
         "name": "txt",
         "type": "string"
       }
     ],
     "name": "TwitterCreated",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "id",
         "type": "uint256"
       }
     ],
     "name": "TwitterDeleted",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "id",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "string",
         "name": "txt",
         "type": "string"
       }
     ],
     "name": "TwitterUpdated",
     "type": "event"
   },
   {
     "constant": true,
     "inputs": [],
     "name": "count",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [],
     "name": "name",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "name": "tweets",
     "outputs": [
       {
         "internalType": "string",
         "name": "txt",
         "type": "string"
       },
       {
         "internalType": "uint256",
         "name": "id",
         "type": "uint256"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [],
     "name": "getCountOfTweets",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "string",
         "name": "txt",
         "type": "string"
       }
     ],
     "name": "insertTweet",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "uint256",
         "name": "_id",
         "type": "uint256"
       },
       {
         "internalType": "string",
         "name": "txt",
         "type": "string"
       }
     ],
     "name": "updateTweet",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "uint256",
         "name": "_id",
         "type": "uint256"
       }
     ],
     "name": "deleteTweet",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   }
 ]