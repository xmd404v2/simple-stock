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
  // Original news items
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
  },
  
  // Additional Stock News
  {
    id: "stock1",
    title: "Apple Unveils New AI Features for iPhone in Major Software Update",
    source: "CNBC",
    date: "3h ago",
    snippet: "Apple announced a suite of AI-powered features coming to iPhone in its next major software update, signaling the company's ambitious push into artificial intelligence as competition heats up.",
    url: "#"
  },
  {
    id: "stock2",
    title: "Amazon Expands Healthcare Ambitions with New Acquisition",
    source: "Reuters",
    date: "5h ago",
    snippet: "Amazon is expanding its healthcare footprint with the acquisition of a telemedicine provider, intensifying competition in the rapidly evolving digital health space.",
    url: "#"
  },
  {
    id: "stock3",
    title: "Tesla Shares Jump as Production Ramps Up in New Factory",
    source: "Bloomberg",
    date: "6h ago",
    snippet: "Tesla shares surged after the electric vehicle maker announced that its newest factory has reached production milestones ahead of schedule, alleviating investor concerns about manufacturing challenges.",
    url: "#"
  },
  {
    id: "stock4",
    title: "Nvidia Reports Record Revenue, Forecasts Continued AI Demand",
    source: "Wall Street Journal",
    date: "8h ago",
    snippet: "Nvidia posted record quarterly revenue, driven by soaring demand for its AI chips, and provided a strong forecast that suggests the AI boom shows no signs of slowing.",
    url: "#"
  },
  {
    id: "stock5",
    title: "Microsoft Invests $5 Billion in AI Infrastructure Expansion",
    source: "Financial Times",
    date: "10h ago",
    snippet: "Microsoft announced a $5 billion investment to expand its AI infrastructure globally, strengthening its position in the competitive artificial intelligence market.",
    url: "#"
  },
  {
    id: "stock6",
    title: "Bank Stocks Fall as Regulators Propose Stricter Capital Requirements",
    source: "The Economist",
    date: "12h ago",
    snippet: "Shares of major U.S. banks declined after regulators proposed stricter capital requirements, which could potentially limit lending capacity and dividend payments.",
    url: "#"
  },
  {
    id: "stock7",
    title: "Disney+ Subscriber Growth Exceeds Expectations",
    source: "Variety",
    date: "14h ago",
    snippet: "Disney shares rallied after the company reported stronger-than-expected subscriber growth for its Disney+ streaming service, signaling success in its direct-to-consumer strategy.",
    url: "#"
  },
  {
    id: "stock8",
    title: "Major Airlines Raise Revenue Forecasts as Travel Demand Soars",
    source: "CNBC",
    date: "16h ago",
    snippet: "Several major airlines raised their revenue forecasts for the upcoming quarter as travel demand continues to exceed pre-pandemic levels, particularly in international and business segments.",
    url: "#"
  },
  {
    id: "stock9",
    title: "Healthcare Stocks Rise on New Medicare Drug Price Negotiations",
    source: "Bloomberg",
    date: "18h ago",
    snippet: "Healthcare stocks showed gains after the government announced more favorable terms for Medicare drug price negotiations than analysts had initially expected.",
    url: "#"
  },
  {
    id: "stock10",
    title: "Energy Sector Tumbles as Oil Prices Hit Three-Month Low",
    source: "Reuters",
    date: "20h ago",
    snippet: "Energy stocks fell sharply as crude oil prices dropped to a three-month low, driven by concerns about weakening global demand and increasing U.S. production.",
    url: "#"
  },
  
  // Additional Crypto News
  {
    id: "crypto1",
    title: "Ethereum Completes Major Network Upgrade, Boosting Transaction Speed",
    source: "CoinDesk",
    date: "4h ago",
    snippet: "Ethereum successfully implemented a highly anticipated network upgrade that significantly improves transaction throughput and reduces fees, addressing key scalability concerns.",
    url: "#"
  },
  {
    id: "crypto2",
    title: "BlackRock's Bitcoin ETF Crosses $10 Billion in Assets",
    source: "Bloomberg",
    date: "6h ago",
    snippet: "BlackRock's Bitcoin ETF has surpassed $10 billion in assets under management, becoming one of the fastest-growing ETF products in history and highlighting institutional crypto adoption.",
    url: "#"
  },
  {
    id: "crypto3",
    title: "Solana Transaction Volume Surpasses Ethereum for First Time",
    source: "The Block",
    date: "7h ago",
    snippet: "Solana's blockchain recorded more transaction volume than Ethereum for the first time, representing a significant milestone for the network that has positioned itself as an Ethereum alternative.",
    url: "#"
  },
  {
    id: "crypto4",
    title: "Central Banks of G7 Nations Coordinate on CBDC Standards",
    source: "Financial Times",
    date: "9h ago",
    snippet: "Central banks from G7 nations announced a coordinated approach to central bank digital currency (CBDC) development, focusing on interoperability and privacy standards.",
    url: "#"
  },
  {
    id: "crypto5",
    title: "Ripple Wins Regulatory Clarity in Key Asian Markets",
    source: "Reuters",
    date: "10h ago",
    snippet: "Ripple secured regulatory approvals in multiple Asian markets, providing the company with greater operational clarity following its partial victory in the U.S. SEC case.",
    url: "#"
  },
  {
    id: "crypto6",
    title: "DeFi Protocol Exploited, $30 Million in Crypto Assets Stolen",
    source: "CoinTelegraph",
    date: "12h ago",
    snippet: "A major decentralized finance protocol experienced a security breach resulting in approximately $30 million worth of cryptocurrency being stolen, highlighting ongoing security challenges in the sector.",
    url: "#"
  },
  {
    id: "crypto7",
    title: "Binance Reduces Withdrawal Limits for Unverified Users",
    source: "Decrypt",
    date: "14h ago",
    snippet: "Cryptocurrency exchange Binance announced reduced withdrawal limits for users who haven't completed enhanced verification procedures, citing regulatory compliance requirements.",
    url: "#"
  },
  {
    id: "crypto8",
    title: "NFT Market Shows Signs of Recovery with Trading Volume Up 30%",
    source: "The Block",
    date: "16h ago",
    snippet: "The non-fungible token (NFT) market recorded a 30% increase in monthly trading volume, suggesting a potential recovery after more than a year of declining activity.",
    url: "#"
  },
  {
    id: "crypto9",
    title: "Cardano Launches Smart Contract Upgrade to Boost Developer Experience",
    source: "CoinDesk",
    date: "18h ago",
    snippet: "Cardano implemented a significant upgrade to its smart contract platform, adding features designed to improve developer experience and expand the ecosystem's capabilities.",
    url: "#"
  },
  {
    id: "crypto10",
    title: "El Salvador Adds More Bitcoin to National Reserves as Price Drops",
    source: "Bitcoin Magazine",
    date: "20h ago",
    snippet: "El Salvador purchased additional Bitcoin for its national reserves, taking advantage of recent price declines and reaffirming its commitment to its Bitcoin strategy.",
    url: "#"
  },
  
  // Additional Forex News
  {
    id: "forex1",
    title: "Dollar Strengthens After Hawkish Fed Comments",
    source: "CNBC",
    date: "3h ago",
    snippet: "The U.S. dollar gained against major currencies after Federal Reserve officials delivered surprisingly hawkish comments about the future path of monetary policy.",
    url: "#"
  },
  {
    id: "forex2",
    title: "Euro Falls as ECB Signals Potential Rate Cut in September",
    source: "Financial Times",
    date: "5h ago",
    snippet: "The euro weakened against major peers after European Central Bank officials signaled a potential interest rate cut in September, acknowledging economic growth concerns.",
    url: "#"
  },
  {
    id: "forex3",
    title: "Japanese Yen Surges on Intervention Speculation",
    source: "Bloomberg",
    date: "7h ago",
    snippet: "The Japanese yen strengthened sharply against the dollar amid speculation that Japanese authorities intervened in the market to support the currency after reaching multi-decade lows.",
    url: "#"
  },
  {
    id: "forex4",
    title: "British Pound Rises After Strong UK Employment Data",
    source: "Reuters",
    date: "9h ago",
    snippet: "Sterling gained against major currencies following stronger-than-expected UK employment data, which reduced expectations for aggressive Bank of England rate cuts this year.",
    url: "#"
  },
  {
    id: "forex5",
    title: "Australian Dollar Drops as China Manufacturing Data Disappoints",
    source: "Bloomberg",
    date: "11h ago",
    snippet: "The Australian dollar fell after Chinese manufacturing data came in below expectations, raising concerns about demand for Australian exports in its largest trading partner.",
    url: "#"
  },
  {
    id: "forex6",
    title: "Canadian Dollar Strengthens as Oil Prices Recover",
    source: "Financial Post",
    date: "13h ago",
    snippet: "The Canadian dollar appreciated against the U.S. dollar as oil prices rebounded from recent lows, providing support to the commodity-linked currency.",
    url: "#"
  },
  {
    id: "forex7",
    title: "Swiss Franc Hits Multi-Year High Against Euro on Safe Haven Demand",
    source: "Wall Street Journal",
    date: "15h ago",
    snippet: "The Swiss franc reached a multi-year high against the euro as investors sought safe-haven assets amid heightened geopolitical tensions and market volatility.",
    url: "#"
  },
  {
    id: "forex8",
    title: "Mexican Peso Tumbles After Central Bank Cuts Interest Rates",
    source: "Reuters",
    date: "17h ago",
    snippet: "The Mexican peso weakened significantly after the country's central bank delivered a surprisingly large interest rate cut, signaling the beginning of a monetary easing cycle.",
    url: "#"
  },
  {
    id: "forex9",
    title: "New Zealand Dollar Rises on Hawkish RBNZ Monetary Policy Statement",
    source: "Bloomberg",
    date: "19h ago",
    snippet: "The New Zealand dollar strengthened after the Reserve Bank of New Zealand maintained a hawkish tone in its monetary policy statement, pushing back against rate cut expectations.",
    url: "#"
  },
  {
    id: "forex10",
    title: "Emerging Market Currencies Under Pressure as Dollar Rally Continues",
    source: "Financial Times",
    date: "21h ago",
    snippet: "Emerging market currencies faced broad selling pressure as the U.S. dollar rally extended, raising concerns about dollar-denominated debt servicing costs for developing economies.",
    url: "#"
  }
];

// Function to get detailed data for a specific asset
export function getStockDetails(id: string) {
  return mockStocks.find(stock => stock.id === id);
}

export async function getCryptoDetails(id: string) {
  const crypto = mockCryptos.find(c => c.id === id);
  if (!crypto) return null;
  return {
    ...crypto,
    marketCap: crypto.volume ? crypto.price * crypto.volume * 10 : undefined,
  };
}

export function getForexDetails(id: string) {
  return mockForex.find(forex => forex.id === id);
} 