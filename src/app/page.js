import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  Coffee,
  Leaf,
  Smile,
  Instagram,
  Facebook,
  Calendar,
} from "lucide-react";
import Header from "@/components/Header";
import GallerySlider from "@/components/GallerySlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import MenuSlider from "@/components/MenuSlider";

// Business Data from JSON
const businessData = {
  name: "Blue Bottle Coffee",
  image_url:
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB8g_AGBeQLzzUG4EKwwAs2zHfVVVEcPdmMipk2TVqom77AZoIA4ejMpn5Gd-Zswsi8GzeFs7cRikf8_swgQiyOd3CQ3HgPu7OgJLkZYPa5p3ELCww7OVkeuLpz10Ol6weHyQXKV=w114-h114-n-k-no",
  rating: 4.6,
  review_count: 143,
  category: "Coffee Shop",
  business_age: "Upscale cafe chain",
  closing_time: "⋅ Closes 6 pm",
  location: "New York, NY, United States",
  address: "10 E 52nd St, New York, NY 10022, United States",
  phone: "+1 510-661-3510",
  services: "Dine-in · Takeout",
  website_url: "https://bluebottlecoffee.com/",
  directions_url:
    "https://maps.google.com/maps?daddr=10+E+52nd+St,+New+York,+NY+10022,+United+States",
  call_url: "+15106613510",
  menu_url: "https://bluebottlecoffee.com/menu",
  order_urls: [
    "https://order.online/",
    "https://doordash.com/",
    "https://trycaviar.com/"
  ],
  price_range: "$1–30",
};

// Coffee Shop Services/Menu
const services = [
  // Espresso
  {
    title: "Hayes Valley Espresso",
    description: "Signature espresso blend, rich and balanced.",
    price: "$3.5",
    category: "Espresso",
  },
  {
    title: "Single Origin Espresso",
    description: "Rotating single origin espresso shot.",
    price: "$4",
    category: "Espresso",
  },
  {
    title: "Decaf Espresso",
    description: "Smooth decaf espresso.",
    price: "$3.5",
    category: "Espresso",
  },
  {
    title: "Macchiato",
    description: "Espresso with a dollop of milk.",
    price: "$3.5",
    category: "Espresso",
  },
  {
    title: "Cappuccino",
    description: "Espresso with steamed milk and foam.",
    price: "$4.5",
    category: "Espresso",
  },
  {
    title: "Caffè Latte",
    description: "Espresso with steamed milk.",
    price: "$5",
    category: "Espresso",
  },
  {
    title: "Caffè Mocha",
    description: "Espresso, chocolate, and steamed milk.",
    price: "$5.5",
    category: "Espresso",
  },
  {
    title: "Almond Milk",
    description: "Add almond milk to any drink.",
    price: "+$1",
    category: "Espresso",
  },
  // Drip Coffee
  {
    title: "Moment's Notice",
    description: "House drip coffee.",
    price: "$3.5",
    category: "Drip Coffee",
  },
  {
    title: "Bella Donovan",
    description: "Classic blend drip coffee.",
    price: "$4",
    category: "Drip Coffee",
  },
  {
    title: "Limited Release",
    description: "Rotating single origin drip.",
    price: "$4.5",
    category: "Drip Coffee",
  },
  // Iced Coffee
  {
    title: "New Orleans",
    description: "Chicory iced coffee, sweetened with milk.",
    price: "$4.25",
    category: "Iced Coffee",
  },
  {
    title: "Cold Brew",
    description: "Slow-steeped cold brew coffee.",
    price: "$4.25",
    category: "Iced Coffee",
  },
  {
    title: "Coffee Tonic",
    description: "Espresso with tonic water over ice.",
    price: "$5",
    category: "Iced Coffee",
  },
  // Specialties
  {
    title: "Cascara Fizz",
    description: "Sparkling cascara beverage.",
    price: "$3.75",
    category: "Specialties",
  },
  {
    title: "Lemon Yuzu Fizz",
    description: "Sparkling lemon yuzu drink.",
    price: "$3.75",
    category: "Specialties",
  },
  {
    title: "Tea",
    description: "Assorted teas, ask for selection.",
    price: "$4",
    category: "Specialties",
  },
  {
    title: "Hot Chocolate",
    description: "Rich hot chocolate.",
    price: "$4.75",
    category: "Specialties",
  },
  // Wafel
  {
    title: "Liège Wafel",
    description: "Belgian-style sweet wafel.",
    price: "$4.5",
    category: "Specialties",
  },
];

