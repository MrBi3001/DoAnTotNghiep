import clsx from "clsx";
import styles from "./product.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faChevronRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar";
import product1 from "./images/product1.jpg";
import product2 from "./images/product2.jpg";
import product3 from "./images/product3.jpg";
import product4 from "./images/product4.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { getProductByID } from "../../Service/ProductService";
import { CartService } from "../../Service/CartService";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Login from "../Login";
function Product() {
  const [showImage, setShowImage] = useState(product1);
  const [productPtice, setProductPrice] = useState("45.600.000");
  const [activePrice1, setActivePrice1] = useState(true);
  const [activePrice2, setActivePrice2] = useState(false);
  const [checked, setChecked] = useState(1);
  const [quantityCount, setQuantityCount] = useState(1);
  const [quantityAvailable, setQuantityAvailable] = useState(5);

  const handleType1 = () => {
    setChecked(1);
    setProductPrice("45.600.000");
    if (!activePrice1) {
      setActivePrice1(!activePrice1);
      setActivePrice2(!activePrice2);
    }
  };
  const handleType2 = () => {
    setChecked(2);
    setProductPrice("47.900.000");
    if (!activePrice2) {
      setActivePrice1(!activePrice1);
      setActivePrice2(!activePrice2);
    }
  };
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
          position: "absolute",
          right: "10px",
          opacity: "0.4",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
          position: "absolute",
          left: "10px",
          opacity: "0.4",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  };
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // binhp
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [specifications, setSpecifications] = useState([]);

  useEffect(() => {
    getProduct(id);
  }, []);

  const getProduct = async () => {
    let response = await getProductByID(id);
    if (response && response.data) {
      setProduct(response.data.product);
      const specificationsString = response.data.product.specifications;
      setSpecifications(JSON.parse(specificationsString));
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  const handleAddToCart = async (productId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      toast.warning('Vui lòng đăng nhập để thêm vào giỏ hàng!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      alert('Vui lòng đăng nhập để thêm vào giỏ hàng!');
      window.location.href = '/login';
      return ;
    }
    const userId = parseInt(user.userID);
  
    try {
      const cartData = {
        userId: userId,
        productId: productId,
        quantity: quantityCount
      };
      await CartService.addToCart(cartData);
      toast.success('Thêm vào giỏ hàng thành công!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // toast.success('Đã thêm sản phẩm vào giỏ hàng');
    } catch (error) {
      // toast.error('Không thể thêm vào giỏ hàng. Vui lòng thử lại');
      toast.error('Thêm vào giỏ hàng thất bại! Vui lòng thử lại', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <div className={clsx(styles.product)}>
        <div class={clsx(styles.way)}>
          <Link to="/" class={clsx(styles.link_way)}>
            Trang chủ
          </Link>
          <span class={clsx(styles.icon)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
          <span class={clsx(styles.link_way)}>Sản phẩm</span>
        </div>
        <div className={clsx(styles.product_wrap)}>
          <div className={clsx(styles.product_images)}>
            <img src={showImage} className={clsx(styles.product_image_main)} />
            <div className={clsx(styles.product_image_list)}>
              <Slider {...settings}>
                <div className={clsx(styles.product_image_item_wrap)}>
                  <span>
                    <img
                      src={product1}
                      alt=""
                      className={clsx(styles.product_image_item)}
                      onClick={() => setShowImage(product1)}
                    />
                  </span>
                </div>
                <div className={clsx(styles.product_image_item_wrap)}>
                  <span>
                    <img
                      src={product2}
                      alt=""
                      className={clsx(styles.product_image_item)}
                      onClick={() => setShowImage(product2)}
                    />
                  </span>
                </div>
                <div className={clsx(styles.product_image_item_wrap)}>
                  <span>
                    <img
                      src={product3}
                      alt=""
                      className={clsx(styles.product_image_item)}
                      onClick={() => setShowImage(product3)}
                    />
                  </span>
                </div>
                <div className={clsx(styles.product_image_item_wrap)}>
                  <span>
                    <img
                      src={product4}
                      alt=""
                      className={clsx(styles.product_image_item)}
                      onClick={() => setShowImage(product4)}
                    />
                  </span>
                </div>
                <div className={clsx(styles.product_image_item_wrap)}>
                  <span>
                    <img
                      src={product1}
                      alt=""
                      className={clsx(styles.product_image_item)}
                      onClick={() => setShowImage(product1)}
                    />
                  </span>
                </div>
              </Slider>
            </div>
          </div>
          <div className={clsx(styles.product_info)}>
            <div className={clsx(styles.name)}>
              {/* binhp */}
              <span>{product.productName}</span>
            </div>
            <div className={clsx(styles.price)}>
              {/* binhp */}
              {formatPrice(product.price)}
            </div>
            <div className={clsx(styles.description_short)}>

              {Object.entries(specifications).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </div>
            <div className={clsx(styles.quantity)}>
              <div className={clsx(styles.title)}>
                <span>0</span>
              </div>
              <div className={clsx(styles.content)}>
                <div
                  className={clsx(styles.quantity_up)}
                  onClick={() =>
                    quantityCount > 1 && setQuantityCount(quantityCount - 1)
                  }
                >
                  <span className={clsx(styles.icon)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </span>
                </div>
                <div className={clsx(styles.quantity_number)}>
                  {quantityCount}
                </div>
                <div
                  className={clsx(styles.quantity_down)}
                  onClick={() =>
                    quantityCount < quantityAvailable &&
                    setQuantityCount(quantityCount + 1)
                  }
                >
                  <span className={clsx(styles.icon)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>
              </div>
              <div className={clsx(styles.available)}>
                <span>{product.stockQuantity}</span>
                Sản phẩm có sẵn
              </div>
            </div>
            <div className={clsx(styles.product_btn)}>
              <button type="submit" className={clsx(styles.add_to_cart)}
                onClick={() => handleAddToCart(id)}
              >
                <span className={clsx(styles.icon)}>
                  <FontAwesomeIcon icon={faCartPlus} />
                </span>
                Thêm vào giỏ hàng
              </button>
              <Link to="/thanh-toan">
                <button type="submit" className={clsx(styles.buy_now)}>
                  Mua ngay
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={clsx(styles.product_more)}>
          <div className={clsx(styles.content_left)}>
            <div className={clsx(styles.description)}>
              <div className={clsx(styles.title)}>
                <p>MÔ TẢ SẢN PHẨM</p>
              </div>
              <div className={clsx(styles.content)}>
                <p>{product.description}</p>
              </div>
            </div>
            <div className={clsx(styles.product_same)}>
              <div className={clsx(styles.title)}>
                <p>SẢN PHẨM TƯƠNG TỰ</p>
              </div>
              <div className={clsx(styles.content)}>
                <div className={clsx(styles.product)}>
                  <div className={clsx(styles.product_item)}>
                    <img
                      src={product1}
                      alt=""
                      className={clsx(styles.product_image)}
                    />
                    <div className={clsx(styles.product_name)}>
                      HP Omen 15-dh0172TX Gaming Laptop
                    </div>
                    <div className={clsx(styles.product_price)}>
                      44.600.000<span>đ</span>
                    </div>
                  </div>
                  <div className={clsx(styles.product_item)}>
                    <img
                      src={product2}
                      alt=""
                      className={clsx(styles.product_image)}
                    />
                    <div className={clsx(styles.product_name)}>
                      ASUS ROG Strix SCAR III G531GN-VAZ160T Laptop
                    </div>
                    <div className={clsx(styles.product_price)}>
                      44.600.000<span>đ</span>
                    </div>
                  </div>
                  <div className={clsx(styles.product_item)}>
                    <img
                      src={product3}
                      alt=""
                      className={clsx(styles.product_image)}
                    />
                    <div className={clsx(styles.product_name)}>
                      LG Gram 17Z90N-V.AH75A5 Laptop - Silver
                    </div>
                    <div className={clsx(styles.product_price)}>
                      39.600.000<span>đ</span>
                    </div>
                  </div>
                  <div className={clsx(styles.product_item)}>
                    <img
                      src={product4}
                      alt=""
                      className={clsx(styles.product_image)}
                    />
                    <div className={clsx(styles.product_name)}>
                      ASUS TUF Gaming FX705DT-H7138T Gaming Laptop
                    </div>
                    <div className={clsx(styles.product_price)}>
                      42.600.000<span>đ</span>
                    </div>
                  </div>
                  <div className={clsx(styles.product_item)}>
                    <img
                      src={product4}
                      alt=""
                      className={clsx(styles.product_image)}
                    />
                    <div className={clsx(styles.product_name)}>
                      ASUS TUF Gaming FX705DT-H7138T Gaming Laptop
                    </div>
                    <div className={clsx(styles.product_price)}>
                      42.600.000<span>đ</span>
                    </div>
                  </div>
                  <div className={clsx(styles.product_item)}>
                    <img
                      src={product4}
                      alt=""
                      className={clsx(styles.product_image)}
                    />
                    <div className={clsx(styles.product_name)}>
                      ASUS TUF Gaming FX705DT-H7138T Gaming Laptop
                    </div>
                    <div className={clsx(styles.product_price)}>
                      42.600.000<span>đ</span>
                    </div>
                  </div>
                  <div className={clsx(styles.product_item)}>
                    <img
                      src={product4}
                      alt=""
                      className={clsx(styles.product_image)}
                    />
                    <div className={clsx(styles.product_name)}>
                      ASUS TUF Gaming FX705DT-H7138T Gaming Laptop
                    </div>
                    <div className={clsx(styles.product_price)}>
                      42.600.000<span>đ</span>
                    </div>
                  </div>
                  <div className={clsx(styles.product_item)}>
                    <img
                      src={product4}
                      alt=""
                      className={clsx(styles.product_image)}
                    />
                    <div className={clsx(styles.product_name)}>
                      ASUS TUF Gaming FX705DT-H7138T Gaming Laptop
                    </div>
                    <div className={clsx(styles.product_price)}>
                      42.600.000<span>đ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx(styles.navbar)}>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
