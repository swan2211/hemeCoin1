<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://drive.google.com/file/d/1CWjE8FHdq3WUi7qC92QtkSLelwFQE6la/view?usp=share_link" alt="Project logo"></a>
</p>

<h3 align="center">HemeCoin</h3>

<div align="center">

  [![.github/workflows/ci.yml](https://github.com/swan2211/hemeCoin/actions/workflows/ci.yml/badge.svg)](https://github.com/swan2211/hemeCoin/actions/workflows/ci.yml)
  [![Coverage Status](https://coveralls.io/repos/github/swan2211/hemeCoin/badge.svg?branch=master)](https://coveralls.io/github/wan2211/hemeCoin?branch=master)
  [![GitHub Issues](https://img.shields.io/github/issues/swan2211/hemeCoin.svg)](https://github.com/swan2211/hemeCoin/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/swan2211/hemeCoin.svg)](https://github.com/swan2211/hemeCoin/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

*⚠️ For education purposes only. This is by no means a complete implementation and it is by no means secure!*

## Features

* Simple proof-of-work algorithm
* Verify blockchain (to prevent tampering)
* Generate wallet (private/public key)
* Sign transactions

## 🏁 Getting Started <a name = "getting_started"></a>

### Install library
```
npm install --save hemeCoin
```

### Generate a keypair
To make transactions on this blockchain you need a keypair. The public key becomes your wallet address and the private key is used to sign transactions.

```js
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.genKeyPair();
```

The `myKey` object now contains your public & private key:

```js
console.log('Public key:', myKey.getPublic('hex'));
console.log('Private key:', myKey.getPrivate('hex'));
```

### Create a blockchain instance
Now you can create a new instance of a Blockchain:

```js
const {Blockchain, Transaction} = require('hemeCoin');

const myChain = new Blockchain();
```

### Adding transactions
```js
// Transfer 100 coins from my wallet to "toAddress"
const tx = new Transaction(myKey.getPublic('hex'), 'toAddress', 100);
tx.sign(myKey);

myChain.addTransaction(tx);
```

To finalize this transaction, we have to mine a new block. We give this method our wallet address because we will receive a mining reward:

```js
myChain.minePendingTransactions(myKey.getPublic('hex'));
```


---

## 📽 Video tutorial
This source code comes from [my video series on YouTube](https://www.youtube.com/watch?v=zVqczFZr124&list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4). You can check them here:

| Video 1: Simple implementation | Video 2: Adding Proof-of-work |
:-------------------------:|:-------------------------:
[![](https://img.youtube.com/vi/zVqczFZr124/maxresdefault.jpg)](https://www.youtube.com/watch?v=zVqczFZr124) | [![](https://img.youtube.com/vi/HneatE69814/maxresdefault.jpg)](https://www.youtube.com/watch?v=HneatE69814)
| Video 3: Mining rewards & transactions | Video 4: Signing transactions |
[![](https://img.youtube.com/vi/fRV6cGXVQ4I/maxresdefault.jpg)](https://www.youtube.com/watch?v=fRV6cGXVQ4I) | [![](https://img.youtube.com/vi/kWQ84S13-hw/maxresdefault.jpg)](https://www.youtube.com/watch?v=kWQ84S13-hw)
| Video 5: Building a front-end in Angular
[![](https://img.youtube.com/vi/AQV0WNpE_3g/maxresdefault.jpg)](https://www.youtube.com/watch?v=AQV0WNpE_3g) |
