import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import researchImage1 from '../assets/images/research_1.jpg';
import researchImage2 from '../assets/images/research_2.jpg';
import labImage1 from '../assets/images/lab_1.png';

const Home = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description: "Stringent quality control processes ensuring pharmaceutical excellence and safety standards."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Delivery",
      description: "Reliable supply chain management with on-time delivery to meet your business needs."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Focus",
      description: "Dedicated customer support and tailored solutions for pharmaceutical requirements."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Industry Excellence",
      description: "Years of expertise in pharmaceutical dealings."
    }
  ];

  const productCategories = [
    {
      title: "Active Pharmaceutical Ingredients",
      description: "High-quality APIs for pharmaceutical formulations",
      image: researchImage2
    },
    {
      title: "Pharmaceutical Intermediates",
      description: "Essential intermediates for drug manufacturing",
      image: labImage1
    },
    {
      title: "Pharmaceutical  Excipients",
      description: "Premium excipients that enhance drug formulation, stability, and ensuring safe and effective pharmaceutical products.",
      image: researchImage1
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Innovating Health,
                <span className="text-primary block">Delivering Quality</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Deep Pharma is your trusted partner in pharmaceutical excellence, 
                providing high-quality APIs, Intermediates, and Excipients 
                for the global healthcare industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/DeepPharma/products">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/DeepPharma/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={researchImage1}
                alt="Pharmaceutical Research"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Deep Pharma
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With decades of experience in pharmaceutical manufacturing dealings, 
              Deep Pharma stands as a beacon of quality and innovation in the healthcare industry. 
              Our commitment to excellence drives us to deliver superior pharmaceutical solutions 
              that meet the highest international standards.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/DeepPharma/about">Read Our Full Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Deep Pharma?
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence sets us apart in the pharmaceutical industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive pharmaceutical solutions for diverse healthcare needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/DeepPharma/products">View Products</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our team to discuss your pharmaceutical requirements 
            and discover how we can support your business growth.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/DeepPharma/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

