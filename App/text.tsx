"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Slider } from "@/components/ui/slider";
import {
  Search,
  MapPin,
  Bed,
  Bath,
  Square,
  Phone,
  Mail,
  Calendar,
  Star,
  Filter,
} from "lucide-react";

// Sample property data
const properties = [
  {
    id: 1,
    type: "house",
    title: "Luxury Modern Villa",
    location: "Beverly Hills, CA",
    price: 2500000,
    bedrooms: 5,
    bathrooms: 4,
    size: 4500,
    image: "/luxury-modern-villa-exterior.png",
    featured: true,
    description:
      "Stunning contemporary villa with panoramic city views, premium finishes, and resort-style amenities.",
  },
  {
    id: 2,
    type: "land",
    title: "Prime Development Land",
    location: "Malibu, CA",
    price: 1800000,
    size: 2.5,
    image: "/placeholder-8j03s.png",
    featured: false,
    description:
      "Exceptional 2.5-acre parcel with ocean views and development potential in prestigious Malibu.",
  },
  {
    id: 3,
    type: "house",
    title: "Contemporary Estate",
    location: "Manhattan Beach, CA",
    price: 3200000,
    bedrooms: 6,
    bathrooms: 5,
    size: 5200,
    image: "/contemporary-beachfront-estate.png",
    featured: true,
    description:
      "Architectural masterpiece steps from the beach with custom design and luxury amenities.",
  },
  {
    id: 4,
    type: "land",
    title: "Hillside Building Lot",
    location: "Hollywood Hills, CA",
    price: 950000,
    size: 1.2,
    image: "/placeholder-mj4tu.png",
    featured: false,
    description:
      "Premium hillside lot with city views and approved building plans for modern residence.",
  },
  {
    id: 5,
    type: "house",
    title: "Mediterranean Mansion",
    location: "Bel Air, CA",
    price: 4500000,
    bedrooms: 7,
    bathrooms: 6,
    size: 6800,
    image: "/mediterranean-mansion-luxury-estate.png",
    featured: false,
    description:
      "Elegant Mediterranean estate with formal gardens, wine cellar, and entertainment pavilion.",
  },
  {
    id: 6,
    type: "land",
    title: "Waterfront Acreage",
    location: "Newport Beach, CA",
    price: 2200000,
    size: 3.8,
    image: "/newport-beach-waterfront-acreage.png",
    featured: true,
    description:
      "Rare waterfront acreage with private dock and panoramic harbor views.",
  },
];

