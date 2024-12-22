import React, { useState } from 'react';
import './Category.css';

function Categories() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [categories] = useState([
    {
      id: 1,
      name: 'Laptops',
      description: 'Portable computers for work and entertainment',
      parentCategory: 'Computers',
      productsCount: 150
    },
    {
      id: 2,
      name: 'Desktop PCs',
      description: 'Pre-built desktop computers',
      parentCategory: 'Computers',
      productsCount: 85
    },
    {
      id: 3,
      name: 'Gaming Laptops',
      description: 'High-performance laptops for gaming',
      parentCategory: 'Laptops',
      productsCount: 45
    },
    {
      id: 4,
      name: 'Business Laptops',
      description: 'Professional laptops for office use',
      parentCategory: 'Laptops',
      productsCount: 65
    },
    {
      id: 5,
      name: 'Monitors',
      description: 'Display screens for computers',
      parentCategory: 'Peripherals',
      productsCount: 90
    },
    {
      id: 6,
      name: 'PC Components',
      description: 'Hardware parts for custom builds',
      parentCategory: 'Hardware',
      productsCount: 200
    },
    {
      id: 7,
      name: 'Gaming Accessories',
      description: 'Gaming mice, keyboards, and headsets',
      parentCategory: 'Accessories',
      productsCount: 120
    },
    {
      id: 8,
      name: 'Networking',
      description: 'Routers, switches, and networking equipment',
      parentCategory: 'Hardware',
      productsCount: 45
    },
    {
      id: 9,
      name: 'Storage Devices',
      description: 'Hard drives, SSDs, and external storage',
      parentCategory: 'Hardware',
      productsCount: 75
    },
    {
      id: 10,
      name: 'Software',
      description: 'Operating systems and applications',
      parentCategory: 'None',
      productsCount: 50
    }
  ]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="categories-container">
      <div className="categories-header">
        <h2>PC Categories Management</h2>
        <button className="add-category-btn">Add New Category</button>
      </div>

      <div className="categories-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Description</th>
              <th>Parent Category</th>
              <th>Products Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCategories.map(category => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>{category.parentCategory}</td>
                <td>{category.productsCount}</td>
                <td className="actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-btn"
          >
            Previous
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="page-btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
