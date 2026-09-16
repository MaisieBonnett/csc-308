const StockPortfolio = require("./stockPortfolio");

test("starts empty", () => {
  const portfolio = new StockPortfolio();
  expect(portfolio.stocks).toEqual({});
});

test("determine if it is empty", () => {
  const portfolio = new StockPortfolio();
  expect(portfolio.isEmpty()).toBe(true);
});

test("adds shares to a stock", () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase("AAPL", 5);
  portfolio.purchase("AAPL", 3);
  expect(portfolio.getShares("AAPL")).toBe(8);
});

test("sale subtracts shares from a stock", () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase("AAPL", 10);
  portfolio.sell("AAPL", 4);
  expect(portfolio.getShares("AAPL")).toBe(6);
});

test("counts unique ticker symbols", () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase("GMR", 5);
  portfolio.purchase("RBLX", 10);
  expect(portfolio.getStockCount()).toBe(2);
});

test("removes stocks with zero shares", () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase("AAPL", 5);
  portfolio.sell("AAPL", 5);
  expect(portfolio.stocks["AAPL"]).toBeUndefined();
});

test("returns shares for a stock", () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase("AAPL", 7);
  expect(portfolio.getShares("AAPL")).toBe(7);
});

test("returns zero for a stock not owned", () => {
  const portfolio = new StockPortfolio();
  expect(portfolio.getShares("AAPL")).toBe(0);
});

test("cannot sell more shares than owned", () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase("AAPL", 5);
  expect(() => {
    portfolio.sell("AAPL", 6);
  }).toThrow("cannot sell this many shares");
});

/* I tested first and then created each function. This allowed me to see how each part of the program worked
rather than testing all of it in the end.*/
