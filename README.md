# SimpleStock

A one-page market aggregator showing stocks, crypto, and forex data with a beautiful, modern UI built using Next.js, Shadcn UI, and TypeScript.

## Features

- **Market News Feed**: Aggregated financial news from various sources.
- **Stocks Section**: Displays popular stocks with key metrics.
- **Crypto Section**: Shows leading cryptocurrencies with market data.
- **Forex Section**: Presents major currency pairs with exchange rates.
- **Detailed Asset Pages**: In-depth information on each asset with TradingView charts and trading signals.
- **Responsive Design**: Optimized for all device sizes.
- **Horizontal Scrolling**: Smooth scrolling section rows for easy browsing.

## Technology Stack

- **Frontend Framework**: Next.js 14
- **Type Safety**: TypeScript
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **Icon Library**: Lucide Icons

## Project Structure

```
simplestock/
├── public/              # Static assets
├── src/                 # Source code
│   ├── app/             # Next.js app directory 
│   │   ├── asset/       # Dynamic asset detail pages
│   │   │   ├── stock/[id]  
│   │   │   ├── crypto/[id]
│   │   │   └── forex/[id]
│   │   ├── layout.tsx   # Main layout
│   │   └── page.tsx     # Homepage
│   ├── components/      # React components
│   │   ├── ui/          # Shadcn UI components 
│   │   ├── MarketSection.tsx  # Section component
│   │   ├── StockCard.tsx      # Stock card
│   │   ├── CryptoCard.tsx     # Crypto card
│   │   ├── ForexCard.tsx      # Forex card
│   │   ├── NewsCard.tsx       # News card
│   │   ├── Header.tsx         # Navigation header
│   │   ├── AssetDetailHeader.tsx  # Detail page header
│   │   └── TradingViewChart.tsx   # Chart component
│   └── lib/             # Utility functions and data
│       └── mock-data.ts # Mock financial data
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simplestock.git
cd simplestock
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Future Enhancements

- **Real-time Data Integration**: Connect to financial data APIs for live market data.
- **Authentication**: Add user accounts for personalized experiences.
- **Favorites**: Allow users to save favorite assets.
- **Alerts**: Enable price alerts and notifications.
- **Portfolio Tracking**: Add portfolio management functionality.
- **Advanced Charts**: Implement full TradingView integration.
- **Dark/Light Mode**: Add theme switching capability.
- **Mobile App**: Create a native mobile experience.

## API Integration Guidelines

The application is designed to easily integrate with real-time market data APIs. To implement this:

1. Create API service files in the `src/lib` directory.
2. Replace the mock data functions with API calls.
3. Implement error handling and loading states.
4. Add caching mechanisms for improved performance.

Recommended APIs:
- **Stocks**: Alpha Vantage, Finnhub, IEX Cloud
- **Crypto**: CoinGecko, CoinMarketCap, Binance API
- **Forex**: Alpha Vantage, Exchange Rates API, OANDA
- **News**: NewsAPI, Financial Times, Bloomberg

## License

MIT
