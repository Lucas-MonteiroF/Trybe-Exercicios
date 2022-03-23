const cryptoCurrencie = async () => {
  const link = 'https://api.coincap.io/v2/assets';

  const cryptos = await fetch(link)
    .then((promise) => promise.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  return cryptos;
};

const selectCryptos = async () => {
  const cryptos = await cryptoCurrencie();

  const cryptosList = document.getElementById('cryptoContainer');

  cryptos
    .filter((cryptos) => Number(cryptos.rank) <= 10)
    .forEach((crypto) => {
      const newLi = document.createElement('li');

      newLi.innerText = `${crypto.name} (${crypto.symbol}): ${crypto.priceUsd}`;

      cryptosList.appendChild(newLi);
    });
};

selectCryptos();
