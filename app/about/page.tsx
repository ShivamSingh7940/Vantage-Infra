import Image from "next/image"
import { Award, Users, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            {/* Logo centered */}
            <div className="mx-auto w-48 h-48 relative">
              <Image 
                src="https://res.cloudinary.com/dtttjumdo/image/upload/v1741170130/WhatsApp_Image_2025-03-05_at_3.51.36_PM_jvbmi3.jpg" // Replace with your logo URL
                alt="Vantage Infra Projects Logo" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Vantage Infra Projects</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We are a premier real estate company dedicated to helping clients find their dream properties
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            To provide exceptional real estate services that exceed our clients' expectations, helping them find
            properties that enhance their lifestyle and secure their future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">About Founder</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of experienced professionals is dedicated to providing exceptional service.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 w-full md:w-3/4 lg:w-2/3"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
                    <Image 
                      src={member.image || "/placeholder.svg"} 
                      alt={member.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-xl text-gray-600 mb-4">{member.position}</p>
                <p className="text-muted-foreground text-lg">"Master of Science in Information Systems <br/>MBA in Strategic Management"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Legal Information</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Vantage Infra Projects  is a licensed real estate brokerage firm operating under all applicable laws and
            regulations.
          </p>
          <p className="text-muted-foreground"></p>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    icon: <Award size={32} />,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, ensuring the highest standards for our clients.",
  },
  {
    icon: <Users size={32} />,
    title: "Client-Focused",
    description: "Our clients' needs and goals are at the center of everything we do.",
  },
  {
    icon: <Clock size={32} />,
    title: "Efficiency",
    description: "We value your time and work efficiently to help you achieve your real estate goals.",
  },
  {
    icon: <Shield size={32} />,
    title: "Integrity",
    description: "We operate with honesty and transparency in all our dealings.",
  },
]

const team = [
  {
    name: "Krishna Chaitanya Reddy Ellenki",
    position: "CEO & Founder",
    bio: "",
    image: "https://res.cloudinary.com/djy15bn9n/image/upload/v1740912315/WhatsApp_Image_2025-03-02_at_3.57.03_PM_dyoobg.jpg",
  },
]

const stats = [
  {
    value: "15+",
    label: "Years of Experience",
  },
  {
    value: "500+",
    label: "Properties Sold",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "25+",
    label: "Industry Awards",
  },
]
