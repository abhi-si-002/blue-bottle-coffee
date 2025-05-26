import Image from "next/image";
import { Phone, MapPin, Clock, Calendar } from "lucide-react";

export default function Hero({ businessData }) {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_640,q_auto/2025/05%20May/May%20Wk%204/HP_MAYWK4_M1C_Mobile.jpg"
          alt="Barber shop interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/60 to-slate-900/50 dark:from-background/70 dark:via-background/60 dark:to-background/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-8 animate-fade-in max-w-2xl">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 dark:from-primary dark:via-primary/80 dark:to-secondary bg-clip-text text-transparent animate-gradient">
                Welcome to {businessData.name}
              </span>
            </h2>
            <p className="text-xl text-slate-200 dark:text-muted-foreground">{businessData.category}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400 dark:text-primary animate-bounce" />
                <span className="text-slate-200 dark:text-muted-foreground">{businessData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400 dark:text-primary animate-pulse" />
                <span className="text-slate-200 dark:text-muted-foreground">{businessData.closing_time}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${businessData.call_url}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 dark:bg-primary/90 dark:text-primary-foreground rounded-lg hover:bg-amber-400 dark:hover:bg-primary transition-all hover:scale-105 hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={businessData.directions_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-100 dark:bg-secondary/90 dark:text-secondary-foreground rounded-lg hover:bg-slate-700 dark:hover:bg-secondary transition-all hover:scale-105 hover:shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
            <a
              href="/booking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 dark:bg-primary/90 dark:text-primary-foreground rounded-lg hover:bg-amber-400 dark:hover:bg-primary transition-all hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 