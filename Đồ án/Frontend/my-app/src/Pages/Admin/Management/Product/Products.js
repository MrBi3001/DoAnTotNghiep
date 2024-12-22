import React, { useState, useEffect } from 'react';
import './Products.css';

import { getAllProducts, insertProduct, updateProduct } from '../../../../Service/ProductService';
import { getBrands } from '../../../../Service/BrandService';
import { getAllCatgegory } from '../../../../Service/CategoryService';

function Products() {
  const basePath = './images/';
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productImages, setProductImages] = useState([]);

  const [newProduct, setNewProduct] = useState({
    productName: '',
    categoryID: categories[0]?.categoryID || '',
    brandID: brands[0]?.brandID || '',
    price: 0,
    stockQuantity: 0,
    image: '',
    description: ''
  });

  useEffect(() => {
    const getProducts = async () => {
      let brandsResponse = await getBrandsFromApi();
      if (brandsResponse && brandsResponse.data) {
        setBrands(brandsResponse.data);
      }

      let productsResponse = await getProductsFromApi();
      if (productsResponse && productsResponse.data) {
        setProducts(productsResponse.data);
      }
    }
    getCategoriesFromApi();
    getProducts();

  }, []);

  const getCategoriesFromApi = async () => {
    let response = await getAllCatgegory();
    if (response && response.data) {
      setCategories(response.data);
      setNewProduct((prev) => ({ ...prev, categoryID: response.data.length > 0 ? response.data[0].categoryID : '' }));
    }
  };

  const getBrandsFromApi = async () => {
    let response = await getBrands();
    if (response && response.data) {
      setBrands(response.data);
      setNewProduct((prev) => ({ ...prev, brandID: response.data.length > 0 ? response.data[0].brandID : '' }));
    }
  };


  const getProductsFromApi = async () => {
    let response = await getAllProducts();
    if (response && response.data) {
      console.log(response.data);
      setProducts(response.data);
    }
  };

  const handleImageUpload = (e, isEditing = false) => {
    const files = Array.from(e.target.files);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isEditing) {
          setEditingProduct(prev => ({
            ...prev,
            images: [...(prev.images || []), reader.result]
          }));
        } else {
          setProductImages(prev => [...prev, reader.result]);
          setNewProduct(prev => ({
            ...prev,
            images: [...(prev.images || []), reader.result]
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index, isEditing = false) => {
    if (isEditing) {
      setEditingProduct(prev => ({
        ...prev,
        images: prev.images.filter((_, i) => i !== index)
      }));
    } else {
      setProductImages(prev => prev.filter((_, i) => i !== index));
      setNewProduct(prev => ({
        ...prev,
        images: prev.images.filter((_, i) => i !== index)
      }));
    }
  };

  const handleAddProduct = async () => {
    let response = await insertProduct(newProduct);
    if (response.status === 200) {
      await getProductsFromApi();
      setShowAddModal(false);
      setNewProduct({
      productName: '',
      categoryID: categories[0]?.categoryID || '',
      brandID: brands[0]?.brandID || '',
      price: 0,
      stockQuantity: 0,
      images:'',
      description: ''
    });
    setProductImages([]);
    }
    else {
      alert("Thêm sản phẩm không thành công");
    }
    //setProducts([...products, { ...newProduct}]);
    
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setShowEditModal(true);
  };

  const handleEditSave = async () => {
    let response = await updateProduct(editingProduct);
    if (response.status === 200) {
      await getProductsFromApi();
      setShowEditModal(false);
      setEditingProduct(null);
    }
  };

  const getBrandById = (brandID) => {
    const brand = brands.find(b => b.brandID === parseInt(brandID));
    return brand ? brand.brandName : 'Unknown';
  };

  const getCategoryById = (categoryID) => {
    const category = categories.find(b => b.categoryID === parseInt(categoryID));
    return category ? category.categoryName : 'Unknown';
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Product Management</h2>
        <button className="add-button" onClick={() => setShowAddModal(true)}>
          Add New Product
        </button>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Images</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productID}>
                <td>{product.productID}</td>
                <td>
                  <div className="product-images-preview">
                    {/* {(
                      <img 
                        key={product.productID}
                        src={require(`${basePath}${product.image}`)}
                        alt={`${product.name}`} 
                        className="product-thumbnail"
                      />
                    )} */}
                  </div>
                </td>
                <td>{product.productName}</td>
                <td>{getCategoryById(product.categoryID)}</td>
                <td>${product.price}</td>
                <td>{product.stockQuantity}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEditClick(product)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Product</h3>
            <div className="image-upload-section">
              <div className="images-preview">
                {productImages.map((img, index) => (
                  <div key={index} className="image-preview-item">
                    <img src={img} alt={`Preview ${index + 1}`} className="preview-image" />
                    <button
                      className="remove-image"
                      onClick={() => removeImage(index, false)}
                    >
                    </button>
                  </div>
                ))}
              </div>
              <label className="upload-btn">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleImageUpload(e, false)}
                  style={{ display: 'none' }}
                />
                Upload Images
              </label>
            </div>
            Product Name
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.productName}
              onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
            />
            Category
              <select value={newProduct.categoryID} 
              onChange={(e) => setNewProduct({ ...newProduct, categoryID: e.target.value })} > {categories.map(category => (<option key={category.categoryID} value={category.categoryID}> {category.categoryName} </option>))} 
              </select>
            Brand
              <select value={newProduct.brandID} 
              onChange={(e) => setNewProduct({ ...newProduct, brandID: e.target.value })} > {brands.map(brand => (<option key={brand.brandID} value={brand.brandID}> {brand.brandName} </option>))} 
              </select>
            Price
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            Stock Quantity
            <input
              type="number"
              placeholder="Stock"
              value={newProduct.stockQuantity}
              onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: e.target.value })}
            />
            Description
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />

            <div className="modal-buttons">
              <button onClick={handleAddProduct}>Add Product</button>
              <button onClick={() => {
                setShowAddModal(false);
                setProductImages([]);
              }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Product</h3>
            {/* <div className="image-upload-section">
              <div className="images-preview">
                {editingProduct.images.map((img, index) => (
                  <div key={index} className="image-preview-item">
                    <img src={img} alt={`Preview ${index + 1}`} className="preview-image" />
                    <button
                      className="remove-image"
                      onClick={() => removeImage(index, true)}
                    >
                    </button>
                  </div>
                ))}
              </div>
              <label className="upload-btn">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleImageUpload(e, true)}
                  style={{ display: 'none' }}
                />
                Upload Images
              </label>
            </div> */}
            Product Name
            <input
              type="text"
              placeholder="Product Name"
              value={editingProduct.productName}
              onChange={(e) => setEditingProduct({ ...editingProduct, productName: e.target.value })}
            />
            Category
              <select value={editingProduct.categoryID} 
              onChange={(e) => setNewProduct({ ...editingProduct, categoryID: e.target.value })} > {categories.map(category => (<option key={category.categoryID} value={category.categoryID}> {category.categoryName} </option>))} 
              </select>
            Brand
              <select value={editingProduct.brandID} 
              onChange={(e) => setNewProduct({ ...editingProduct, brandID: e.target.value })} > {brands.map(brand => (<option key={brand.brandID} value={brand.brandID}> {brand.brandName} </option>))} 
              </select>
            Price
            <input
              type="number"
              placeholder="Price"
              value={editingProduct.price}
              onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
            />
            Stock Quantity
            <input
              type="number"
              placeholder="Stock"
              value={editingProduct.stockQuantity}
              onChange={(e) => setEditingProduct({ ...editingProduct, stockQuantity: e.target.value })}
            />
            Description
            <input
              type="text"
              placeholder="Description"
              value={editingProduct.description}
              onChange={(e) => setNewProduct({ ...editingProduct, description: e.target.value })}
            />
            <div className="modal-buttons">
              <button onClick={handleEditSave}>Save Changes</button>
              <button onClick={() => setShowEditModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
