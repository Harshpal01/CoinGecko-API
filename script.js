document.getElementById("getPrice").addEventListener("click", async function () {
    let crypto = document.getElementById("cryptoInput").value.trim().toLowerCase();
    let priceElement = document.getElementById("price");
    let changeButton = document.getElementById("priceChange");
    let buyButton = document.getElementById("buyButton");
    let sellButton = document.getElementById("sellButton");

    // Check if input is empty
    if (!crypto) {
        alert("Please enter a cryptocurrency name.");
        return;
    }

    let url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd&include_24hr_change=true`;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch data. Try again later.");
        }

        let data = await response.json();

        if (data[crypto] && data[crypto].usd !== undefined) {
            let price = data[crypto].usd;
            let change = data[crypto].usd_24h_change?.toFixed(2) || "0.00"; // Handle missing change data

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

// Sign Up Button
document.getElementById("signupButton").addEventListener("click", function () {
    window.open("https://www.binance.com/en/register", "_blank");
});