export default function JenEstate() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [sortBy, setSortBy] = useState("newest");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      locationFilter === "all" || property.location.includes(locationFilter);
    const matchesType = typeFilter === "all" || property.type === typeFilter;
    const matchesPrice =
      property.price >= priceRange[0] && property.price <= priceRange[1];

    return matchesSearch && matchesLocation && matchesType && matchesPrice;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-primary">
                JEN Estate
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-foreground hover:text-accent transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="#land"
                className="text-foreground hover:text-accent transition-colors"
              >
                Land
              </a>
              <a
                href="#houses"
                className="text-foreground hover:text-accent transition-colors"
              >
                Houses
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Visit
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-modern-home.png"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Find Your Perfect Land or Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover exceptional properties with JEN Estate - where luxury meets
            opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4"
            >
              Explore Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Beverly Hills">Beverly Hills</SelectItem>
                  <SelectItem value="Malibu">Malibu</SelectItem>
                  <SelectItem value="Manhattan Beach">
                    Manhattan Beach
                  </SelectItem>
                  <SelectItem value="Hollywood Hills">
                    Hollywood Hills
                  </SelectItem>
                  <SelectItem value="Bel Air">Bel Air</SelectItem>
                  <SelectItem value="Newport Beach">Newport Beach</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="house">Houses</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-transparent"
              >
                <Filter className="w-4 h-4" />
                More Filters
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Price Range: {formatPrice(priceRange[0])} -{" "}
                  {formatPrice(priceRange[1])}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={5000000}
                  min={0}
                  step={50000}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties, each
              offering unique opportunities for luxury living and investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                  {property.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4 capitalize"
                  >
                    {property.type}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-serif group-hover:text-accent transition-colors">
                        {property.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">
                        {formatPrice(property.price)}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    {property.type === "house" ? (
                      <>
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          {property.bedrooms} beds
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          {property.bathrooms} baths
                        </div>
                        <div className="flex items-center">
                          <Square className="w-4 h-4 mr-1" />
                          {property.size.toLocaleString()} sq ft
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        {property.size} acres
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full"
                        onClick={() => setSelectedProperty(property)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif">
                          {property.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <AspectRatio ratio={4 / 3}>
                            <img
                              src={property.image || "/placeholder.svg"}
                              alt={property.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </AspectRatio>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="text-3xl font-bold text-accent mb-2">
                              {formatPrice(property.price)}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{property.location}</span>
                            </div>
                          </div>

                          {property.type === "house" && (
                            <div className="grid grid-cols-3 gap-4 py-4 border-y">
                              <div className="text-center">
                                <Bed className="w-6 h-6 mx-auto mb-1 text-accent" />
                                <div className="font-semibold">
                                  {property.bedrooms}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Bedrooms
                                </div>
                              </div>
                              <div className="text-center">
                                <Bath className="w-6 h-6 mx-auto mb-1 text-accent" />
                                <div className="font-semibold">
                                  {property.bathrooms}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Bathrooms
                                </div>
                              </div>
                              <div className="text-center">
                                <Square className="w-6 h-6 mx-auto mb-1 text-accent" />
                                <div className="font-semibold">
                                  {property.size.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Sq Ft
                                </div>
                              </div>
                            </div>
                          )}

                          {property.type === "land" && (
                            <div className="py-4 border-y">
                              <div className="text-center">
                                <Square className="w-6 h-6 mx-auto mb-1 text-accent" />
                                <div className="font-semibold">
                                  {property.size} acres
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Total Area
                                </div>
                              </div>
                            </div>
                          )}

                          <p className="text-muted-foreground">
                            {property.description}
                          </p>

                          <div className="space-y-2">
                            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule a Visit
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full bg-transparent"
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              Contact Agent
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                About JEN Estate
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over two decades of experience in luxury real estate, JEN
                Estate has established itself as the premier destination for
                discerning buyers seeking exceptional properties.
              </p>
              <p className="text-muted-foreground mb-8">
                Our commitment to excellence, personalized service, and deep
                market knowledge ensures that every client finds their perfect
                property match. Whether you're seeking a luxury home or prime
                development land, we provide unparalleled expertise and
                dedication.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Properties Sold
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
            <div>
              <AspectRatio ratio={4 / 3}>
                <img
                  src="/luxury-real-estate-office.png"
                  alt="JEN Estate Office"
                  className="w-full h-full object-cover rounded-lg"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to find your dream property? Contact our expert team today
              for personalized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-6">
                  Send us a message
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="I'm interested in..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buying">Buying a Property</SelectItem>
                      <SelectItem value="selling">
                        Selling a Property
                      </SelectItem>
                      <SelectItem value="investing">
                        Investment Opportunities
                      </SelectItem>
                      <SelectItem value="consultation">
                        Free Consultation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <textarea
                    className="w-full min-h-[120px] px-3 py-2 border border-input rounded-md bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Tell us about your property needs..."
                  />
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-accent mr-3" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">
                        (555) 123-4567
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-accent mr-3" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">
                        info@jenestate.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-accent mr-3" />
                    <div>
                      <div className="font-medium">Office</div>
                      <div className="text-muted-foreground">
                        123 Luxury Lane, Beverly Hills, CA 90210
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Office Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm">Interactive Map</div>
                  <div className="text-xs">
                    Google Maps integration would go here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">JEN Estate</h3>
              <p className="text-primary-foreground/80 mb-4">
                Your trusted partner in luxury real estate, connecting dreams
                with exceptional properties.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:text-accent"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:text-accent"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447c0-1.297.49-2.448 1.297-3.323.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323c0 1.297-.49 2.448-1.297 3.323-.875.807-2.026 1.297-3.323 1.297z" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:text-accent"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Properties</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Luxury Homes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Development Land
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Commercial Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Investment Opportunities
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Property Valuation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Market Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Investment Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Property Management
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>(555) 123-4567</li>
                <li>info@jenestate.com</li>
                <li>
                  123 Luxury Lane
                  <br />
                  Beverly Hills, CA 90210
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>
              &copy; 2024 JEN Estate. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
