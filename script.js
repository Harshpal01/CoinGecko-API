document.addEventListener("DOMContentLoaded", function () {
    const cryptoInput = document.getElementById("cryptoInput");
    const getPriceButton = document.getElementById("getPrice");
    const priceElement = document.getElementById("price");
    const changeButton = document.getElementById("priceChange");
    const buyButton = document.getElementById("buyButton");
    const sellButton = document.getElementById("sellButton");
    const signupButton = document.getElementById("signupButton");

    // Event listener for the "Get Price" button click
    getPriceButton.addEventListener("click", async function () {
        const crypto = cryptoInput.value.trim().toLowerCase();

        // Check if input is empty
        if (!crypto) {
            alert("Please enter a cryptocurrency name.");
            return;
        }

        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd&include_24hr_change=true`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to fetch data. Try again later.");
            }

            const data = await response.json();

            if (data[crypto] && data[crypto].usd !== undefined) {
                const price = data[crypto].usd;
                const change = data[crypto].usd_24h_change?.toFixed(2) || "0.00"; // Handle missing change data

                // Display price
                priceElement.innerText = `Price of ${crypto.toUpperCase()}: $${price}`;

                // Style & display price change button
                changeButton.textContent = `${change}%`;
                changeButton.style.display = "inline-block";
                changeButton.style.color = "white";
                changeButton.style.padding = "5px 10px";
                changeButton.style.borderRadius = "5px";

                if (parseFloat(change) >= 0) {
                    changeButton.style.backgroundColor = "green";
                    changeButton.textContent = `+${change}%`; // Add "+" for positive change
                } else {
                    changeButton.style.backgroundColor = "red";
                }

                // Display Buy & Sell buttons
                buyButton.style.display = "inline-block";
                sellButton.style.display = "inline-block";

                // Set Buy button action
                buyButton.onclick = function () {
                    window.open(`https://www.binance.com/en/trade/${crypto.toUpperCase()}_USDT`, "_blank");
                };

                // Set Sell button action
                sellButton.onclick = function () {
                    window.open(`https://www.binance.com/en/trade/${crypto.toUpperCase()}_USDT?type=sell`, "_blank");
                };

            } else {
                // Handle invalid crypto names
                priceElement.innerText = "Invalid cryptocurrency name. Try again.";
                changeButton.style.display = "none";
                buyButton.style.display = "none";
                sellButton.style.display = "none";
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            priceElement.innerText = "Error fetching price. Please check your input.";
            changeButton.style.display = "none";
            buyButton.style.display = "none";
            sellButton.style.display = "none";
        }
    });

    // Event listener for the "Sign Up" button click
    signupButton.addEventListener("click", function () {
        window.open("https://www.binance.com/en/register", "_blank");
    });

    // Event listener to clear input field on focus
    cryptoInput.addEventListener("focus", function () {
        this.value = "";
    });

    // Event listener to handle 'Enter' key press in input field
    cryptoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            getPriceButton.click();
        }
    });

    // Event listener to reset display on input field blur
    cryptoInput.addEventListener("blur", function () {
        priceElement.innerText = "";
        changeButton.style.display = "none";
        buyButton.style.display = "none";
        sellButton.style.display = "none";
    });
});
