const { Transaction, Blockchain } = require('../src/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const signingKey = ec.keyFromPrivate('ef5f6deb01474b923f610d88fdcba672a3af459f1c3fa1dcea32b3b9e04789f4');

function createSignedTx(amount = 10) {
  const txObject = new Transaction(signingKey.getPublic('hex'), 'wallet2', amount);
  txObject.timestamp = 1;
  txObject.sign(signingKey);

  return txObject;
}

function createBCWithMined() {
  const blockchain = new Blockchain();
  blockchain.minePendingTransactions(signingKey.getPublic('hex'));

  return blockchain;
}

function createBlockchainWithTx() {
  const blockchain = new Blockchain();
  blockchain.minePendingTransactions(signingKey.getPublic('hex'));

  const validTx = new Transaction(signingKey.getPublic('hex'), 'b2', 10);
  validTx.sign(signingKey);

  blockchain.addTransaction(validTx);
  blockchain.addTransaction(validTx);
  blockchain.minePendingTransactions(1);

  return blockchain;
}

module.exports.signingKey = signingKey;
module.exports.createSignedTx = createSignedTx;
module.exports.createBlockchainWithTx = createBlockchainWithTx;
module.exports.createBCWithMined = createBCWithMined;
