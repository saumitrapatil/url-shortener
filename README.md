# url-shortener

This service allows users to shorten URLs, redirect to the original URL, and track usage statistics. Built with Node.Js, Express.Js and MongoDB.

## Deployed Endpoints:
- [`https://url-shortener-production-3c84.up.railway.app/shorten`](https://url-shortener-production-3c84.up.railway.app/shorten)
- `https://url-shortener-production-3c84.up.railway.app/<shortId>`
- `https://url-shortener-production-3c84.up.railway.app/stats/<shortId>`

## Local setup:
- Clone this repository using the below command:
    ```bash
    git clone https://github.com/saumitrapatil/url-shortener
    ```
- Configure your environment variables by creating a `.env` file with the following contents:
    ```
    MONGO_URI=your-db-endpoint-here
    PORT=your-port-here
    ```
- ```bash
    npm install
    ```
    to install the dependencies
- ```bash
    npm start
    ```
    to start the server.
- I used *Postman* to test the api but you can you any software of your choice.

## Environment Variables
|Variable Name|	Description |
|-------------|-------------|
|MONGO_URI    |MongoDB connection string |
|PORT         |Port on which the server will run | 