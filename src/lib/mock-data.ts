import { StockData } from "@/components/StockCard";
import { CryptoData } from "@/components/CryptoCard";
import { ForexData } from "@/components/ForexCard";
import { NewsData } from "@/components/NewsCard";

// Mock Stock Data
export const mockStocks: StockData[] = [
  {
    id: "aapl",
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 176.38,
    change: 2.56,
    changePercent: 1.47,
    volume: 59823400
  },
  {
    id: "msft",
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 415.28,
    change: 3.12,
    changePercent: 0.76,
    volume: 22987600
  },
  {
    id: "amzn",
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 178.75,
    change: -1.25,
    changePercent: -0.69,
    volume: 31452900
  },
  {
    id: "googl",
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 147.68,
    change: 1.93,
    changePercent: 1.32,
    volume: 18742300
  },
  {
    id: "meta",
    symbol: "META",
    name: "Meta Platforms Inc.",
    price: 485.15,
    change: 7.82,
    changePercent: 1.64,
    volume: 15689200
  },
  {
    id: "nflx",
    symbol: "NFLX",
    name: "Netflix Inc.",
    price: 627.40,
    change: -8.35,
    changePercent: -1.31,
    volume: 4567800
  }
];

// Mock Crypto Data
export const mockCryptos: CryptoData[] = [
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    price: 67934.21,
    change: 2567.34,
    changePercent: 3.92,
    marketCap: 1325000000000
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    price: 3476.85,
    change: 87.65,
    changePercent: 2.58,
    marketCap: 417000000000
  },
  {
    id: "bnb",
    symbol: "BNB",
    name: "Binance Coin",
    price: 568.92,
    change: -12.38,
    changePercent: -2.13,
    marketCap: 85600000000
  },
  {
    id: "sol",
    symbol: "SOL",
    name: "Solana",
    price: 146.73,
    change: 8.21,
    changePercent: 5.93,
    marketCap: 64500000000
  },
  {
    id: "xrp",
    symbol: "XRP",
    name: "Ripple",
    price: 0.5237,
    change: -0.0183,
    changePercent: -3.38,
    marketCap: 28400000000
  },
  {
    id: "ada",
    symbol: "ADA",
    name: "Cardano",
    price: 0.4582,
    change: 0.0127,
    changePercent: 2.85,
    marketCap: 16200000000
  }
];

// Mock Forex Data
export const mockForex: ForexData[] = [
  {
    id: "eurusd",
    pair: "EUR/USD",
    baseCurrency: "EUR",
    quoteCurrency: "USD",
    rate: 1.0821,
    change: 0.0023,
    changePercent: 0.21
  },
  {
    id: "gbpusd",
    pair: "GBP/USD",
    baseCurrency: "GBP",
    quoteCurrency: "USD",
    rate: 1.2645,
    change: -0.0031,
    changePercent: -0.24
  },
  {
    id: "usdjpy",
    pair: "USD/JPY",
    baseCurrency: "USD",
    quoteCurrency: "JPY",
    rate: 151.23,
    change: 0.47,
    changePercent: 0.31
  },
  {
    id: "audusd",
    pair: "AUD/USD",
    baseCurrency: "AUD",
    quoteCurrency: "USD",
    rate: 0.6587,
    change: -0.0043,
    changePercent: -0.65
  },
  {
    id: "usdcad",
    pair: "USD/CAD",
    baseCurrency: "USD",
    quoteCurrency: "CAD",
    rate: 1.3621,
    change: 0.0058,
    changePercent: 0.43
  },
  {
    id: "usdchf",
    pair: "USD/CHF",
    baseCurrency: "USD",
    quoteCurrency: "CHF",
    rate: 0.8978,
    change: -0.0039,
    changePercent: -0.43
  }
];

// Mock News Data
export const mockNews: NewsData[] = [
  {
    id: "news1",
    title: "Fed Signals Potential Rate Cuts Later This Year",
    source: "Financial Times",
    date: "2h ago",
    snippet: "Federal Reserve officials indicated they could begin cutting interest rates in the coming months if inflation continues to moderate, according to meeting minutes released Wednesday.",
    url: "#"
  },
  {
    id: "news2",
    title: "Tech Stocks Rally on Strong Earnings Reports",
    source: "Bloomberg",
    date: "4h ago",
    snippet: "Technology shares led a market rally after several major companies reported earnings that exceeded analyst expectations, with AI-related segments showing particularly strong growth.",
    url: "#"
  },
  {
    id: "news3",
    title: "Bitcoin Surges Past $67,000 as Institutional Adoption Grows",
    source: "CoinDesk",
    date: "5h ago",
    snippet: "Bitcoin reached new highs today as several more financial institutions announced plans to offer cryptocurrency services to their clients, further legitimizing digital assets.",
    url: "#"
  },
  {
    id: "news4",
    title: "Oil Prices Drop on Increased Supply Forecasts",
    source: "Reuters",
    date: "7h ago",
    snippet: "Crude oil futures fell after OPEC+ members signaled potential production increases, while U.S. inventory data showed higher-than-expected stockpiles.",
    url: "#"
  },
  {
    id: "news5",
    title: "European Markets Mixed as ECB Maintains Current Policy",
    source: "Wall Street Journal",
    date: "9h ago",
    snippet: "European stock indexes showed mixed performance after the European Central Bank kept interest rates unchanged, though policymakers hinted at possible adjustments later in the year.",
    url: "#"
  },
  {
    id: "news6",
    title: "Japan's Economy Shows Signs of Recovery as Exports Rise",
    source: "Nikkei Asia",
    date: "11h ago",
    snippet: "Japan's economy posted better-than-expected growth in the last quarter, driven by strong export performance and recovering domestic consumption as inflation pressures ease.",
    url: "#"
  }
];

// Function to get detailed data for a specific asset
export function getStockDetails(id: string) {
  return mockStocks.find(stock => stock.id === id);
}

export function getCryptoDetails(id: string) {
  return mockCryptos.find(crypto => crypto.id === id);
}

export function getForexDetails(id: string) {
  return mockForex.find(forex => forex.id === id);
} 