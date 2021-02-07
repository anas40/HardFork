# HardFork

We are working on a blockchain based decentralized web application to fight product counterfeiting. This app help the consumers to don't rely on the the word of the mouth of the seller but the product itself.

# Technology Stack

1. Solidity
2. React
3. Web3.js
4. Truffle
5. Portis
6. Matic
7. Infura

# Flowchart

```mermaid
graph LR
A[Owner] -- Can Sell To --> B((Sellers))
B -- Can Sell To --> D{Consumers}
A -- Can Sell Directly To --> D{Consumers}
B -- Can Sell To --> E{Other Sellers}
```

# Screenshots

# Home Page:

1.  Allow Owner, Seller and Consumer to register and login through portis.
2.  Allow Users to Verify the product whether it is genuine or fake.

![name-of-you-image](https://github.com/gauharayub/HardFork/blob/main/Demo%20Screenshots/WhatsApp%20Image%202021-02-07%20at%2010.14.48%20AM.jpeg)

# Owner Functionalities:

1.  Add Product.
2.  Sell Product to seller.
3.  Sell Product direct to consumer.

# Seller Functionalities:

1.  Sell Product to consumer.
2.  Sell Product to another seller.

# Consumer

1.  Verify the product whether it is genuine or fake by scanning the QR-Code or Product ID.
2.  Buy Product.
