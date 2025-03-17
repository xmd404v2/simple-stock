"use client";

import { useState } from 'react';
import { StockCard } from "@/components/StockCard";
import { NewsCard } from "@/components/NewsCard";
import { mockStocks, mockNews } from "@/lib/mock-data";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Filter stocks for different categories
const techStocks = [
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
    id: "nvda",
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 925.17,
    change: 28.75,
    changePercent: 3.21,
    volume: 42856700
  },
  {
    id: "amd",
    symbol: "AMD",
    name: "Advanced Micro Devices, Inc.",
    price: 172.48,
    change: 4.65,
    changePercent: 2.77,
    volume: 28974500
  },
  {
    id: "intc",
    symbol: "INTC",
    name: "Intel Corporation",
    price: 42.76,
    change: -1.25,
    changePercent: -2.84,
    volume: 32456700
  },
  {
    id: "crm",
    symbol: "CRM",
    name: "Salesforce Inc.",
    price: 301.82,
    change: 5.43,
    changePercent: 1.83,
    volume: 7891200
  },
  {
    id: "adbe",
    symbol: "ADBE",
    name: "Adobe Inc.",
    price: 487.36,
    change: 3.78,
    changePercent: 0.78,
    volume: 3215600
  },
  {
    id: "orcl",
    symbol: "ORCL",
    name: "Oracle Corporation",
    price: 127.54,
    change: 1.12,
    changePercent: 0.88,
    volume: 8945600
  }
];

const topMovers = [
  {
    id: "nvda",
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 925.17,
    change: 28.75,
    changePercent: 3.21,
    volume: 42856700
  },
  {
    id: "tsla",
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 175.43,
    change: 5.78,
    changePercent: 3.41,
    volume: 67892100
  },
  {
    id: "amd",
    symbol: "AMD",
    name: "Advanced Micro Devices, Inc.",
    price: 172.48,
    change: 4.65,
    changePercent: 2.77,
    volume: 28974500
  },
  {
    id: "pltr",
    symbol: "PLTR",
    name: "Palantir Technologies Inc.",
    price: 24.76,
    change: 0.98,
    changePercent: 4.12,
    volume: 35678200
  },
  {
    id: "snap",
    symbol: "SNAP",
    name: "Snap Inc.",
    price: 14.89,
    change: 0.87,
    changePercent: 6.21,
    volume: 19871300
  },
  {
    id: "roku",
    symbol: "ROKU",
    name: "Roku, Inc.",
    price: 62.35,
    change: 3.27,
    changePercent: 5.53,
    volume: 8765400
  },
  {
    id: "shop",
    symbol: "SHOP",
    name: "Shopify Inc.",
    price: 76.48,
    change: 3.92,
    changePercent: 5.40,
    volume: 12567800
  },
  {
    id: "abnb",
    symbol: "ABNB",
    name: "Airbnb, Inc.",
    price: 154.23,
    change: 7.21,
    changePercent: 4.91,
    volume: 6789500
  },
  {
    id: "uber",
    symbol: "UBER",
    name: "Uber Technologies, Inc.",
    price: 76.54,
    change: 3.54,
    changePercent: 4.85,
    volume: 15678900
  },
  {
    id: "coin",
    symbol: "COIN",
    name: "Coinbase Global, Inc.",
    price: 245.87,
    change: 11.23,
    changePercent: 4.79,
    volume: 9876500
  }
];

const topLosers = [
  {
    id: "nflx",
    symbol: "NFLX",
    name: "Netflix Inc.",
    price: 627.40,
    change: -8.35,
    changePercent: -1.31,
    volume: 4567800
  },
  {
    id: "dis",
    symbol: "DIS",
    name: "The Walt Disney Company",
    price: 112.83,
    change: -2.15,
    changePercent: -1.87,
    volume: 8765400
  },
  {
    id: "intc",
    symbol: "INTC",
    name: "Intel Corporation",
    price: 42.76,
    change: -1.25,
    changePercent: -2.84,
    volume: 32456700
  },
  {
    id: "wmt",
    symbol: "WMT",
    name: "Walmart Inc.",
    price: 58.93,
    change: -0.77,
    changePercent: -1.29,
    volume: 12345600
  },
  {
    id: "amzn",
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 178.75,
    change: -3.25,
    changePercent: -1.79,
    volume: 31452900
  },
  {
    id: "jpm",
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    price: 196.54,
    change: -4.67,
    changePercent: -2.32,
    volume: 13578900
  },
  {
    id: "ba",
    symbol: "BA",
    name: "The Boeing Company",
    price: 178.32,
    change: -6.87,
    changePercent: -3.71,
    volume: 9876500
  },
  {
    id: "mrk",
    symbol: "MRK",
    name: "Merck & Co., Inc.",
    price: 126.78,
    change: -3.12,
    changePercent: -2.40,
    volume: 7654300
  },
  {
    id: "cvx",
    symbol: "CVX",
    name: "Chevron Corporation",
    price: 152.36,
    change: -4.78,
    changePercent: -3.04,
    volume: 8765400
  },
  {
    id: "xom",
    symbol: "XOM",
    name: "Exxon Mobil Corporation",
    price: 114.58,
    change: -3.42,
    changePercent: -2.90,
    volume: 10987600
  }
];

