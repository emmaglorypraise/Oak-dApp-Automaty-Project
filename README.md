### About this project:Oak Automaty dApp project

An Automation DApp that provides a delightful and transparent user experience for OAK Blockchains
(starting with Neumann and Turing).


## Getting Started

Ensure you have the Polkadot.js extension installed on your browser to connect your wallet to dApp


## Quick Links

- Live Project: [Live project Link](https://oak-d-app-automaty-project.vercel.app/) 
- Project UI design: [Figma Design Link](https://www.figma.com/file/PODz105JF88aLPfabZ6PzQ/OAK-DApp)
- Project Repository: [Project Repository Link](https://github.com/emmaglorypraise/Oak-Next-Project)
- Live Backend API: [Backend Api Link](https://oak-dapp-backend.herokuapp.com/)
- Api Documentation: [API Documentation Link](https://documenter.getpostman.com/view/8629267/UzJESzEg)

## Project Requirement

When provided with a wallet address, the Automation DApp to be able to:

- [x] View the current tasks queued for the given wallet

- [x] Create a future scheduled task to:

- [x] Notify event on the blockchain via automationTime.scheduleNotifyTask(providedId, time, message)

- [x] Perform a wallet transfer via automationTime.scheduleNativeTransferTask(providedId, time, recipientId, amount)

- [] Integrate with an external notification service with the possible use cases:

- [] Listens for events from automationTime.scheduleNotifyTask(providedId, time, message) to send an email notification.

- [] Listens for missed tasks events to send an email notification to inform the end use


## Installation

```bash
$ npm install

# or if you wish to use yarn

$ yarn install

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deployed on Vercel

Check out our [Oak Automation project](https://oak-d-app-automaty-project.vercel.app/) to test.

## Team
- Glory Praise Emmanuel [View](https://github.com/emmaglorypraise/)
- Adeola - [View](https://github.com/kojusola)
- Ifeoma Sandra - [View](https://github.com/iphyokafor)
- Favour Praiseworth - [View](https://github.com/LimiCodes)
