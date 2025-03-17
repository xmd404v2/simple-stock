"use client";

import { useState } from 'react';
import { StockCard } from "@/components/StockCard";
import { NewsCard } from "@/components/NewsCard";
import { mockStocks, mockNews } from "@/lib/mock-data";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Filter forex for different categories
const majorPairs = [
  {
    id: "eurusd",
    symbol: "EUR/USD",
    name: "Euro / US Dollar",
    price: 1.0743,
    change: 0.0028,
    changePercent: 0.26,
    volume: 123456000
  },
  {
    id: "usdjpy",
    symbol: "USD/JPY",
    name: "US Dollar / Japanese Yen",
    price: 154.92,
    change: -0.12,
    changePercent: -0.08,
    volume: 89456000
  },
  {
    id: "gbpusd",
    symbol: "GBP/USD",
    name: "British Pound / US Dollar",
    price: 1.2565,
    change: 0.0032,
    changePercent: 0.25,
    volume: 76543000
  },
  {
    id: "usdchf",
    symbol: "USD/CHF",
    name: "US Dollar / Swiss Franc",
    price: 0.9043,
    change: -0.0021,
    changePercent: -0.23,
    volume: 54321000
  },
  {
    id: "audusd",
    symbol: "AUD/USD",
    name: "Australian Dollar / US Dollar",
    price: 0.6578,
    change: 0.0025,
    changePercent: 0.38,
    volume: 45678000
  },
  {
    id: "usdcad",
    symbol: "USD/CAD",
    name: "US Dollar / Canadian Dollar",
    price: 1.3654,
    change: -0.0034,
    changePercent: -0.25,
    volume: 38765000
  },
  {
    id: "nzdusd",
    symbol: "NZD/USD",
    name: "New Zealand Dollar / US Dollar",
    price: 0.5978,
    change: 0.0019,
    changePercent: 0.32,
    volume: 29875000
  },
  {
    id: "eurjpy",
    symbol: "EUR/JPY",
    name: "Euro / Japanese Yen",
    price: 166.42,
    change: 0.32,
    changePercent: 0.19,
    volume: 47865000
  },
  {
    id: "eurgbp",
    symbol: "EUR/GBP",
    name: "Euro / British Pound",
    price: 0.8549,
    change: 0.0012,
    changePercent: 0.14,
    volume: 36789000
  },
  {
    id: "gbpjpy",
    symbol: "GBP/JPY",
    name: "British Pound / Japanese Yen",
    price: 194.65,
    change: 0.45,
    changePercent: 0.23,
    volume: 28976000
  }
];

const topGainers = [
  {
    id: "zarjpy",
    symbol: "ZAR/JPY",
    name: "South African Rand / Japanese Yen",
    price: 10.32,
    change: 0.15,
    changePercent: 1.48,
    volume: 12578000
  },
  {
    id: "mxnjpy",
    symbol: "MXN/JPY",
    name: "Mexican Peso / Japanese Yen",
    price: 9.15,
    change: 0.12,
    changePercent: 1.33,
    volume: 9876000
  },
  {
    id: "audjpy",
    symbol: "AUD/JPY",
    name: "Australian Dollar / Japanese Yen",
    price: 101.89,
    change: 1.22,
    changePercent: 1.21,
    volume: 23456000
  },
  {
    id: "nzdjpy",
    symbol: "NZD/JPY",
    name: "New Zealand Dollar / Japanese Yen",
    price: 92.54,
    change: 1.01,
    changePercent: 1.10,
    volume: 18976000
  },
  {
    id: "chfjpy",
    symbol: "CHF/JPY",
    name: "Swiss Franc / Japanese Yen",
    price: 171.32,
    change: 1.76,
    changePercent: 1.04,
    volume: 17865000
  },
  {
    id: "cadjpy",
    symbol: "CAD/JPY",
    name: "Canadian Dollar / Japanese Yen",
    price: 113.46,
    change: 0.89,
    changePercent: 0.79,
    volume: 19874000
  },
  {
    id: "nokjpy",
    symbol: "NOK/JPY",
    name: "Norwegian Krone / Japanese Yen",
    price: 14.23,
    change: 0.11,
    changePercent: 0.78,
    volume: 11234000
  },
  {
    id: "tryusd",
    symbol: "TRY/USD",
    name: "Turkish Lira / US Dollar",
    price: 0.032,
    change: 0.00024,
    changePercent: 0.76,
    volume: 16543000
  },
  {
    id: "cadchf",
    symbol: "CAD/CHF",
    name: "Canadian Dollar / Swiss Franc",
    price: 0.664,
    change: 0.0047,
    changePercent: 0.71,
    volume: 9875000
  },
  {
    id: "eurtry",
    symbol: "EUR/TRY",
    name: "Euro / Turkish Lira",
    price: 33.67,
    change: 0.22,
    changePercent: 0.66,
    volume: 21789000
  }
];

