import { AssetDetailHeader } from '@/components/AssetDetailHeader';
import { TradingViewChart } from '@/components/TradingViewChart';
import { getStockDetails } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function StockDetailPage({ params }: PageProps) {
  const { id } = await params;
  const stock = getStockDetails(id);
  
  if (!stock) {
    notFound();
  }
  
  return (
    <div className="flex flex-col gap-6 pb-8 bg-background">
      <AssetDetailHeader
        assetType="stock"
        symbol={stock.symbol}
        name={stock.name}
        price={stock.price}
        change={stock.change}
        changePercent={stock.changePercent}
        additionalInfo={(
          <>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">Market Cap</span>
              <span className="font-medium text-foreground">
                ${stock.volume ? (stock.price * stock.volume).toLocaleString() : 'N/A'}
              </span>
            </div>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">Volume</span>
              <span className="font-medium text-foreground">{stock.volume?.toLocaleString() || 'N/A'}</span>
            </div>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">P/E Ratio</span>
              <span className="font-medium text-foreground">{(stock.price / (stock.price * 0.05)).toFixed(2)}</span>
            </div>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">52-Week Range</span>
              <span className="font-medium text-foreground">
                ${(stock.price * 0.8).toFixed(2)} - ${(stock.price * 1.2).toFixed(2)}
              </span>
            </div>
          </>
        )}
      />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <TradingViewChart symbol={stock.symbol} assetType="stock" />
          </div>
          
          <div>
            <Card className="bg-card/80 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-foreground">Trading Signals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technical Rating</span>
                    <span className="font-medium text-foreground">{stock.change > 0 ? 'Buy' : 'Sell'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Moving Averages</span>
                    <span className={`font-medium ${stock.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stock.change > 0 ? 'Buy' : 'Sell'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Oscillators</span>
                    <span className="font-medium text-yellow-500">Neutral</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support Level</span>
                    <span className="font-medium text-foreground">${(stock.price * 0.95).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resistance Level</span>
                    <span className="font-medium text-foreground">${(stock.price * 1.05).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 