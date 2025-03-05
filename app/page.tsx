import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, MapPin, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-image w-full h-[80vh] flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6"> Vantage Infra Projects
            <br/>
          </h1>
         <h2>The Story of Scenic Properties</h2>   
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {/* Luxury properties in the most sought-after locations */}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              View Properties
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties that define luxury living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg overflow-hidden shadow-md property-card transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.status}
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <div className="flex items-center mb-4 text-muted-foreground">
                    <MapPin size={18} className="mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{property.description}</p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-xl font-bold text-primary">{property.price}</span> */}
                    <Link
                      href={`/projects/${property.id}`}
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      {/* View Details <ArrowRight size={16} className="ml-1" /> */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              View All Properties <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional service and expertise to help you find your perfect home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with Prestige Properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our team of experts today and let us help you find the perfect property
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-md font-medium transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

const featuredProperties = [
  {
    id: 1,
    title: "Boutique Resort with Farm House",
    location: "Manneguda, Chevella",
    description: "35 acres of DTCP approved layout with lots of greenery and more than 5000 Sandal wood trees.Property in between 200 feet NH-163 Highway and upcoming RRR exit.",
    // price: "$4,500,000",
    // status: "For Sale",
    image: "https://res.cloudinary.com/djy15bn9n/image/upload/v1740912315/WhatsApp_Image_2025-03-02_at_3.57.04_PM_yqdpd6.jpg",
  },
  {
    id: 2,
    title: "Residential Building",
    location: "Siddipet, Telangana",
    description: "A 5 floor residential building with 50 units in a very prominent location of siddipet with club house amenities with cellar parking",
    // price: "$3,200,000",
    // status: "For Sale",
    image: "https://res.cloudinary.com/djy15bn9n/image/upload/v1740912323/WhatsApp_Image_2025-03-02_at_3.57.02_PM_telnyj.jpg",
  },
  {
    id: 3,
    title: "Commercial Building",
    location: "Siddipet, Telangana",
    description: "A 3 Storied commercial building with mezzanine floor of 15 feet.With ample car and bike parking space.",
    // price: "$7,800,000",
    // status: "For Sale",
    image: "https://res.cloudinary.com/djy15bn9n/image/upload/v1740912315/WhatsApp_Image_2025-03-02_at_3.57.02_PM_1_uhctce.jpg",
  },
]

const features = [
  {
    icon: <Home size={32} />,
    title: "Exclusive Properties",
    description: "Access to the most exclusive properties in prime locations that aren't available elsewhere.",
  },
  {
    icon: <Star size={32} />,
    title: "Expert Guidance",
    description: "Our team of experienced agents provide personalized guidance throughout your journey.",
  },
  {
    icon: <MapPin size={32} />,
    title: "Prime Locations",
    description: "We specialize in properties located in the most desirable and prestigious neighborhoods.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York",
    text: "Working with Prestige Properties was an absolute pleasure. They found us our dream home in record time!",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    location: "Los Angeles",
    text: "The team's knowledge of the luxury market is unmatched. They made the entire process smooth and stress-free.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emma Williams",
    location: "Miami",
    text: "I've worked with many real estate companies, but none compare to the level of service I received from Prestige Properties.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

