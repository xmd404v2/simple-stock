import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-card/80 border-border/50">
      <div className="container px-4 md:px-6 py-8 mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">SimpleStock</h3>
            <p className="text-sm text-muted-foreground">
              Providing real-time market data and financial insights to help you build generational wealth.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          
          {/* Column 2 - Markets */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Markets</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#stocks" className="text-muted-foreground hover:text-primary transition-colors">
                  Stocks
                </Link>
              </li>
              <li>
                <Link href="#crypto" className="text-muted-foreground hover:text-primary transition-colors">
                  Cryptocurrencies
                </Link>
              </li>
              <li>
                <Link href="#forex" className="text-muted-foreground hover:text-primary transition-colors">
                  Forex
                </Link>
              </li>
              <li>
                <Link href="/market" className="text-muted-foreground hover:text-primary transition-colors">
                  Market News
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn" className="text-muted-foreground hover:text-primary transition-colors">
                  Learning Center
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-muted-foreground hover:text-primary transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Market Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-xs text-muted-foreground mb-4">
            <strong>Disclaimer:</strong> All market data provided is for informational purposes only and not for trading purposes or financial advice.
            Price data may be delayed. SimpleStock is not a registered broker-dealer or investment advisor.
          </p>
          
          {/* Attribution & copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <p>© {currentYear} SimpleStock. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 