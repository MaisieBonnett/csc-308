class StockPortfolio {

constructor() {
    this.stocks = {};
  }

isEmpty() {
	return Object.keys(this.stocks).length === 0;
}

purchase(symbol, shares) {
	if (this.stocks[symbol]) {
		this.stocks[symbol] += shares;
	} else {
		this.stocks[symbol] = shares;
	}
}

sell(symbol, shares) {
	if (shares > this.getShares(symbol)) {
		throw new Error("cannot sell this many shares");
	}
	this.stocks[symbol] -= shares;
	if (this.stocks[symbol] === 0) {
		delete this.stocks[symbol];
	}
}

getStockCount() {
	return Object.keys(this.stocks).length;
}

getShares(symbol) {
	return this.stocks[symbol] || 0;
}
}

module.exports = StockPortfolio;
