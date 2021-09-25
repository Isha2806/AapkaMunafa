const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitHandler = () => {
    var iPrice = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var cPrice = Number(currentPrice.value);

    calculateProfitAndLoss(iPrice, qty, cPrice);
}

submitButton.addEventListener("click", submitHandler);

calculateProfitAndLoss = (initial, quantity, current) => {

    if (initial <= 0 || quantity <= 0 || current <= 0) {
        return outputBox.innerText = "Ama...  enter  Positive Numbers Da ..!! ";
    }

    else if (initial < current) {
        //profit logic
        var profit = ((current-initial)*quantity).toFixed(2);
        var profitPercentage = (profit / initial) * 100;
        showOutput(`The profit is ₹ ${profit} and profit percentage is ${profitPercentage.toFixed(2)}% 💰🤩 !!   Bitcoin lenge kya?`);
        outputBox.style.backgroundColor = 'green';

    } else if (initial > current) {
        //loss logic
        var loss = ((initial-current)*quantity).toFixed(2);
        var lossPercentage = (loss / initial) * 100;
        showOutput(`The loss is  ₹ ${loss} and the loss percentage is ${lossPercentage.toFixed(2)}% 
        😌 Alexa Play ..Sapna tuta hai !`);
        
        outputBox.style.backgroundColor = 'red';
        

    } else {
        showOutput(" No profit or no loss yet! ");
        outputBox.style.backgroundColor = 'yellow';

}
}
showOutput = (message) => {
    outputBox.innerHTML = message;
}
