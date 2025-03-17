"use client";

import { useState } from 'react';
import { StockCard } from "@/components/StockCard";
import { NewsCard } from "@/components/NewsCard";
import { mockStocks, mockNews } from "@/lib/mock-data";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Filter crypto for different categories
const topCrypto = [
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    price: 56843.28,
    change: 1876.32,
    changePercent: 3.41,
    volume: 32456700000
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    price: 3245.67,
    change: 87.34,
    changePercent: 2.76,
    volume: 15728900000
  },
  {
    id: "sol",
    symbol: "SOL",
    name: "Solana",
    price: 147.28,
    change: 5.76,
    changePercent: 4.08,
    volume: 5678900000
  },
  {
    id: "ada",
    symbol: "ADA",
    name: "Cardano",
    price: 0.87,
    change: 0.03,
    changePercent: 3.57,
    volume: 2345678000
  },
  {
    id: "dot",
    symbol: "DOT",
    name: "Polkadot",
    price: 7.84,
    change: 0.28,
    changePercent: 3.70,
    volume: 1456789000
  },
  {
    id: "doge",
    symbol: "DOGE",
    name: "Dogecoin",
    price: 0.12,
    change: 0.01,
    changePercent: 9.09,
    volume: 7891234000
  },
  {
    id: "avax",
    symbol: "AVAX",
    name: "Avalanche",
    price: 28.45,
    change: 2.15,
    changePercent: 8.18,
    volume: 1234567000
  },
  {
    id: "link",
    symbol: "LINK",
    name: "Chainlink",
    price: 14.87,
    change: 0.56,
    changePercent: 3.91,
    volume: 987654000
  },
  {
    id: "uni",
    symbol: "UNI",
    name: "Uniswap",
    price: 8.94,
    change: 0.38,
    changePercent: 4.44,
    volume: 745632000
  },
  {
    id: "matic",
    symbol: "MATIC",
    name: "Polygon",
    price: 0.67,
    change: 0.04,
    changePercent: 6.34,
    volume: 658974000
  }
];

const topGainers = [
  {
    id: "shib",
    symbol: "SHIB",
    name: "Shiba Inu",
    price: 0.00001845,
    change: 0.0000025,
    changePercent: 15.67,
    volume: 5678900000
  },
  {
    id: "pepe",
    symbol: "PEPE",
    name: "Pepe",
    price: 0.00000987,
    change: 0.00000112,
    changePercent: 12.79,
    volume: 2398745000
  },
  {
    id: "arb",
    symbol: "ARB",
    name: "Arbitrum",
    price: 1.24,
    change: 0.13,
    changePercent: 11.71,
    volume: 1789456000
  },
  {
    id: "inj",
    symbol: "INJ",
    name: "Injective",
    price: 26.54,
    change: 2.45,
    changePercent: 10.18,
    volume: 568791000
  },
  {
    id: "doge",
    symbol: "DOGE",
    name: "Dogecoin",
    price: 0.12,
    change: 0.01,
    changePercent: 9.09,
    volume: 7891234000
  },
  {
    id: "avax",
    symbol: "AVAX",
    name: "Avalanche",
    price: 28.45,
    change: 2.15,
    changePercent: 8.18,
    volume: 1234567000
  },
  {
    id: "sui",
    symbol: "SUI",
    name: "Sui",
    price: 1.34,
    change: 0.10,
    changePercent: 8.06,
    volume: 875432000
  },
  {
    id: "near",
    symbol: "NEAR",
    name: "NEAR Protocol",
    price: 4.78,
    change: 0.35,
    changePercent: 7.90,
    volume: 456789000
  },
  {
    id: "sei",
    symbol: "SEI",
    name: "Sei",
    price: 0.76,
    change: 0.05,
    changePercent: 7.04,
    volume: 923456000
  },
  {
    id: "apt",
    symbol: "APT",
    name: "Aptos",
    price: 8.94,
    change: 0.58,
    changePercent: 6.94,
    volume: 789123000
  }
];