const topLosers = [
  {
    id: "usdtry",
    symbol: "USD/TRY",
    name: "US Dollar / Turkish Lira",
    price: 31.34,
    change: -0.54,
    changePercent: -1.69,
    volume: 25467000
  },
  {
    id: "gbpnzd",
    symbol: "GBP/NZD",
    name: "British Pound / New Zealand Dollar",
    price: 2.102,
    change: -0.034,
    changePercent: -1.59,
    volume: 11278000
  },
  {
    id: "usdzar",
    symbol: "USD/ZAR",
    name: "US Dollar / South African Rand",
    price: 15.02,
    change: -0.22,
    changePercent: -1.45,
    volume: 16987000
  },
  {
    id: "usdmxn",
    symbol: "USD/MXN",
    name: "US Dollar / Mexican Peso",
    price: 16.92,
    change: -0.23,
    changePercent: -1.34,
    volume: 19875000
  },
  {
    id: "gbphkd",
    symbol: "GBP/HKD",
    name: "British Pound / Hong Kong Dollar",
    price: 9.81,
    change: -0.12,
    changePercent: -1.21,
    volume: 8765000
  },
  {
    id: "eurnok",
    symbol: "EUR/NOK",
    name: "Euro / Norwegian Krone",
    price: 11.67,
    change: -0.14,
    changePercent: -1.19,
    volume: 12398000
  },
  {
    id: "usdsek",
    symbol: "USD/SEK",
    name: "US Dollar / Swedish Krona",
    price: 10.56,
    change: -0.12,
    changePercent: -1.13,
    volume: 13496000
  },
  {
    id: "gbpaud",
    symbol: "GBP/AUD",
    name: "British Pound / Australian Dollar",
    price: 1.91,
    change: -0.02,
    changePercent: -1.04,
    volume: 14597000
  },
  {
    id: "usdrub",
    symbol: "USD/RUB",
    name: "US Dollar / Russian Ruble",
    price: 90.34,
    change: -0.76,
    changePercent: -0.84,
    volume: 8976000
  },
  {
    id: "usdsgd",
    symbol: "USD/SGD",
    name: "US Dollar / Singapore Dollar",
    price: 1.352,
    change: -0.011,
    changePercent: -0.81,
    volume: 7865000
  }
];

// Get all forex-related news
const allForexNews = mockNews.filter(news => 
  news.title.includes("Forex") || 
  news.title.includes("Currency") || 
  news.title.includes("Dollar") || 
  news.title.includes("EUR") ||
  news.title.includes("FX") ||
  news.snippet.includes("exchange rate") ||
  news.snippet.includes("currency") ||
  news.id.startsWith("forex")
);

export default function ForexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Function to truncate search query for display
  const truncateQuery = (query: string) => {
    return query.length > 11 ? query.substring(0, 11) + '...' : query;
  };
  
  // Filter data based on search query
  const filteredForex = searchQuery ? 
    [...majorPairs, ...topGainers, ...topLosers].filter(forex => 
      forex.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
      forex.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];
  
  const filteredNews = searchQuery ? 
    allForexNews.filter(news => 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      news.snippet.toLowerCase().includes(searchQuery.toLowerCase())
    ) : allForexNews;
  
  const hasNoResults = searchQuery && filteredForex.length === 0 && filteredNews.length === 0;
  
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
              placeholder="Search forex pairs or forex news..."
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
            {/* Forex News */}
            <section className="py-8 md:py-10" id="forex-news">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">Forex News</h2>
                    <p className="text-muted-foreground">Latest updates from the forex market</p>
                  </div>
                  <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                    View All News →
                  </Link>
                </div>
                
                <ScrollArea className="w-full -mx-1 px-1">
                  <div className="flex space-x-4 pb-4 pt-1">
                    {filteredNews.slice(0, 8).map((news, i) => (
                      <div key={`news-${news.id}-${i}`} className="shrink-0">
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
                      <p className="text-muted-foreground">Found {filteredForex.length} forex pairs matching "{truncateQuery(searchQuery)}"</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {filteredForex.map((forex, index) => (
                      <StockCard key={`search-${forex.id}-${index}`} stock={forex} />
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              <>
                {/* Major Forex Pairs */}
                <section className="py-8 md:py-10 bg-muted/50" id="major-pairs">
                  <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">Major Forex Pairs</h2>
                        <p className="text-muted-foreground">Most traded currency pairs in the forex market</p>
                      </div>
                      <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                        View All Major Pairs →
                      </Link>
                    </div>
                    
                    <ScrollArea className="w-full -mx-1 px-1">
                      <div className="flex space-x-4 pb-4 pt-1">
                        {majorPairs.map((forex, i) => (
                          <div key={`major-${forex.id}-${i}`} className="shrink-0">
                            <StockCard stock={forex} />
                          </div>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" className="mt-2" />
                    </ScrollArea>
                  </div>
                </section>
                
                {/* Top Gainers */}
                <section className="py-8 md:py-10" id="gainers">
                  <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">Top Gainers</h2>
                        <p className="text-muted-foreground">Forex pairs with the biggest gains today</p>
                      </div>
                      <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                        View All Gainers →
                      </Link>
                    </div>
                    
                    <ScrollArea className="w-full -mx-1 px-1">
                      <div className="flex space-x-4 pb-4 pt-1">
                        {topGainers.map((forex, i) => (
                          <div key={`gainers-${forex.id}-${i}`} className="shrink-0">
                            <StockCard stock={forex} />
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
                        <p className="text-muted-foreground">Forex pairs with the biggest losses today</p>
                      </div>
                      <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                        View All Losers →
                      </Link>
                    </div>
                    
                    <ScrollArea className="w-full -mx-1 px-1">
                      <div className="flex space-x-4 pb-4 pt-1">
                        {topLosers.map((forex, i) => (
                          <div key={`losers-${forex.id}-${i}`} className="shrink-0">
                            <StockCard stock={forex} />
                          </div>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" className="mt-2" />
                    </ScrollArea>
                  </div>
                </section>
                
                {/* More Forex News */}
                <section className="py-8 md:py-10" id="more-news">
                  <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">More Forex News</h2>
                        <p className="text-muted-foreground">In-depth coverage of the forex market</p>
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