import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAccessibleIcon,
  faFacebook,
  faInstagram,
  faScreenpal,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faBagShopping,
  faBell,
  faCartShopping,
  faCog,
  faDesktop,
  faHouse,
  faLaptop,
  faMagnifyingGlass,
  faScrewdriver,
  faSection,
  faSignOut,
  faSimCard,
  faSquare,
  faTableList,
  faUser,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleQuestion,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import clsx from "clsx";
import styles from "./header.module.scss";

import logo from "./images/logo.png";
import product1 from "./images/product1.jpg";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(user));
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserData(null);
    window.location.href = "/";
  };
  return (
    <>
      <div className={clsx(styles.wrap_header)}>
        <div className={clsx(styles.header, styles.mg_left_right)}>
          <div className={clsx(styles.header_content_top)}>
            <div className={clsx(styles.header_content_top_1)}>
              <span className={clsx(styles.header_contact)}>Kết nối</span>
              <div>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
            <div className={clsx(styles.header_content_top_2)}>
              <div className={clsx(styles.wrap_notification)}>
                <div className={clsx(styles.item_head)}>
                  <FontAwesomeIcon icon={faBell} />
                  <span className={clsx(styles.item_notification)}>
                    Thông báo
                  </span>
                </div>
                <div className={clsx(styles.notification)}>
                  <div className={clsx(styles.title)}>
                    <span>Thông báo mới nhận</span>
                  </div>
                  <div className={clsx(styles.content)}>
                    <ul className={clsx(styles.list)}>
                      <li className={clsx(styles.item)}>
                        <img
                          src={product1}
                          alt
                          className={clsx(styles.image)}
                        />
                        <div className={clsx(styles.wrap)}>
                          <span className={clsx(styles.title)}>
                            Mã đến 100000đ mua gì cũng giảm
                          </span>
                          <p>
                            Thêm hàng nghìn vocher 20000đ. Giảm 50% toàn bộ sản
                            phẩm
                          </p>
                        </div>
                      </li>
                      <li className={clsx(styles.item)}>
                        <img
                          src={product1}
                          alt
                          className={clsx(styles.image)}
                        />
                        <div className={clsx(styles.wrap)}>
                          <span className={clsx(styles.title)}>
                            Mã đến 100000đ mua gì cũng giảm
                          </span>
                          <p>
                            Thêm hàng nghìn vocher 20000đ. Giảm 50% toàn bộ sản
                            phẩm
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span>|</span>
              <div className={clsx(styles.item_head)}>
                <FontAwesomeIcon icon={faCircleQuestion} />
                <span className={clsx(styles.item_help)}>Hỗ trợ</span>
              </div>
            </div>
          </div>
          <div className={clsx(styles.header_main)}>
            <div className={clsx(styles.header_logo)}>
              <Link to="/">
                <img src={logo} alt="" className={clsx(styles.logo)} />
              </Link>
            </div>
            <div className={clsx(styles.header_search)}>
              <input
                type="text"
                className={clsx(styles.search_input)}
                placeholder="Tìm kiếm..."
              />
              <button className={clsx(styles.btn_search)}>
                <span className={clsx(styles.icon)}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
              </button>
            </div>
            <div className={clsx(styles.header_log, !isLoggedIn ? "" : "hide")}>
              <Link to="/register" className={clsx(styles.header_log_left)}>
                Đăng ký
              </Link>
              <span>|</span>
              <Link to="/login" className={clsx(styles.header_log_right)}>
                Đăng nhập
              </Link>
            </div>

            <div className={clsx(styles.header_log, isLoggedIn ? "" : "hide")}>
              <Link to="/cart" className={clsx(styles.header_log_left)}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
              <span>|</span>
              <div className={clsx(styles.profile_container)}>
                <div
                  className={clsx(styles.header_log_right)}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <FontAwesomeIcon icon={faCircleUser} />
                  <span>{userData?.userName || "User"}</span>
                </div>
                {showDropdown && (
                  <div className={clsx(styles.dropdown_menu)}>
                    <div className={clsx(styles.dropdown_item)}>
                      <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Thông tin cá nhân</span>
                      </Link>
                    </div>
                    {userData?.role != "Admin" && (
                    <div className={clsx(styles.dropdown_item)}>
                      <Link to="/orders">
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span>Đơn hàng</span>
                      </Link>
                    </div>
                    )}
                    {userData?.role === "Admin" && (
                    <div className={clsx(styles.dropdown_item)}>
                      <Link to="/admin">
                        <FontAwesomeIcon icon={faCog} />
                        <span>Quản lý</span>
                      </Link>
                    </div>
                    )}
                    <div
                      className={clsx(styles.dropdown_item)}
                      onClick={handleLogout}
                    >
                      <FontAwesomeIcon icon={faSignOut} />
                      <span>Đăng xuất</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles.category_main)}>
        <ul className={clsx(styles.category_list, styles.mg_left_right)}>
          <li className={clsx(styles.category_item)}>
            <FontAwesomeIcon icon={faHouse} />
            <Link to="/">Trang chủ</Link>
          </li>
          <li className={clsx(styles.Supmenu_item)}>
            <FontAwesomeIcon icon={faLaptop} />
            <p>Danh mục sản phẩm </p>
            <ul className={clsx(styles.submenu)}>
              <li>
                <Link to="/Product/Laptop">Laptop</Link>
              </li>
              <li>
                <Link to="/Product/Computer">Computer</Link>
              </li>
              <li>
                <Link to="/Product/phancung">Phần cứng</Link>
              </li>
              <li>
                <Link to="/Product/phukien">Phụ kiện</Link>
              </li>
            </ul>
          </li>
          <li className={clsx(styles.category_item)}>
            <FontAwesomeIcon icon={faBagShopping} />
            <Link to="/khuyenmai">Khuyến mãi</Link>
          </li>
          <li className={clsx(styles.category_item)}>
            <FontAwesomeIcon icon={faTableList} />
            <Link to="/tintuc">Tin tức</Link>
          </li>
          <li className={clsx(styles.category_item)}>
            <FontAwesomeIcon icon={faAddressCard} />
            <Link to="/lienhe">Liên hệ</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
// assa
export default Header;