const topLosers = [
  {
    id: "ltc",
    symbol: "LTC",
    name: "Litecoin",
    price: 65.78,
    change: -3.45,
    changePercent: -4.98,
    volume: 1678954000
  },
  {
    id: "etc",
    symbol: "ETC",
    name: "Ethereum Classic",
    price: 23.45,
    change: -1.17,
    changePercent: -4.75,
    volume: 897654000
  },
  {
    id: "xmr",
    symbol: "XMR",
    name: "Monero",
    price: 152.34,
    change: -6.78,
    changePercent: -4.26,
    volume: 678945000
  },
  {
    id: "xlm",
    symbol: "XLM",
    name: "Stellar",
    price: 0.11,
    change: -0.0045,
    changePercent: -3.92,
    volume: 589674000
  },
  {
    id: "fil",
    symbol: "FIL",
    name: "Filecoin",
    price: 4.87,
    change: -0.18,
    changePercent: -3.56,
    volume: 765489000
  },
  {
    id: "hbar",
    symbol: "HBAR",
    name: "Hedera",
    price: 0.067,
    change: -0.0023,
    changePercent: -3.32,
    volume: 456789000
  },
  {
    id: "vet",
    symbol: "VET",
    name: "VeChain",
    price: 0.028,
    change: -0.0009,
    changePercent: -3.11,
    volume: 789456000
  },
  {
    id: "atom",
    symbol: "ATOM",
    name: "Cosmos",
    price: 8.45,
    change: -0.25,
    changePercent: -2.87,
    volume: 678945000
  },
  {
    id: "egld",
    symbol: "EGLD",
    name: "MultiversX",
    price: 42.67,
    change: -1.23,
    changePercent: -2.80,
    volume: 345678000
  },
  {
    id: "algo",
    symbol: "ALGO",
    name: "Algorand",
    price: 0.14,
    change: -0.004,
    changePercent: -2.78,
    volume: 456789000
  }
];

// Get all crypto-related news
const allCryptoNews = mockNews.filter(news => 
  news.title.includes("Crypto") || 
  news.title.includes("Bitcoin") || 
  news.title.includes("Blockchain") || 
  news.title.includes("Digital Currency") ||
  news.title.includes("Ethereum") ||
  news.snippet.includes("cryptocurrency") ||
  news.snippet.includes("bitcoin") ||
  news.id.startsWith("crypto")
);

export default function CryptoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Function to truncate search query for display
  const truncateQuery = (query: string) => {
    return query.length > 11 ? query.substring(0, 11) + '...' : query;
  };
  
  // Filter data based on search query
  const filteredCrypto = searchQuery ? 
    [...topCrypto, ...topGainers, ...topLosers].filter(crypto => 
      crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
      crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];
  
  const filteredNews = searchQuery ? 
    allCryptoNews.filter(news => 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      news.snippet.toLowerCase().includes(searchQuery.toLowerCase())
    ) : allCryptoNews;
  
  const hasNoResults = searchQuery && filteredCrypto.length === 0 && filteredNews.length === 0;
  
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
              placeholder="Search cryptocurrencies or crypto news..."
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
            {/* Crypto News */}
            <section className="py-8 md:py-10" id="crypto-news">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">Crypto News</h2>
                    <p className="text-muted-foreground">Latest updates from the cryptocurrency market</p>
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
                      <p className="text-muted-foreground">Found {filteredCrypto.length} cryptocurrencies matching "{truncateQuery(searchQuery)}"</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {filteredCrypto.map((crypto, index) => (
                      <StockCard key={`search-${crypto.id}-${index}`} stock={crypto} />
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              <>
                {/* Top Cryptocurrencies */}
                <section className="py-8 md:py-10 bg-muted/50" id="top-crypto">
                  <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">Top Cryptocurrencies</h2>
                        <p className="text-muted-foreground">Leading digital assets by market cap</p>
                      </div>
                      <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                        View All Cryptocurrencies →
                      </Link>
                    </div>
                    
                    <ScrollArea className="w-full -mx-1 px-1">
                      <div className="flex space-x-4 pb-4 pt-1">
                        {topCrypto.map((crypto, i) => (
                          <div key={`top-${crypto.id}-${i}`} className="shrink-0">
                            <StockCard stock={crypto} />
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
                        <p className="text-muted-foreground">Cryptocurrencies with the biggest gains today</p>
                      </div>
                      <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                        View All Gainers →
                      </Link>
                    </div>
                    
                    <ScrollArea className="w-full -mx-1 px-1">
                      <div className="flex space-x-4 pb-4 pt-1">
                        {topGainers.map((crypto, i) => (
                          <div key={`gainers-${crypto.id}-${i}`} className="shrink-0">
                            <StockCard stock={crypto} />
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
                        <p className="text-muted-foreground">Cryptocurrencies with the biggest losses today</p>
                      </div>
                      <Link href="#" className="text-primary hover:underline text-sm mt-2 md:mt-0">
                        View All Losers →
                      </Link>
                    </div>
                    
                    <ScrollArea className="w-full -mx-1 px-1">
                      <div className="flex space-x-4 pb-4 pt-1">
                        {topLosers.map((crypto, i) => (
                          <div key={`losers-${crypto.id}-${i}`} className="shrink-0">
                            <StockCard stock={crypto} />
                          </div>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" className="mt-2" />
                    </ScrollArea>
                  </div>
                </section>
                
                {/* More Crypto News */}
                <section className="py-8 md:py-10" id="more-news">
                  <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">More Crypto News</h2>
                        <p className="text-muted-foreground">In-depth coverage of the cryptocurrency market</p>
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