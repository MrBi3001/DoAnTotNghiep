import clsx from "clsx";
import styles from './contenttop.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';
import ads1 from './images/ads1.jpg';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.png';
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpg';
import product4 from './images/product4.jpg';
import product5 from './images/product5.jpg';
import product6 from './images/product6.jpg';
import product7 from './images/product7.jpg';

//Trang
import maytinhban from './images/maytinhban.jpg';
import manhinh from './images/manhinh.jpg';
import linhkien from './images/linhkien.jpg';
import luutru from './images/luutru.jpg';
import thietbimang from './images/thietbimang.jpg';
import vouchers from './images/vouchers.jpg';

import { useState, useEffect } from 'react';
import { getAllProducts } from "../../Service/ProductService";

function ContentTop(){
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    // binhp
    
      const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
          style: 'currency', 
          currency: 'VND'
        }).format(price);
      };
      const [listProduct, setListProcuct] = useState([]);

      useEffect(() => {
        getListProduct();
      }, []);

      const getListProduct = async () => {
        let response = await getAllProducts();
        if(response && response.data){
          setListProcuct(response.data);
        }
    }



    return(
        <>
            {/* bonus category */}
            <div className={clsx(styles.category_bonus)}>
                
                {/*Trang  */}
                <ul className={clsx(styles.category_list_compo, styles.mg_left_right)}>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={maytinhban} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/maytinhban">Máy tính bàn</Link>
                    </li>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={manhinh} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/manhinh">Màn hình</Link>
                    </li>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={linhkien} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/linhkienmaytinh">Linh kiện máy tính</Link>
                    </li>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={luutru} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/thietbiluutru">Thiết bị lưu trữ</Link>
                    </li>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={thietbimang} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/thietbimang">Thiết bị mạng</Link>
                    </li>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={vouchers} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/vouchers">Vouchers</Link>
                    </li>
                    
                </ul>
            </div>
            {/* end bonus */}
            
            <div className={clsx(styles.content_ads)}>
              <div className={clsx(styles.content_left)}>
                <div className={clsx(styles.slider)}>
                  <Slider {...settings}>
                    <div className={clsx(styles.image_item)}>
                        <div className={clsx(styles.image)}>
                            <img src={banner1} alt="" className={clsx(styles.image)}/>
                        </div>
                    </div>
                    <div className={clsx(styles.image_item)}>
                        <div className={clsx(styles.image)}>
                            <img src={banner2} alt="" className={clsx(styles.image)}/>
                        </div>
                    </div>
                  </Slider>
                </div>
                <div className={clsx(styles.notable_products)}>
                    <div className={clsx(styles.category)}>
                        <ul className={clsx(styles.list_category)}>
                            <li className={clsx(styles.item)}>
                                <span>SẢN PHẨM MỚI</span>
                            </li>
                            <li className={clsx(styles.item)}>SẢN PHẨM KHUYẾN MÃI</li>
                            <li className={clsx(styles.item)}>SẢN PHẨM BÁN CHẠY</li>
                        </ul>
                    </div>
                    <div className={clsx(styles.product)}>
                    {/* them binhp */}
                        {
                            listProduct.slice(0 ,5).map((item, index) => {
                                return(
                                    <div className={clsx(styles.product_item)} key={index}>
                                        <Link to={`/product/${item.productID}`}>
                                            <img src={product1} alt="" className={clsx(styles.product_image)}/>
                                            <div className={clsx(styles.product_name)}>{item.productName}</div>
                                            <div className={clsx(styles.product_price)}>{formatPrice(item.price)}</div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
              </div>
              <div className={clsx(styles.content_right)}>
                  <div className={clsx(styles.content_new)}>
                      <div className={clsx(styles.content_new_title)}>
                          <span>TIN TỨC</span>
                          <div></div>
                      </div>
                      <div className={clsx(styles.content_new_wrap)}>
                          <ul className={clsx(styles.content_new_list)}>
                              <li className={clsx(styles.content_new_item)}>
                                  <div className={clsx(styles.wrap_image)}>
                                      <img src={product5} alt="" className={clsx(styles.content_new_item_image)}/>
                                  </div>
                                  <span>Giá iPhone XS và iPhone XR tại VN được tiết lộ: Thấp nhất 22 triệu, cao nhất 43 triệu, bán cuối tháng 10</span>
                              </li>
                              <li className={clsx(styles.content_new_item)}>
                                  <div className={clsx(styles.wrap_image)}>
                                      <img src={product6} alt="" className={clsx(styles.content_new_item_image)}/>
                                  </div>
                                  <span>Cận cảnh iPhone X Plus sắp ra mắt có 3 camera sau “đẹp không thể kìm lòng”</span>
                              </li>
                              <li className={clsx(styles.content_new_item)}>
                                  <div className={clsx(styles.wrap_image)}>
                                      <img src={product7} alt="" className={clsx(styles.content_new_item_image)}/>
                                  </div>
                                  <span>Cách khắc phục lỗi iPhone bị nóng, văng ứng dụng và tự động khóa màn hình!</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className={clsx(styles.ads)}>
                      <img src={ads1} alt="" className={clsx(styles.ads_image)}/>
                  </div>
              </div>
            </div>
        </>
    )
}
export default ContentTop;