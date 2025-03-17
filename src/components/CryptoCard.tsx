import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap?: number;
  volume?: number;
}

export function CryptoCard({ crypto }: { crypto: CryptoData }) {
  const isPositive = crypto.change >= 0;
  
  return (
    <Link href={`/asset/crypto/${crypto.id}`} className="block">
      <Card className="w-[300px] h-[200px] hover:border-primary hover:bg-card/80 transition-colors">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{crypto.symbol}</CardTitle>
              <p className="text-sm text-muted-foreground">{crypto.name}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${crypto.price.toLocaleString()}</div>
          <div className={`flex items-center mt-1 font-medium ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
            <span>{isPositive ? '+' : ''}{crypto.change.toFixed(2)}</span>
            <span className="ml-1">({isPositive ? '+' : ''}{crypto.changePercent.toFixed(2)}%)</span>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          {/* Footer content removed */}
        </CardFooter>
      </Card>
    </Link>
  );
} 