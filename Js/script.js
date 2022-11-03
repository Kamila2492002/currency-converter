{
    const calculateResult = (pln, inputCurrency, outputCurrency) => {
        const PLN_EUR = 0.21;
        const PLN_CHF = 0.20;
        const CHF_EUR = 1.03;

        switch (inputCurrency) {
            case "PLN":
                if (outputCurrency === "PLN")
                    result = (pln * 1);
                else if (outputCurrency === "EUR")
                    result = (pln * PLN_EUR)
                else if (outputCurrency === "CHF")
                    result = (pln * PLN_CHF);
                break;
            case "CHF":
                if (outputCurrency === "CHF")
                    result = (pln * 1);
                else if (outputCurrency === "EUR")
                    result = (pln * CHF_EUR);
                else if (outputCurrency === "PLN")
                    result = (pln / PLN_CHF);
                break;
            case "EUR":
                if (outputCurrency === "EUR")
                    result = (pln * 1);
                else if (outputCurrency === "PLN")
                    result = (pln / PLN_EUR);
                else if (outputCurrency === "CHF")
                    result = (pln / CHF_EUR);
                break;
        }
    };

    const updateResultText = (result, outputCurrency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${outputCurrency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-pln");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");
        const inputCurrency = inputCurrencyElement.value;
        const outputCurrency = outputCurrencyElement.value;
        const pln = plnElement.value;

        calculateResult(pln, inputCurrency, outputCurrency);

        updateResultText(result, outputCurrency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}