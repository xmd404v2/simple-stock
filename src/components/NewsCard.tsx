import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export interface NewsData {
  id: string;
  title: string;
  source: string;
  date: string;
  snippet: string;
  url: string;
}

export function NewsCard({ news }: { news: NewsData }) {
  return (
    <Link href={news.url} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="w-[350px] h-[230px] hover:border-primary hover:bg-card/80 transition-colors flex flex-col">
        <CardHeader className="pb-2 flex-none">
          <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{news.source}</span>
            <span>{news.date}</span>
          </div>
        </CardHeader>
        <CardContent className="pb-2 flex-grow overflow-hidden">
          <p className="text-sm line-clamp-3">{news.snippet}</p>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground flex-none">
          <div>Read more →</div>
        </CardFooter>
      </Card>
    </Link>
  );
} 