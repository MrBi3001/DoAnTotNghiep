

import clsx from 'clsx';
import styles from './navbar.module.css';

import img1 from './images/ASUS-ROG-Zephyrus-M-GU502GU-1-510x510-1-100x100.jpg';

function Navbar(){
    return (
        <>
            <div className={clsx(styles.navbar)}>
                <div className={clsx(styles.navbar_product)}>
                    <div className={clsx(styles.navbar_title_wrap)}>
                        <div className={clsx(styles.navbar_title)}>
                            <span>Sản phẩm mới</span>
                        </div>
                    </div>
                    <div className={clsx(styles.navbar_content)}>
                        <ul className={clsx(styles.navbar_content_list)}>
                            <li className={clsx(styles.navbar_content_item)}>
                                <img src={img1} alt="" className={clsx(styles.navbar_content_item_image)} />
                                <div className={clsx(styles.navbar_content_item_content)}>
                                    <span>ASUS ROG Zephyrus M GU502GU-AZ090T Gaming</span>
                                    <p>34.600.000</p>
                                </div>
                            </li>
                            <li className={clsx(styles.navbar_content_item)}>
                                <img src={img1} alt="" className={clsx(styles.navbar_content_item_image)} />
                                <div className={clsx(styles.navbar_content_item_content)}>
                                    <span>ASUS ROG Zephyrus M GU502GU-AZ090T Gaming</span>
                                    <p>34.600.000</p>
                                </div>
                            </li>
                            <li className={clsx(styles.navbar_content_item)}>
                                <img src={img1} alt="" className={clsx(styles.navbar_content_item_image)} />
                                <div className={clsx(styles.navbar_content_item_content)}>
                                    <span>ASUS ROG Zephyrus M GU502GU-AZ090T Gaming</span>
                                    <p>34.600.000</p>
                                </div>
                            </li>
                            <li className={clsx(styles.navbar_content_item)}>
                                <img src={img1} alt="" className={clsx(styles.navbar_content_item_image)} />
                                <div className={clsx(styles.navbar_content_item_content)}>
                                    <span>ASUS ROG Zephyrus M GU502GU-AZ090T Gaming</span>
                                    <p>34.600.000</p>
                                </div>
                            </li>
                            <li className={clsx(styles.navbar_content_item)}>
                                <img src={img1} alt="" className={clsx(styles.navbar_content_item_image)} />
                                <div className={clsx(styles.navbar_content_item_content)}>
                                    <span>ASUS ROG Zephyrus M GU502GU-AZ090T Gaming</span>
                                    <p>34.600.000</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={clsx(styles.navbar_post)}>
                    <div className={clsx(styles.navbar_title_wrap)}>
                        <div className={styles.navbar_title}>
                            <span>Bài viết mới</span>
                        </div>
                    </div>
                    <div className={clsx(styles.navbar_content)}>
                        <ul className={clsx(styles.navbar_content_list)}>
                            <li className={clsx(styles.navbar_content_item)}>
                                <img src={img1} alt="" className={clsx(styles.navbar_content_item_image)} />
                                <div className={clsx(styles.navbar_content_item_content)}>
                                    <span>ASUS ROG Zephyrus M GU502GU-AZ090T Gaming</span>
                                    <p>34.600.000</p>
                                </div>
                            </li>
                            <li className={clsx(styles.navbar_content_item)}>
                                <img src={img1} alt="" className={clsx(styles.navbar_content_item_image)} />
                                <div className={clsx(styles.navbar_content_item_content)}>
                                    <span>ASUS ROG Zephyrus M GU502GU-AZ090T Gaming</span>
                                    <p>34.600.000</p>
                                </div>
                            </li>
                            <li className={clsx(styles.navbar_content_item)}>
                                <img src={img1} alt="" className={clsx(styles.navbar_content_item_image)} />
                                <div className={clsx(styles.navbar_content_item_content)}>
                                    <span>ASUS ROG Zephyrus M GU502GU-AZ090T Gaming</span>
                                    <p>34.600.000</p>
                                </div>
                            </li>
                            <li className={clsx(styles.navbar_content_item)}>
                                <img src={img1} alt="" className={clsx(styles.navbar_content_item_image)} />
                                <div className={clsx(styles.navbar_content_item_content)}>
                                    <span>ASUS ROG Zephyrus M GU502GU-AZ090T Gaming</span>
                                    <p>34.600.000</p>
                                </div>
                            </li>
                            <li className={clsx(styles.navbar_content_item)}>
                                <img src={img1} alt="" className={clsx(styles.navbar_content_item_image)} />
                                <div className={clsx(styles.navbar_content_item_content)}>
                                    <span>ASUS ROG Zephyrus M GU502GU-AZ090T Gaming</span>
                                    <p>34.600.000</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;