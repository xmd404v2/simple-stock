import { Separator } from "./ui/separator";
import Link from "next/link";

interface AssetDetailHeaderProps {
  assetType: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  additionalInfo?: React.ReactNode;
}

export function AssetDetailHeader({
  assetType,
  symbol,
  name,
  price,
  change,
  changePercent,
  additionalInfo
}: AssetDetailHeaderProps) {
  const isPositive = change >= 0;
  const isPriceSmall = price < 10;

  return (
    <div className="py-6 bg-card/80 border-b border-border/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/#${assetType.toLowerCase()}`} className="hover:text-primary transition-colors capitalize">{assetType}</Link>
            <span>/</span>
            <span className="text-foreground">{symbol}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mt-2">
            <div className="w-full sm:w-auto">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">{symbol}</h1>
              <p className="text-lg text-muted-foreground">{name}</p>
            </div>
            
            <div className="flex flex-col w-full sm:w-auto sm:items-end">
              <div className="text-3xl font-bold text-foreground">
                {isPriceSmall ? price.toFixed(4) : price.toLocaleString()}
                {assetType === 'stock' && ' USD'}
              </div>
              <div className={`flex items-center font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                <span>{isPositive ? '+' : ''}{change.toFixed(isPriceSmall ? 4 : 2)}</span>
                <span className="ml-1">({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)</span>
              </div>
            </div>
          </div>
          
          {additionalInfo && (
            <>
              <Separator className="my-4 bg-border/50" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {additionalInfo}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 