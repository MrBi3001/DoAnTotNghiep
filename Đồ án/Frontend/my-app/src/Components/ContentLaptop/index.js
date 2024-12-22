import clsx from 'clsx';
import styles from './contentlaptop.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import product1 from './images/product1.jpg';
import { Link } from 'react-router-dom';
function ContentLaptop({laptopType}) {
    
    return (
        <>
            <div class={clsx(styles.main)}>
                <div class={clsx(styles.way)}>
                    <Link to="/" class={clsx(styles.link_way)}>Trang chủ</Link>
                    <span class={clsx(styles.icon)}><FontAwesomeIcon icon={faChevronRight}/></span>
                    <Link
                        to="/Product"
                        class={clsx(styles.link_way)}
                        >Product
                    </Link>
                    {laptopType!= "Product" && 
                    <span>
                        <span class={clsx(styles.icon)}><FontAwesomeIcon icon={faChevronRight}/></span>
                        <span>{laptopType}</span>
                    </span>}
                </div>
                <div class={clsx(styles.show_page_title)}>
                        <div class={clsx(styles.brand_title)}>
                            <p class={clsx(styles.brand_name)}>{laptopType.toUpperCase()}</p>
                        </div>
                </div>
                <div class={clsx(styles.product)}>
                    <div class={clsx(styles.product_list)}>
                        <div class={clsx(styles.product_item)}>
                            <img src={product1} alt="" class={clsx(styles.product_img)}/>
                            <div class={clsx(styles.product_body)}>
                                <p class={clsx(styles.product_name)}>Nâmmmmmmm</p>
                                <p class={clsx(styles.product_price)}>35.600.000₫</p>
                            </div>
                        </div>
                        <div class={clsx(styles.product_item)}>
                            <img src={product1} alt="" class={clsx(styles.product_img)}/>
                            <div class={clsx(styles.product_body)}>
                                <p class={clsx(styles.product_name)}>Acer Predator Helios 300 PH315-52-78HH Gaming Laptop</p>
                                <p class={clsx(styles.product_price)}>35.600.000₫</p>
                            </div>
                        </div>
                        <div class={clsx(styles.product_item)}>
                            <img src={product1} alt="" class={clsx(styles.product_img)}/>
                            <div class={clsx(styles.product_body)}>
                                <p class={clsx(styles.product_name)}>Acer Predator Helios 300 PH315-52-78HH Gaming Laptop</p>
                                <p class={clsx(styles.product_price)}>35.600.000₫</p>
                            </div>
                        </div>
                        <div class={clsx(styles.product_item)}>
                            <img src={product1} alt="" class={clsx(styles.product_img)}/>
                            <div class={clsx(styles.product_body)}>
                                <p class={clsx(styles.product_name)}>Acer Predator Helios 300 PH315-52-78HH Gaming Laptop</p>
                                <p class={clsx(styles.product_price)}>35.600.000₫</p>
                            </div>
                        </div>
                        <div class={clsx(styles.product_item)}>
                            <img src={product1} alt="" class={clsx(styles.product_img)}/>
                            <div class={clsx(styles.product_body)}>
                                <p class={clsx(styles.product_name)}>Acer Predator Helios 300 PH315-52-78HH Gaming Laptop</p>
                                <p class={clsx(styles.product_price)}>35.600.000₫</p>
                            </div>
                        </div>  
                        <div class={clsx(styles.clear)}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentLaptop;