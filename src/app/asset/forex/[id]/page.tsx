import { AssetDetailHeader } from '@/components/AssetDetailHeader';
import { TradingViewChart } from '@/components/TradingViewChart';
import { getForexDetails } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ForexDetailPage({ params }: PageProps) {
  const { id } = await params;
  const forex = getForexDetails(id);
  
  if (!forex) {
    notFound();
  }
  
  return (
    <div className="flex flex-col gap-6 pb-8 bg-background">
      <AssetDetailHeader
        assetType="forex"
        symbol={forex.pair}
        name={`${forex.baseCurrency}/${forex.quoteCurrency}`}
        price={forex.rate}
        change={forex.change}
        changePercent={forex.changePercent}
        additionalInfo={(
          <>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">Base Currency</span>
              <span className="font-medium text-foreground">{forex.baseCurrency}</span>
            </div>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">Quote Currency</span>
              <span className="font-medium text-foreground">{forex.quoteCurrency}</span>
            </div>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">Daily Range</span>
              <span className="font-medium text-foreground">
                {(forex.rate * 0.99).toFixed(4)} - {(forex.rate * 1.01).toFixed(4)}
              </span>
            </div>
            <div className="flex flex-col p-2 rounded-md bg-card/50">
              <span className="text-sm text-muted-foreground mb-1">52-Week Range</span>
              <span className="font-medium text-foreground">
                {(forex.rate * 0.95).toFixed(4)} - {(forex.rate * 1.05).toFixed(4)}
              </span>
            </div>
          </>
        )}
      />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <TradingViewChart symbol={forex.pair} assetType="forex" />
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
                    <span className="font-medium text-foreground">{forex.change > 0 ? 'Buy' : 'Sell'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Moving Averages</span>
                    <span className={`font-medium ${forex.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {forex.change > 0 ? 'Buy' : 'Sell'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Oscillators</span>
                    <span className="font-medium text-yellow-500">Neutral</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support Level</span>
                    <span className="font-medium text-foreground">{(forex.rate * 0.995).toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resistance Level</span>
                    <span className="font-medium text-foreground">{(forex.rate * 1.005).toFixed(4)}</span>
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