"use strict";

// Функция для получения данных о курсе валют
const fetchExchangeRates = () => {
    const YOUR_APP_ID = ''; /
    const url = `https://openexchangerates.org/api/latest.json?app_id=${YOUR_APP_ID}`;
  
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при получении данных о курсе валют');
                }
                return response.json();
            })
            .then(data => {
                addEventListeners(data.rates.USD, data.rates.EUR);
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    };
    
    fetchExchangeRates();

// Добавление обработчиков событий
const addEventListeners = (usdRate, eurRate) => {
    const currencySelect = document.getElementById('currencySelect');
    const amountInput = document.getElementById('amountInput');

    const handleInput = () => {
        const selectedCurrency = currencySelect.value;
        const amount = parseFloat(amountInput.value);
        
        if (isNaN(amount)) {
            document.getElementById('result').textContent = 'Введите корректное число';
            return;
        }

        if (selectedCurrency === 'USD') {
            convertToRub(amount, usdRate);
        } else if (selectedCurrency === 'EUR') {
            convertToRub(amount, eurRate)
        }
    };

    currencySelect.addEventListener('change', handleInput);
    amountInput.addEventListener('input', handleInput);
};

// Функция для конвертации валюты в рубли
const convertToRub = (amount, rate) => {
    const resultContainer = document.getElementById('result');
    const result = amount * rate;
    resultContainer.textContent = `${amount.toFixed(2)} ${rate === usdRate ? 'USD' : 'EUR'} = ${result.toFixed(2)} RUB`;
};

// Вызов функции для получения данных о курсе валют при загрузке страницы
fetchExchangeRates();
