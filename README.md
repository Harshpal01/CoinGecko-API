# Cryptocurrency Price Checker

## Overview

The Cryptocurrency Price Checker is a web application that allows users to retrieve real-time price information and 24-hour percentage changes for various cryptocurrencies. By entering the name of a cryptocurrency, users can view its current price in USD, observe the price change over the past 24 hours, and access direct links to trade the cryptocurrency on Binance.

## Features

- **Real-Time Price Retrieval:** Fetches and displays the current price of a specified cryptocurrency in USD.
- **24-Hour Price Change Indicator:** Shows the percentage change in price over the last 24 hours, with color-coded indicators (green for positive change, red for negative change).
- **Trading Links:** Provides direct links to buy or sell the specified cryptocurrency on Binance.
- **User-Friendly Interface:** Alerts users if the entered cryptocurrency name is invalid or if there's an error in fetching data.

## API Used
This application utilizes the CoinGecko API to fetch real-time cryptocurrency data. CoinGecko provides a comprehensive and reliable source of cryptocurrency market data without the need for API keys, making it accessible for developers and enthusiasts.
https://www.coingecko.com/en/api

## Usage
1. Enter Cryptocurrency Name:

In the input field, type the name of the cryptocurrency you're interested in (e.g., "bitcoin", "ethereum").

2. Retrieve Price Information:

Click the "Get Price" button to fetch and display the current price and 24-hour price change.

3. Trade on Binance:

Use the "Buy" and "Sell" buttons to navigate directly to Binance's trading page for the specified cryptocurrency.

4. Sign Up on Binance:

If you're new to Binance, click the "Sign Up" button to create a new account.

## Code Overview

The core functionality is implemented in the index.js file. Key components include:

# Event Listener for Price Retrieval:

Listens for the "click" event on the "Get Price" button, fetches data from the CoinGecko API, and updates the DOM with the retrieved information.

# Data Fetching and Error Handling:

Utilizes the fetch API to retrieve data asynchronously and includes error handling for invalid inputs and network issues.

# Dynamic UI Updates:

Updates the UI elements such as price display, price change indicator, and trading buttons based on the fetched data.

## Technologies Used
HTML/CSS: For structuring and styling the web interface.

JavaScript: For handling events, fetching data from the API, and updating the DOM dynamically.

CoinGecko API: For retrieving real-time cryptocurrency price data.

## Author
This project was developed by Dominic Kipkorir.
