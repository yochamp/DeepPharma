import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { products, categories } from '../data/products';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarSelectedProduct, setSidebarSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const filteredProducts = sidebarOpen && sidebarSelectedProduct
    ? products.filter(product => product.name === sidebarSelectedProduct)
    : products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Product Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality pharmaceutical products, 
              including Active Pharmaceutical Ingredients (APIs), intermediates, and excipients. 
              All products meet international quality standards and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid with Sidebar */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Move toggle button below search/filter, left aligned */}
          <div className="mb-6 flex items-center">
            <button
              className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded shadow hover:bg-primary/20 transition"
              onClick={() => {
                setSidebarOpen(open => !open);
                setSidebarSelectedProduct(null);
              }}
            >
              {sidebarOpen ? 'Hide Product List' : 'Show Product List'}
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar: Product List */}
            {sidebarOpen && (
              <div className="md:w-1/4 w-full mb-8 md:mb-0 flex flex-col items-start">
                <div className="bg-white rounded-lg shadow p-4 w-full sticky top-24 max-h-[80vh] overflow-y-auto mt-0">
                  <h3 className="text-lg font-semibold mb-4">Product List</h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        className={`text-left w-full px-2 py-1 rounded hover:bg-primary/10 text-gray-700 hover:text-primary transition${sidebarSelectedProduct === null ? ' font-bold text-primary' : ''}`}
                        onClick={() => setSidebarSelectedProduct(null)}
                      >
                        All
                      </button>
                    </li>
                    {products.map((product) => (
                      <li key={product.id}>
                        <button
                          className={`text-left w-full px-2 py-1 rounded hover:bg-primary/10 text-gray-700 hover:text-primary transition${sidebarSelectedProduct === product.name ? ' font-bold text-primary' : ''}`}
                          onClick={() => setSidebarSelectedProduct(product.name)}
                        >
                          {product.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {/* Products Grid */}
            <div className={sidebarOpen ? "md:w-3/4 w-full" : "w-full"}>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No products found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{product.name}</CardTitle>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium">
                            {product.category}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600">
                            {product.applications.map((app, index) => (
                              <li key={index}>{app}</li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full" onClick={() => navigate('/DeepPharma/contact')}>
                          Enquire Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Arrow Up Button at bottom of products grid */}
          <div className="flex justify-center mt-12">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full shadow hover:bg-primary/20 transition"
              onClick={() => {
                const section = document.querySelector('#products-section-top');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              aria-label="Scroll to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              Top
            </button>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              All our products undergo rigorous quality control processes and meet international 
              standards including GMP, ISO, and various pharmacopeial requirements. We are 
              committed to delivering pharmaceutical excellence through stringent quality measures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">GMP</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">GMP Certified</h3>
                <p className="text-gray-600">Good Manufacturing Practice compliance</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">ISO</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">ISO Standards</h3>
                <p className="text-gray-600">International quality management systems</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">QC</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Control</h3>
                <p className="text-gray-600">Rigorous testing and validation processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

