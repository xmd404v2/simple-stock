import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface TradingViewChartProps {
  symbol: string;
  assetType: 'stock' | 'crypto' | 'forex';
}

export function TradingViewChart({ symbol, assetType }: TradingViewChartProps) {
  // This is a placeholder for the actual TradingView widget
  // In a real implementation, you would integrate the TradingView widget here
  
  return (
    <Card className="overflow-hidden bg-card/80 border-border/50">
      <Tabs defaultValue="1d" className="w-full">
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <div className="text-lg font-semibold text-foreground">Chart</div>
          <TabsList className="bg-muted/50">
            <TabsTrigger value="1h">1H</TabsTrigger>
            <TabsTrigger value="1d">1D</TabsTrigger>
            <TabsTrigger value="1w">1W</TabsTrigger>
            <TabsTrigger value="1m">1M</TabsTrigger>
            <TabsTrigger value="1y">1Y</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="1h" className="p-0">
          <div className="h-[400px] w-full bg-muted/30 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-lg font-medium mb-2 text-foreground">TradingView Chart Placeholder</p>
              <p className="text-sm text-muted-foreground">
                {assetType === 'stock' && `${symbol} Stock Chart - 1 Hour`}
                {assetType === 'crypto' && `${symbol} Cryptocurrency Chart - 1 Hour`}
                {assetType === 'forex' && `${symbol} Forex Chart - 1 Hour`}
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                In a production environment, this would be replaced with the TradingView widget.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="1d" className="p-0">
          <div className="h-[400px] w-full bg-muted/30 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-lg font-medium mb-2 text-foreground">TradingView Chart Placeholder</p>
              <p className="text-sm text-muted-foreground">
                {assetType === 'stock' && `${symbol} Stock Chart - 1 Day`}
                {assetType === 'crypto' && `${symbol} Cryptocurrency Chart - 1 Day`}
                {assetType === 'forex' && `${symbol} Forex Chart - 1 Day`}
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                In a production environment, this would be replaced with the TradingView widget.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="1w" className="p-0">
          <div className="h-[400px] w-full bg-muted/30 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-lg font-medium mb-2 text-foreground">TradingView Chart Placeholder</p>
              <p className="text-sm text-muted-foreground">
                {assetType === 'stock' && `${symbol} Stock Chart - 1 Week`}
                {assetType === 'crypto' && `${symbol} Cryptocurrency Chart - 1 Week`}
                {assetType === 'forex' && `${symbol} Forex Chart - 1 Week`}
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                In a production environment, this would be replaced with the TradingView widget.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="1m" className="p-0">
          <div className="h-[400px] w-full bg-muted/30 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-lg font-medium mb-2 text-foreground">TradingView Chart Placeholder</p>
              <p className="text-sm text-muted-foreground">
                {assetType === 'stock' && `${symbol} Stock Chart - 1 Month`}
                {assetType === 'crypto' && `${symbol} Cryptocurrency Chart - 1 Month`}
                {assetType === 'forex' && `${symbol} Forex Chart - 1 Month`}
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                In a production environment, this would be replaced with the TradingView widget.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="1y" className="p-0">
          <div className="h-[400px] w-full bg-muted/30 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-lg font-medium mb-2 text-foreground">TradingView Chart Placeholder</p>
              <p className="text-sm text-muted-foreground">
                {assetType === 'stock' && `${symbol} Stock Chart - 1 Year`}
                {assetType === 'crypto' && `${symbol} Cryptocurrency Chart - 1 Year`}
                {assetType === 'forex' && `${symbol} Forex Chart - 1 Year`}
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                In a production environment, this would be replaced with the TradingView widget.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
} 