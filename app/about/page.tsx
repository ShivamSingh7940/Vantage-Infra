import Image from "next/image"
import { Award, Users, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Vantage Infra Projects</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We are a premier real estate company dedicated to helping clients find their dream properties
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
              "Vision": "At VANTAGE INFRA PROJECTS, our vision is to be the most trusted and preferred real estate agency, providing exceptional services and empowering individuals and communities to achieve their dreams of homeownership and real estate investment.",
              </p>
              <p className="text-muted-foreground mb-6">
              "Mission": "Our mission at VANTAGE INFRA PROJECTS is to deliver superior real estate solutions through a customer-centric approach, innovative technology, and a team of highly skilled professionals. We are committed to helping our clients navigate the complexities of the real estate market, making informed decisions, and achieving their goals.",
              </p>
              <p className="text-muted-foreground">
              "Team": "Our diverse team at VANTAGE INFRA PROJECTS brings together expertise from various disciplines, allowing us to offer comprehensive solutions tailored to our clients' unique needs.",
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dtttjumdo/image/upload/v1741079698/vantage_jpg-01_armvqq.jpg"
                alt="Our office building"
                fill
                className="object-cover"
              />
            </div>
          </div>
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

      
{/* Our Team */}
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
  // {
  //   name: "Srinivasa Rao Pentum",
  //   position: "Chief Operating Officer",
  //   bio: "BE in Civil Engineering",
  //   image: "https://res.cloudinary.com/djy15bn9n/image/upload/v1740912315/WhatsApp_Image_2025-03-02_at_3.57.02_PM_2_a3xmlc.jpg",
  // },
  // {
  //   name: "Marcus Johnson",
  //   position: "Senior Real Estate Agent",
  //   bio: "Marcus specializes in high-end residential properties and has a proven track record of successful transactions.",
  //   image: "/placeholder.svg?height=400&width=300",
  // },
  // {
  //   name: "Sophia Rodriguez",
  //   position: "Marketing Director",
  //   bio: "Sophia develops innovative marketing strategies to showcase our properties to the right audience.",
  //   image: "/placeholder.svg?height=400&width=300",
  // },
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

