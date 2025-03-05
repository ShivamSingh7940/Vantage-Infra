import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Square, ArrowRight } from "lucide-react";

const properties = [
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
  

// const currentProjects = [
//   {
//     id: 1,
//     image: "/project1.jpg",
//     title: "Skyline Residences",
//     location: "Los Angeles, CA",
//     type: "Luxury Apartments",
//     description: "A high-rise project with premium apartments and modern amenities.",
//     price: "$1M+",
//   },
// ];

// const completedProjects = [
//   {
//     id: 1,
//     image: "/completed1.jpg",
//     title: "Ocean View Villas",
//     location: "San Diego, CA",
//     completionDate: "2023",
//   },
// ];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Properties</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover our exclusive collection of luxury properties in prime locations
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

    {/* Vertical Layout for Featured Projects */}
    <div className="flex flex-col gap-8 items-center">
      {properties.map((property) => (
        <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md w-full md:w-3/4 lg:w-2/3">
          
          {/* Full Image Display */}
          <div className="w-full">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              width={800}  // Set width to display full image
              height={500} // Set height proportionally
              className="w-full h-auto object-contain" // Ensures full image visibility
            />
          </div>

          {/* Property Details */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{property.title}</h3>
            <div className="flex items-center mb-4 text-muted-foreground">
              <MapPin size={18} className="mr-1" />
              <span>{property.location}</span>
            </div>
            <p className="text-muted-foreground mb-4">{property.description}</p>

            <div className="flex justify-between items-center">
              {property.price && <span className="text-xl font-bold text-primary">{property.price}</span>}
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
  </div>
</section>


   
{/* Download Brochure Section */}
{/* Download Brochure Section */}
<section className="py-20 mb-20">
  <div className="container mx-auto px-4 flex justify-center">
    <div className="bg-gradient-to-r from-primary to-blue-600 p-10 rounded-2xl shadow-lg max-w-lg text-center">
      <h2 className="text-4xl font-bold text-white mb-4">📄 Download Our Brochure</h2>
      <p className="text-white opacity-90 mb-6 text-lg">
        Get detailed information about our properties and services by downloading our brochure.
      </p>
      <a
        href="Urban Sanctuary Brochure 2025_.pdf" // Update with actual file path
        download="Vantage_Infra_Projects_Brochure.pdf"
        className="bg-white text-primary font-semibold py-3 px-6 rounded-lg text-lg 
                   hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out"
      >
        Download Brochure 📥
      </a>
    </div>
  </div>
</section>




     
    </div>
  );
  
}
