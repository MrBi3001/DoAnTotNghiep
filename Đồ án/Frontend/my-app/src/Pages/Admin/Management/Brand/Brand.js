import React, { useState } from 'react';
import './Brand.css';

function Brands() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [brands] = useState([
    {
      id: 1,
      name: 'Dell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/640px-Dell_Logo.png',
      description: 'Professional laptops and workstations',
      productsCount: 85
    },
    {
      id: 2,
      name: 'HP',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png',
      description: 'Premium computers and printing solutions',
      productsCount: 92
    },
    {
      id: 3,
      name: 'Lenovo',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png',
      description: 'ThinkPad and Legion gaming series',
      productsCount: 78
    },
    {
      id: 4,
      name: 'ASUS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png',
      description: 'Gaming and multimedia laptops',
      productsCount: 65
    },
    {
      id: 5,
      name: 'Acer',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/2560px-Acer_2011.svg.png',
      description: 'Affordable and gaming computers',
      productsCount: 70
    },
    {
      id: 6,
      name: 'MSI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/MSI_Logo.svg/2560px-MSI_Logo.svg.png',
      description: 'Gaming laptops and components',
      productsCount: 55
    },
    {
      id: 7,
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png',
      description: 'Premium MacBooks and iMacs',
      productsCount: 25
    },
    {
      id: 8,
      name: 'Razer',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png',
      description: 'High-end gaming laptops',
      productsCount: 30
    }
  ]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBrands = brands.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(brands.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="brands-container">
      <div className="brands-header">
        <h2>PC Brands Management</h2>
        <button className="add-brand-btn">Add New Brand</button>
      </div>

      <div className="brands-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand Name</th>
              <th>Logo</th>
              <th>Description</th>
              <th>Products Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentBrands.map(brand => (
              <tr key={brand.id}>
                <td>{brand.id}</td>
                <td>{brand.name}</td>
                <td><img src={brand.logo} alt={brand.name} className="brand-logo" /></td>
                <td>{brand.description}</td>
                <td>{brand.productsCount}</td>
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

export default Brands;
