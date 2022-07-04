# About this project:


An Automation DApp that provides a delightful and transparent user experience for OAK Blockchains
(starting with Neumann and Turing).


When provided with a wallet address, the Automation DApp should be able to:


- [ ] View the current tasks queued for the given wallet


- [ ] Create a future scheduled task to:


      ○ Notify event on the blockchain via
      automationTime.scheduleNotifyTask(providedId, time,
      message)


      ○ Perform a wallet transfer via
      automationTime.scheduleNativeTransferTask(providedId,
      time, recipientId, amount)

- [ ] Integrate with an external notification service with the possible use cases:


      ○ Listens for events from automationTime.scheduleNotifyTask(providedId, time,
      message) to send an email notification.


      ○ Listens for missed tasks events to send an email notification to inform the end
      use


## Quick Links

 [Live project](https://oak-next-project.vercel.app/) 

 [Design](https://www.figma.com/file/PODz105JF88aLPfabZ6PzQ/OAK-DApp)

 [Frontend Code](https://github.com/emmaglorypraise/Oak-Next-Project)

 [Backend code](https://github.com/iphyokafor/oak-dapp-backend)
 
 [Backend Api Documentation](https://documenter.getpostman.com/view/8629267/UzJESzEg)
 

## Getting Started

## Installation

```bash
$ npm install
```

or if you wish to use yarn

```bash
$ yarn install
```

## Running the app

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deployed on Vercel

Check out our [Oak Automation project](https://oak-next-project.vercel.app/) for more details.
