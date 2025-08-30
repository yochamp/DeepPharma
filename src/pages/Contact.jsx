import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link
    const mailto = `mailto:deeppharma1@rediffmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    // Optionally clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Office Address",
      details: [
        "Deep Pharma ",
        "304/305, Alka Appartment, Akruli Cross Road 3, Kandivali East",
        "Mumbai, Maharashtra 400001",
        "India"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Numbers",
      details: [
        "Main Office: +91 9820767275",
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Addresses",
      details: [
        "General: deeppharma1@rediffmail.com",
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 10:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 3:00 PM",
        "Sunday: Closed",
        "Emergency: 24/7 Support Available"
      ]
    }
  ];

  // const departments = [
  //   {
  //     title: "Sales & Marketing",
  //     email: "sales@pharmacorp.com",
  //     description: "Product inquiries, quotations, and partnership opportunities"
  //   },
  //   {
  //     title: "Technical Support",
  //     email: "support@pharmacorp.com",
  //     description: "Product specifications, technical documentation, and quality queries"
  //   },
  //   {
  //     title: "Quality Assurance",
  //     email: "quality@pharmacorp.com",
  //     description: "Quality certificates, compliance documentation, and regulatory queries"
  //   },
  //   {
  //     title: "Customer Service",
  //     email: "service@pharmacorp.com",
  //     description: "Order status, delivery tracking, and general customer support"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for inquiries, partnerships, or support. 
              We're here to help you with all your pharmaceutical needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => {
                      // Phone link
                      if (info.title.toLowerCase().includes('phone') && /\+?\d/.test(detail)) {
                        const phone = detail.replace(/[^+\d]/g, '');
                        return (
                          <a key={idx} href={`tel:${phone}`} className="text-primary hover:underline text-sm block">
                            {detail}
                          </a>
                        );
                      }
                      // Email link
                      if (info.title.toLowerCase().includes('email') && /@/.test(detail)) {
                        const email = detail.match(/([\w.-]+@[\w.-]+)/);
                        return (
                          <a key={idx} href={`mailto:${email ? email[1] : detail}`} className="text-primary hover:underline text-sm block">
                            {detail}
                          </a>
                        );
                      }
                      // Address link (optional: Google Maps)
                      return (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Office
              </h2>
              <p className="text-gray-600 mb-8">
                Our headquarters is located in Mumbai, 
                easily accessible by public transportation and major highways.
              </p>
              
              {/* Interactive Google Map */}
              <div className="rounded-lg h-64 overflow-hidden mb-8">
                <iframe
                  title="Deep Pharma Location"
                  src="https://www.google.com/maps?q=Alka+Appartment,+Akruli+Cross+Road+3,+Kandivali+East,+Mumbai,+Maharashtra+400001,+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <a href="tel:+919820767275" className="text-primary hover:underline text-gray-700">+91 9820767275</a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <a href="mailto:deeppharma1@rediffmail.com" className="text-primary hover:underline text-gray-700">deeppharma1@rediffmail.com</a>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Alka+Appartment,+Akruli+Cross+Road+3,+Kandivali+East,+Mumbai,+Maharashtra+400001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-gray-700"
                        >
                          304/305, Alka Appartment, Akruli Cross Road 3, Kandivali East
                        </a>
                        <p className="text-gray-700">Mumbai, Maharashtra 400001</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600">
              Reach out to the right department for faster assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {dept.description}
                  </p>
                  <div className="flex items-center text-primary">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${dept.email}`} className="hover:underline">
                      {dept.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;

