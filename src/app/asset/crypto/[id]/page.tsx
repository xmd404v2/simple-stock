import { AssetDetailHeader } from '@/components/AssetDetailHeader';
import { TradingViewChart } from '@/components/TradingViewChart';
import { getCryptoDetails } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';

export default function CryptoDetailPage({ params }: { params: { id: string } }) {
  // Access id directly without awaiting
  const crypto = getCryptoDetails(params.id);
  
  if (!crypto) {
    notFound();
  }
  
  return (
    <div className="flex flex-col gap-6 pb-8 bg-background">
      <AssetDetailHeader
        assetType="crypto"
        symbol={crypto.symbol}
        name={crypto.name}
        price={crypto.price}
        change={crypto.change}
        changePercent={crypto.changePercent}
        additionalInfo={(
          <>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">Market Cap</span>
              <span className="font-medium text-foreground">${crypto.marketCap?.toLocaleString() || 'N/A'}</span>
            </div>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">Volume (24h)</span>
              <span className="font-medium text-foreground">${crypto.volume?.toLocaleString() || 'N/A'}</span>
            </div>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">Circulating Supply</span>
              <span className="font-medium text-foreground">{(crypto.marketCap / crypto.price).toLocaleString()} {crypto.symbol}</span>
            </div>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">All-Time High</span>
              <span className="font-medium text-foreground">${(crypto.price * 1.5).toLocaleString()}</span>
            </div>
          </>
        )}
      />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <TradingViewChart symbol={crypto.symbol} assetType="crypto" />
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
                    <span className="font-medium text-foreground">{crypto.change > 0 ? 'Buy' : 'Sell'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Moving Averages</span>
                    <span className={`font-medium ${crypto.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {crypto.change > 0 ? 'Buy' : 'Sell'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Oscillators</span>
                    <span className="font-medium text-yellow-500">Neutral</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support Level</span>
                    <span className="font-medium text-foreground">${(crypto.price * 0.9).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resistance Level</span>
                    <span className="font-medium text-foreground">${(crypto.price * 1.1).toLocaleString()}</span>
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