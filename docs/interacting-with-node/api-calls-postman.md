---
id: 1-api-calls-postman
title: API calls via Postman
category: 3 Interacting with the Centrifuge Node
---

Once the Centrifuge node is up and running you are able to start submitting invoices and tokenize these documents  via simple API calls. For this, you can either use Postman (see [Recommended tools](https://developer.centrifuge.io/docs/getting-started/tools) or use your standard command-line interface. If you use Postman, make sure you have imported the most recent [Centrifuge Postman Collection](https://www.getpostman.com/collections/0d9126c8586a03af7cc7).

## Before you start 
Confirm that your Node is up und running, for example with a PING (See section [Installation Verification](https://developer.centrifuge.io/docs/getting-started/ping)). If it is not running, run the Centrifuge Node using the `config.yaml` file you created:

  ```bash
  $ centrifuge run -c /<PATH-TO-CONFIG-DIR>/config.yaml
  ```

where `PATH-TO-CONFIG-DIR` is your location of the `config.yaml`.

Open the Postman Desktop App and select the calls you want to make. You find more information on these calls here: [Node API](https://centrifuge-os-node-api-1.api-docs.io/0.0.3-alpha4/). 

Please find examples for sending invoices and minting business NFTs below: 

## Create an invoice

To create an invoice use the POST call under the menu item _invoice_. Always make sure to add your Centrifuge ID under **Header** > **authorization**. Then go to **Body** and fill in the document template accordingly. 

*Header:*
![](https://i.imgur.com/8BjlQDY.png | width=50)


*Body:*
![](https://i.imgur.com/1ef4Hg0.png | width=50)


## Update an invoice

Use the PUT command to update an invoice. Creating an invoice automatically generates a document ID for the said invoice. The recipient is able to look up the specific invoice by calling GET. The recipient will need the document ID and add it to the call.

![](https://i.imgur.com/FBB7BD8.png | width=100)


## Mint business NFTs
To mint a business NFT use the POST command under the menu item _token_. First add your Centrifuge ID under **Header** > **authorization**. Then select **Body** and fill in the document template. Keep in mind that you want to use a deposit address where you are able to move the NFT later on.

![](https://i.imgur.com/7Y2oNZc.png | width=100)

## Verify Job Done
After each job you receive an output that contains a job ID. You can use this job ID to check whether the job was successfull. Go to the menu item _jobs_ in your Postman Centrifuge collection and call GET. Do not forget to add your Centrifuge ID as authorization value and state the job ID in the GET call. 

![](https://i.imgur.com/fzTf5hB.png | width=100)





