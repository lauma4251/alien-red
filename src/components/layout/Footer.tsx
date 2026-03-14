import React from "react";
import { Link } from "react-router-dom";
import { Cigarette } from "lucide-react";
import { FaDiscord, FaInstagram, FaEnvelope} from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <Cigarette className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                About
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              MovieGO is a free movie streaming site that allows users to watch movies and TV series online in HD without a subscription. 
			  We offer a vast collection of movies and trending TV shows with multi-language subtitles, no registration required.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Mail"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Discord"
              >
                <FaDiscord className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/tv"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  to="/genres"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Genres
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
          MovieGO does not store any media files on its servers. All media is provided by third-party services.
          </p>
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} MovieGO. All rights not reserved lol.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