// Coffee Shop Gallery Images
const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no1hpmA5cAzsabNNeL0kDHXZetnDDJN64f5sq4koFVveyZJMTEBxuRY--fBkxad9GsF9-G5Z-8arN9CQZrOrpG66gj2Tpg0k0OB-2ZP_i6DRuteIEEbyLRJrQ18SVW5IZ6bg3T7cQ=s1360-w1360-h1020-rw",
    alt: "Blue Bottle Coffee shop interior",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np2hAuHijHPj-DWVP-K7daGR9irRAnmsWVXjbUpcKYqctTixJGC4j9bnHHDEd5cYAQdGvJkcD0SmJfmdJPYTgJunVF8yxvFdrqnx-bDHzrLckeqbh-wCWmYMPS3KnBFJEethjrf=s1360-w1360-h1020-rw",
    alt: "Barista making coffee",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noOYFvVspZwM4JDUPm3ojSDslRMoX3TCXW7vihDkMkUPtqlacoa2iesUrH4GWoc6BgZUPUU91HqM4CE8pgO5CGrOQM7YNYLH5F2LBGtPeABxGloDKMYhLXVl4K0bF-sRTJgMYidEw=w141-h235-n-k-no-nu",
    alt: "Coffee and pastries",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no7-_t9VwMbyxIi_g471RKQralrWnE5t3dILQgF1NR9zUKE2ijRzTbvWBAoC5b_DQTkh-O-31k6bzouyCmaM8BAq52t3bXaORt1pdkHNu6q6Ene7gY1c1Hgpzlw8HZzGxxvJi4=w141-h118-n-k-no-nu",
    alt: "Blue Bottle Coffee shop interior",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq1SjGwD65SLB5tNvyhPp7QxQYfublTjCdQPRyOqPWsWdnWihE0-rFGnAWosAKGuUsl8jix_sD48AvhX_V4IBmgOSjXM8C1TkerCS993nhkJgS7bGguf44NafkRBHjN5ZH4fqyv=w141-h235-n-k-no-nu",
    alt: "Barista making coffee",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqHoua9WHEXegcX5GV2V_SwkPWM_X9oPEqqGDwhAvj6Gvi0WYBf72wnRi0rXyY5tnMMrzCWbLYD1DCcSbqHvrqAYxI7vF08L9yNoJF6zLL8Uu1O7gzB4OOWFWXl-t3B-MZ22MoD=w141-h141-n-k-no-nu",
    alt: "Coffee and pastries",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#14213d] text-white">
      <Header businessName={businessData.name} />

      {/* Hero Section styled as a white card, centered, with no overlay */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_640,q_auto/2025/05%20May/May%20Wk%204/HP_MAYWK4_M1C_Mobile.jpg"
            alt="Blue Bottle Coffee interior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-8 animate-fade-in max-w-2xl">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-[#fbbf24] via-yellow-300 to-yellow-200 bg-clip-text text-transparent animate-gradient">
                  Welcome to {businessData.name}
                </span>
              </h2>
              <p className="text-xl font-medium tracking-wide text-[#e5e7eb] border-l-4 border-[#fbbf24] pl-4 py-2">
                {businessData.category}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#fbbf24] animate-bounce" />
                  <span className="text-[#e5e7eb]">{businessData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#fbbf24] animate-pulse" />
                  <span className="text-[#e5e7eb]">{businessData.closing_time}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${businessData.call_url}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#fbbf24] text-[#14213d] rounded-lg hover:bg-[#ffe066] transition-all hover:scale-105 hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={businessData.directions_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#22315a] text-[#e5e7eb] rounded-lg hover:bg-[#14213d] transition-all hover:scale-105 hover:shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={businessData.order_urls[1]}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#fbbf24] text-[#14213d] rounded-lg hover:bg-[#ffe066] transition-all hover:scale-105 hover:shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#22315a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#fbbf24]">
            Our Gallery
          </h2>
          <GallerySlider images={galleryImages} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center bg-[#14213d]">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#fbbf24]">About Blue Bottle Coffee</h2>
          <p className="text-[#e5e7eb] max-w-2xl mx-auto text-lg">
            At Blue Bottle Coffee, we are passionate about crafting the perfect cup. Our journey began with a simple mission: to serve delicious, freshly roasted coffee made from the world best beans. We believe in quality, sustainability, and creating a welcoming space for coffee lovers to gather, connect, and enjoy.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#22315a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#fbbf24]">
              Our Menu
            </h2>
            <p className="text-[#e5e7eb] max-w-2xl mx-auto">
              Explore our selection of expertly crafted coffee drinks, specialty beverages, and sweet treats. All items are made with the highest quality ingredients and care.
            </p>
          </div>
          {['Espresso', 'Drip Coffee', 'Iced Coffee', 'Specialties'].map((cat) => {
            const items = services.filter(s => s.category === cat);
            return (
              <div key={cat} className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-[#fbbf24]">{cat}</h3>
                <MenuSlider items={items} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#14213d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#fbbf24]">
              Customer Reviews
            </h2>
            <p className="text-[#e5e7eb] max-w-2xl mx-auto">
              See what our clients have to say about their experience at Blue Bottle Coffee
            </p>
          </div>
          <ReviewsSlider />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#22315a] border-t border-[#14213d]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#fbbf24]">Contact Us</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2 text-[#e5e7eb]">
                  <Phone className="w-4 h-4 text-[#fbbf24]" />
                  <a href={`tel:${businessData.phone}`} className="hover:text-[#fbbf24] transition-colors">
                    {businessData.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-[#e5e7eb]">
                  <MapPin className="w-4 h-4 text-[#fbbf24]" />
                  <a 
                    href={businessData.directions_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fbbf24] transition-colors"
                  >
                    {businessData.address}
                  </a>
                </p>
                <p className="text-[#cbd5e1] text-sm">
                  Located in Midtown Manhattan, just steps from Rockefeller Center and major attractions.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#fbbf24]">Hours</h3>
              <div className="space-y-2">
                <p className="text-[#e5e7eb]">
                  <span className="font-medium">Monday - Sunday:</span> 7:00 AM - 6:00 PM
                </p>
                <p className="text-[#cbd5e1] text-sm mt-4">
                  Holiday hours may vary. Please check online for updates.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#fbbf24]">Follow Us</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-[#e5e7eb] hover:text-[#fbbf24] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="text-[#e5e7eb] hover:text-[#fbbf24] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-[#cbd5e1] text-sm">
                  Follow us on social media for special offers, student work showcases, and barbering tips.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#fbbf24]">Book Now</h3>
              <div className="space-y-4">
                <a
                  href={businessData.order_urls[0]}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#fbbf24] text-[#14213d] rounded-lg hover:bg-[#ffe066] transition-all hover:scale-105 hover:shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Order Online
                </a>
                <p className="text-[#cbd5e1] text-sm">
                  Order your favorite coffee and pastries for pickup or delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 rounded-xl overflow-hidden border border-[#14213d]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.601234567890!2d-73.974187684593!3d40.7590119793266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fda1b1b1b1%3A0x1a2b3c4d5e6f7g8h!2sBlue%20Bottle%20Coffee!5e0!3m2!1sen!2sus!4v1716840000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px]"
            ></iframe>
          </div>

          <div className="mt-12 pt-8 border-t border-[#14213d] text-center text-[#cbd5e1]">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.
            </p>
            <p className="text-sm">
              Upscale coffee drinks, pastries, and beans in New York City.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

