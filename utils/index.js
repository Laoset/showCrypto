export async function fetchCryptos() {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h&x_cg_demo_api_key=CG-wWHPQdZ9arb6GXCA3rNTD27w'
  );
  const results = await response.json();
  return results;
}
