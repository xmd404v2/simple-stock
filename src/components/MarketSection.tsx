import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

interface MarketSectionProps {
  title: string;
  description?: string;
  items: React.ReactNode[];
  isLoading?: boolean;
}

export function MarketSection({ 
  title, 
  description, 
  items, 
  isLoading = false 
}: MarketSectionProps) {
  return (
    <section className="py-8 md:py-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{title}</h2>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        
        <ScrollArea className="w-full -mx-1 px-1">
          <div className="flex space-x-4 pb-4 pt-1">
            {isLoading ? (
              Array(5).fill(0).map((_, i) => (
                <Card key={i} className="w-[300px] shrink-0 bg-card/80 border-border/50">
                  <CardHeader className="pb-2">
                    <Skeleton className="h-5 w-1/2 bg-muted/70" />
                    <Skeleton className="h-4 w-3/4 bg-muted/70" />
                  </CardHeader>
                  <CardContent className="pb-2">
                    <Skeleton className="h-24 w-full rounded-md bg-muted/70" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-4 w-1/2 bg-muted/70" />
                  </CardFooter>
                </Card>
              ))
            ) : (
              items.map((item, i) => (
                <div key={i} className="shrink-0">
                  {item}
                </div>
              ))
            )}
          </div>
          <ScrollBar orientation="horizontal" className="mt-2" />
        </ScrollArea>
      </div>
    </section>
  );
} 