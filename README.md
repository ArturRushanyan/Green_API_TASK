# Microservices

This repository contains two Node.js microservices, M1 and M2, that communicate with each other using RabbitMQ. Follow the instructions below to set up and run the microservices locally.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [RabbitMQ](https://www.rabbitmq.com/) installed and running on your local machine

## Setup

1. Clone the repository and checkout to the develop branch:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    git checkout develop
    ```

2. Open a terminal and move to the M1 directory:

    ```bash
    cd M1
    ```

3. Create a `.env` file in the M1 directory and copy the content from `.env.example`:

    ```bash
    cp .env.example .env
    ```

4. Install the dependencies for M1:

    ```bash
    npm install
    ```

5. Run the M1 service:

    ```bash
    npm run start
    ```

    This will start the M1 service on port 3000.

6. Open a new terminal and move to the M2 directory:

    ```bash
    cd ../M2
    ```

7. Create a `.env` file in the M2 directory and copy the content from `.env.example`:

    ```bash
    cp .env.example .env
    ```

8. Install the dependencies for M2:

    ```bash
    npm install
    ```

9. Run the M2 service:

    ```bash
    node app.js
    ```

    This will start the M2 service.

10. Open Postman and import the attached Postman collection.

11.  Use imported collection to send request to the API.

### Note:

- Make sure RabbitMQ is installed and running on your machine before starting the microservices.
- Update the RabbitMQ connection string in the `.env` files if your RabbitMQ instance is not running on the default configuration.