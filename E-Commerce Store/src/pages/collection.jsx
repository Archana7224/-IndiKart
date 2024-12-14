import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { useNavigate } from 'react-router-dom';

const Collection = () => {
  const { products, search, showSearch, setSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortBy, setSortBy] = useState('relevant');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Effect to load initial products
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Effect to apply filters, search, and sorting
  useEffect(() => {
    applyFiltersAndSorting();
  }, [category, subCategory, sortBy, searchTerm]);

  // Handle category toggle
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Handle subcategory toggle
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Filter and sort products
  const applyFiltersAndSorting = () => {
    let updatedProducts = [...products];

    // Filter by category
    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        category.includes(product.category)
      );
    }

    // Filter by subcategory
    if (subCategory.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    // Filter by search term
    if (searchTerm.trim() !== '') {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    if (sortBy === 'low-high') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-low') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  };

  // Handle sorting option change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSearch(e.target.value); // Update the global context search value
  };

  // Navigate to product details
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60 grid grid-cols-1 gap-6">
        <div className="border border-gray-300 pl-5 py-3">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
          </p>
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Toggle Filters"
          />

          {/* Category Filter */}
          <div className={`mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Men"
                  onChange={toggleCategory}
                />{' '}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Women"
                  onChange={toggleCategory}
                />{' '}
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Kids"
                  onChange={toggleCategory}
                />{' '}
                Kids
              </p>
            </div>
          </div>

          {/* SubCategory Filter */}
          <div className={`mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Topwear"
                  onChange={toggleSubCategory}
                />{' '}
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Bottomwear"
                  onChange={toggleSubCategory}
                />{' '}
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Winterwear"
                  onChange={toggleSubCategory}
                />{' '}
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Title text1={'ALL '} text2={' COLLECTIONS'} />
          {/* Product Sort and Search */}
          <div className="flex gap-4">
            <input
              type="text"
              className="border border-gray-300 text-sm px-2 py-1"
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <select
              className="border-2 border-gray-300 text-sm px-2"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item) => (
            <ProductItem
              key={item.id}
              name={item.name}
              id={item.id}
              price={item.price}
              image={item.image}
              onClick={() => handleProductClick(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
