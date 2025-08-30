import React from 'react';
import { Users, Target, Award, Building, Heart, Globe } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import researchImage2 from '../assets/images/research_2.jpg';
import labImage2 from '../assets/images/lab_2.jpg';
import labImage3 from '../assets/images/lab_3.jpg';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Quality First",
      description: "We prioritize quality in every aspect of our operations, from research to delivery."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Focus",
      description: "Our customers are at the center of everything we do, driving our innovation and service excellence."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in pharmaceutical manufacturing and research & development."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "Serving customers worldwide with reliable pharmaceutical solutions and timely delivery."
    }
  ];

  // const milestones = [
  //   {
  //     year: "2009",
  //     title: "Company Founded",
  //     description: "DeepPharma was established with a vision to provide quality pharmaceutical solutions."
  //   },
  //   {
  //     year: "2010",
  //     title: "Expansion",
  //     description: "Expanded operations globally, serving customers across Asia , Europe and America."
  //   },
  //   {
  //     year: "2020",
  //     title: "ISO Certification",
  //     description: "Obtained ISO quality management certification for enhanced operational excellence."
  //   },
  //   {
  //     year: "2024",
  //     title: "Digital Transformation",
  //     description: "Launched digital initiatives to enhance customer experience and operational efficiency."
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Deep Pharma
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For around two decades, Deep Pharma has been at the forefront of pharmaceutical 
                innovation, delivering high-quality Active Pharmaceutical Ingredients (APIs), 
                intermediates, and excipients to customers worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence, quality, and customer satisfaction has made us 
                a trusted partner in the global pharmaceutical industry.
              </p>
            </div>
            <div className="relative">
              <img
                src={researchImage2}
                alt="Pharmaceutical Research"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide high-quality pharmaceutical products and services that improve 
                  global healthcare outcomes while maintaining the highest standards of 
                  safety, efficacy, and regulatory compliance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be a leading global pharmaceutical company recognized for innovation, 
                  quality excellence, and sustainable growth while contributing to better 
                  health outcomes worldwide.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-600">
                  We are committed to advancing healthcare through continuous innovation, 
                  maintaining the highest quality standards, and building lasting 
                  partnerships with our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global recognition, our journey reflects 
              our unwavering commitment to pharmaceutical excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Founded on Excellence
              </h3>
              <p className="text-gray-600 mb-4">
                Deep Pharma was founded in 2009 with a clear vision: to provide the pharmaceutical 
                industry with reliable, high-quality products that meet the most stringent 
                international standards. Our founders, with decades of combined experience in 
                pharmaceutical manufacturing and research, established the company on principles 
                of quality, integrity, and customer focus.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have grown from a small pharmaceutical supplier to a 
                recognized company serving customers across multiple continents. Our success is 
                built on our commitment to continuous improvement, innovation, and maintaining 
                the highest quality standards in everything we do.
              </p>
              {/* <p className="text-gray-600">
                Today, Deep Pharma operates state-of-the-art manufacturing facilities and 
                research centers, employing cutting-edge technology and best practices to 
                deliver pharmaceutical solutions that make a difference in global healthcare.
              </p> */}
            </div>
            <div className="relative">
              <img
                src={labImage2}
                alt="Pharmaceutical Laboratory"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones that have shaped our growth and success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our decisions and actions every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={labImage3}
                alt="Quality Control Laboratory"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quality
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Quality is at the heart of everything we do. Our comprehensive quality 
                management system ensures that every product meets the highest standards 
                of safety, efficacy, and regulatory compliance.
              </p>
              
               {/* <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">GMP Certification</h4>
                    <p className="text-gray-600">Good Manufacturing Practice compliance ensuring consistent quality</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">ISO 9001:2015</h4>
                    <p className="text-gray-600">International quality management system certification</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
                    <p className="text-gray-600">Adherence to global pharmaceutical regulations and standards</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Continuous Monitoring</h4>
                    <p className="text-gray-600">Regular audits and quality assessments to maintain excellence</p>
                  </div> 
                </div>
              </div>*/}
            </div> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

