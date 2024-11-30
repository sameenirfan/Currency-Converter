document.getElementById('convertBtn').addEventListener('click', async () => {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultField = document.getElementById('result');
  
    if (!amount || amount <= 0) {
      resultField.innerText = 'Please enter a valid amount.';
      return;
    }
  
    try {
      // Fetch conversion rates
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      if (!response.ok) throw new Error('Failed to fetch exchange rates.');
  
      const data = await response.json();
      const rate = data.rates[toCurrency];
      if (!rate) throw new Error('Currency not supported.');
  
      const convertedAmount = (amount * rate).toFixed(2);
      resultField.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
      resultField.innerText = `Error: ${error.message}`;
    }
  });
  
