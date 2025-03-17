"use client";

import { useState } from 'react';
import { MarketSection } from "@/components/MarketSection";
import { StockCard } from "@/components/StockCard";
import { CryptoCard } from "@/components/CryptoCard";
import { ForexCard } from "@/components/ForexCard";
import { NewsCard } from "@/components/NewsCard";
import { mockStocks, mockCryptos, mockForex, mockNews } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Function to truncate search query for display
  const truncateQuery = (query: string) => {
    return query.length > 11 ? query.substring(0, 11) + '...' : query;
  };
  
  // Filter data based on search query
  const filteredStocks = mockStocks.filter(stock => 
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredCryptos = mockCryptos.filter(crypto => 
    crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredForex = mockForex.filter(forex => 
    forex.pair.toLowerCase().includes(searchQuery.toLowerCase()) || 
    forex.baseCurrency.toLowerCase().includes(searchQuery.toLowerCase()) || 
    forex.quoteCurrency.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredNews = mockNews.filter(news => 
    news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    news.snippet.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const hasNoResults = filteredStocks.length === 0 && 
                       filteredCryptos.length === 0 && 
                       filteredForex.length === 0 && 
                       filteredNews.length === 0;
  
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
              placeholder="Search stocks, crypto, forex, or news..."
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
            {filteredNews.length > 0 && (
              <div id="market" className="w-full bg-muted/30">
                <MarketSection
                  title="Market News"
                  description="Latest financial news and market updates"
                  items={filteredNews.map(news => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                />
              </div>
            )}
            
            {filteredStocks.length > 0 && (
              <div id="stocks" className="w-full">
                <MarketSection
                  title="Stocks"
                  description="Major stock indexes and popular equities"
                  items={filteredStocks.map(stock => (
                    <StockCard key={stock.id} stock={stock} />
                  ))}
                />
              </div>
            )}
            
            {filteredCryptos.length > 0 && (
              <div id="crypto" className="w-full bg-muted/30">
                <MarketSection
                  title="Cryptocurrencies"
                  description="Leading digital assets and tokens"
                  items={filteredCryptos.map(crypto => (
                    <CryptoCard key={crypto.id} crypto={crypto} />
                  ))}
                />
              </div>
            )}
            
            {filteredForex.length > 0 && (
              <div id="forex" className="w-full">
                <MarketSection
                  title="Forex"
                  description="Major currency pairs and exchange rates"
                  items={filteredForex.map(forex => (
                    <ForexCard key={forex.id} forex={forex} />
                  ))}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
