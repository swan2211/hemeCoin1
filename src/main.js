'use strict';
const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Your private key goes here
const myKey = ec.keyFromPrivate(
  'ef5f6deb01474b923f610d88fdcba672a3af459f1c3fa1dcea32b3b9e04789f4'
);

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new instance of Blockchain class
const hemeCoin = new Blockchain();

// Mine first block
hemeCoin.minePendingTransactions(myWalletAddress);

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.sign(myKey);
hemeCoin.addTransaction(tx1);

// Mine block
hemeCoin.minePendingTransactions(myWalletAddress);

// Create second transaction
const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.sign(myKey);
hemeCoin.addTransaction(tx2);

// Mine block
hemeCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(
  `Balance of JOHN is ${hemeCoin.getBalanceOfAddress(myWalletAddress)}`
);

// Uncomment this line if you want to test tampering with the chain
// hemeCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
console.log();
console.log('Blockchain valid?', hemeCoin.isChainValid() ? 'Yes' : 'No');
