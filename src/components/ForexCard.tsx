import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export interface ForexData {
  id: string;
  pair: string;
  baseCurrency: string;
  quoteCurrency: string;
  rate: number;
  change: number;
  changePercent: number;
}

export function ForexCard({ forex }: { forex: ForexData }) {
  const isPositive = forex.change >= 0;
  
  return (
    <Link href={`/asset/forex/${forex.id}`} className="block">
      <Card className="w-[300px] h-[200px] hover:border-primary hover:bg-card/80 transition-colors">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{forex.pair}</CardTitle>
              <p className="text-sm text-muted-foreground">{forex.baseCurrency}/{forex.quoteCurrency}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{forex.rate.toFixed(4)}</div>
          <div className={`flex items-center mt-1 font-medium ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
            <span>{isPositive ? '+' : ''}{forex.change.toFixed(4)}</span>
            <span className="ml-1">({isPositive ? '+' : ''}{forex.changePercent.toFixed(2)}%)</span>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          {/* Footer content removed */}
        </CardFooter>
      </Card>
    </Link>
  );
} 