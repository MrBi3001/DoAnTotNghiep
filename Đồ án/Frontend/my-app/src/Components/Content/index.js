import clsx from "clsx";
import styles from "./content.module.css";
import { useState, useEffect } from "react";
import {
  getAllProducts,
  getProductByCategory1,
  getProductByCategory2,
  getProductByCategory3,
} from "../../Service/ProductService";
import { Link } from "react-router-dom";
import productImage from "./image/Acer-Swift-7-SF714-52T-Laptop-1-510x510-1.jpg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";

function Content() {
  //binhp
  // lấy 5 record product
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  const [listProduct, setListProcuct] = useState([]);

  useEffect(() => {
    getListProduct();
    getListProductByCategory1();
    getListProductByCategory2();
    getListProductByCategory3();
  }, []);

  const getListProduct = async () => {
    let response = await getAllProducts();
    if (response && response.data) {
      setListProcuct(response.data);
    }
  };
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  };
  // lấy product theo category
  const [listProductCategory1, setListProductCategory1] = useState([]);
  const [listProductCategory2, setListProductCategory2] = useState([]);
  const [listProductCategory3, setListProductCategory3] = useState([]);

  const getListProductByCategory1 = async () => {
    let response = await getProductByCategory1();
    if (response && response.data) {
      setListProductCategory1(response.data);
    }
  };

  const getListProductByCategory2 = async () => {
    let response = await getProductByCategory2();
    if (response && response.data) {
      setListProductCategory2(response.data);
    }
  };

  const getListProductByCategory3 = async () => {
    let response = await getProductByCategory3();
    if (response && response.data) {
      setListProductCategory3(response.data);
    }
  };

  return (
    <>
      <div className={clsx(styles.content_wrap)}>
        {/* block 1 */}
        <div className={clsx(styles.selection_block)}>
          <div className={clsx(styles.div_title)}>
            <div className={clsx(styles.span_title)}>
              <span>HÀNG HÓT MỚI VỀ</span>
            </div>
          </div>

          <div className={clsx(styles.div_content)}>
            <div className={clsx(styles.div_content_product)}>
              {listProduct.slice(0, 6).map((item, index) => {
                return (
                  <div className={clsx(styles.product)} key={index}>
                    <div className={clsx(styles.box_image)}>
                      <img
                        className={clsx(styles.img_product)}
                        src={productImage}
                        alt="anh product"
                      />
                    </div>
                    <div className={clsx(styles.info_product)}>
                      <a className={clsx(styles.product_name)} href="">
                        {item.productName}
                      </a>
                      <span className={clsx(styles.span_price)}>
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <div
                      className={clsx(styles.icon_add)}
                      onClick={() => handleAddToCart(item)}
                    >
                      <BsCartPlus />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* block 2 */}
        <div className={clsx(styles.selection_block)}>
          <div className={clsx(styles.div_title)}>
            <div className={clsx(styles.span_title)}>
              <span>MÀN HÌNH</span>
            </div>
          </div>

          <div className={clsx(styles.div_content)}>
            <div className={clsx(styles.div_content_product)}>
              {listProductCategory1.slice(0, 6).map((item, index) => {
                return (
                  <div className={clsx(styles.product)} key={index}>
                    <div className={clsx(styles.box_image)}>
                      <img
                        className={clsx(styles.img_product)}
                        src={productImage}
                        alt="anh product"
                      />
                    </div>
                    <div className={clsx(styles.info_product)}>
                      <a className={clsx(styles.product_name)} href="">
                        {item.productName}
                      </a>
                      <span className={clsx(styles.span_price)}>
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <div
                      className={clsx(styles.icon_add)}
                      onClick={() => handleAddToCart(item)}
                    >
                      <BsCartPlus />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* block 3 */}
        <div className={clsx(styles.selection_block)}>
          <div className={clsx(styles.div_title)}>
            <div className={clsx(styles.span_title)}>
              <span>PHỤ KIỆN</span>
            </div>
          </div>

          <div className={clsx(styles.div_content)}>
            <div className={clsx(styles.div_content_product)}>
              {listProductCategory2.slice(0, 6).map((item, index) => {
                return (
                  <div className={clsx(styles.product)} key={index}>
                    <div className={clsx(styles.box_image)}>
                      <img
                        className={clsx(styles.img_product)}
                        src={productImage}
                        alt="anh product"
                      />
                    </div>
                    <div className={clsx(styles.info_product)}>
                      <a className={clsx(styles.product_name)} href="">
                        {item.productName}
                      </a>
                      <span className={clsx(styles.span_price)}>
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <div
                      className={clsx(styles.icon_add)}
                      onClick={() => handleAddToCart(item)}
                    >
                      <BsCartPlus />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