// Get all stock-related news
const allStockNews = mockNews.filter(news => 
  news.title.includes("Stocks") || 
  news.title.includes("Market") || 
  news.title.includes("Earnings") || 
  news.title.includes("Companies") ||
  news.title.includes("Fed") ||
  news.snippet.includes("shares") ||
  news.snippet.includes("market") ||
  news.id.startsWith("stock")
);

export default function StocksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Function to truncate search query for display
  const truncateQuery = (query: string) => {
    return query.length > 11 ? query.substring(0, 11) + '...' : query;
  };
  
  // Filter data based on search query
  const filteredStocks = searchQuery ? 
    [...techStocks, ...topMovers, ...topLosers].filter(stock => 
      stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
      stock.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];
  
  const filteredNews = searchQuery ? 
    allStockNews.filter(news => 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      news.snippet.toLowerCase().includes(searchQuery.toLowerCase())
    ) : allStockNews;
  
  const hasNoResults = searchQuery && filteredStocks.length === 0 && filteredNews.length === 0;
  
  return (
    <div className="flex flex-col w-full">
      {/* Sticky search bar with transparent background */}
      <div className="sticky top-14 z-30 w-full py-4 backdrop-blur-md bg-card/30 border-b border-border/50 shadow-sm">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <Input
              type="search"
              placeholder="Search stocks or stock news..."
              className="pl-10 w-full bg-card/50 border-border/50 focus:border-primary focus-visible:ring-1 focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        {hasNoResults ? (
          <div className="w-full py-12">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex justify-center items-center py-20 bg-muted/30 rounded-lg border border-border/20">
                <p className="text-muted-foreground text-lg">
                  No results found for "{truncateQuery(searchQuery)}"
                  <br />
                  Try a different search term.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Stock News */}
            <section className="py-8 md:py-10" id="stock-news">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">Stock News</h2>
                    <p className="text-muted-foreground">Latest updates from the stock market</p>
                  </div>
                  <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                    View All News →
                  </Link>
                </div>
                
                <ScrollArea className="w-full -mx-1 px-1">
                  <div className="flex space-x-4 pb-4 pt-1">
                    {filteredNews.slice(0, 8).map((news, i) => (
                      <div key={news.id} className="shrink-0">
                        <NewsCard news={news} />
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" className="mt-2" />
                </ScrollArea>
              </div>
            </section>
            
            {searchQuery ? (
              <section className="py-8 md:py-10 bg-muted/50" id="search-results">
                <div className="container px-4 md:px-6 mx-auto">
                  <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-foreground">Search Results</h2>
                      <p className="text-muted-foreground">Found {filteredStocks.length} stocks matching "{truncateQuery(searchQuery)}"</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {filteredStocks.map((stock, index) => (
                      <StockCard key={`search-${stock.id}-${index}`} stock={stock} />
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              <>
                {/* Top Tech Stocks */}
                <section className="py-8 md:py-10 bg-muted/50" id="tech">
                  <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">Top Tech Stocks</h2>
                        <p className="text-muted-foreground">Leading technology companies</p>
                      </div>
                      <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                        View All Tech Stocks →
                      </Link>
                    </div>
                    
                    <ScrollArea className="w-full -mx-1 px-1">
                      <div className="flex space-x-4 pb-4 pt-1">
                        {techStocks.map((stock, i) => (
                          <div key={`tech-${stock.id}-${i}`} className="shrink-0">
                            <StockCard stock={stock} />
                          </div>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" className="mt-2" />
                    </ScrollArea>
                  </div>
                </section>
                
                {/* Top Movers */}
                <section className="py-8 md:py-10" id="movers">
                  <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">Top Movers</h2>
                        <p className="text-muted-foreground">Stocks with the biggest gains today</p>
                      </div>
                      <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                        View All Movers →
                      </Link>
                    </div>
                    
                    <ScrollArea className="w-full -mx-1 px-1">
                      <div className="flex space-x-4 pb-4 pt-1">
                        {topMovers.map((stock, i) => (
                          <div key={`movers-${stock.id}-${i}`} className="shrink-0">
                            <StockCard stock={stock} />
                          </div>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" className="mt-2" />
                    </ScrollArea>
                  </div>
                </section>
                
                {/* Top Losers */}
                <section className="py-8 md:py-10 bg-muted/50" id="losers">
                  <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">Top Losers</h2>
                        <p className="text-muted-foreground">Stocks with the biggest losses today</p>
                      </div>
                      <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                        View All Losers →
                      </Link>
                    </div>
                    
                    <ScrollArea className="w-full -mx-1 px-1">
                      <div className="flex space-x-4 pb-4 pt-1">
                        {topLosers.map((stock, i) => (
                          <div key={`losers-${stock.id}-${i}`} className="shrink-0">
                            <StockCard stock={stock} />
                          </div>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" className="mt-2" />
                    </ScrollArea>
                  </div>
                </section>
                
                {/* More Stock News */}
                <section className="py-8 md:py-10" id="more-news">
                  <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">More Stock News</h2>
                        <p className="text-muted-foreground">In-depth coverage of the stock market</p>
                      </div>
                    </div>
                    
                    <ScrollArea className="w-full -mx-1 px-1">
                      <div className="flex space-x-4 pb-4 pt-1">
                        {filteredNews.slice(8, 16).map((news, i) => (
                          <div key={`more-${news.id}-${i}`} className="shrink-0">
                            <NewsCard news={news} />
                          </div>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" className="mt-2" />
                    </ScrollArea>
                  </div>
                </section>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
} 