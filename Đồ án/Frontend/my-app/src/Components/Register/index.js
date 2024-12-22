import clsx from 'clsx';
import styles from './register.module.scss';

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight, faQuestion } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.png';

function Register(){
    return (
        <>
            <div className={clsx(styles.register)}>
                <div className={clsx(styles.register_head)}>
                    <div className={clsx(styles.logo)}>
                        <Link to="/">
                            <img src={logo} alt="" className={clsx(styles.logo_img)}/>
                        </Link>
                    </div>
                    <div className={clsx(styles.title)}>
                        <span>ĐĂNG KÝ</span>
                    </div>
                </div>
                <div className={clsx(styles.register_content)}>
                    <div className={clsx(styles.wrap)}>
                        <div className={clsx(styles.content_title)}>
                            <span>ĐĂNG KÝ</span>
                        </div>
                        <div className={clsx(styles.content_email,styles.input)}>
                            <input type="text" placeholder='Email' className={clsx(styles.email,styles.item)} />
                        </div>
                        <div className={clsx(styles.content_phone,styles.input)}>
                            <input type="text" placeholder='Điện thoại' className={clsx(styles.phone,styles.item)} />
                        </div>
                        <div className={clsx(styles.content_full_name,styles.input)}>
                            <input type="text" placeholder='Tên đầy đủ' className={clsx(styles.full_name,styles.item)} />
                        </div>
                        <div className={clsx(styles.content_address,styles.input)}>
                            <input type="text" placeholder='Địa chỉ' className={clsx(styles.address,styles.item)} />
                        </div>
                        <div className={clsx(styles.content_password,styles.input)}>
                            <input type="text" placeholder='Mật khẩu' className={clsx(styles.password,styles.item)} />
                        </div>
                        <div className={clsx(styles.content_re_password,styles.input)}>
                            <input type="text" placeholder='Nhập lại mật khẩu' className={clsx(styles.password,styles.item)} />
                        </div>
                        <div className={clsx(styles.content_btn)}>
                            <button type="submit" className={clsx(styles.btn_register)}>Đăng ký</button>
                        </div>
                        <div className={clsx(styles.content_forgot_password)}>
                            <a href=''>Quên mật khẩu</a>
                        </div>
                        <div className={clsx(styles.content_to_register)}>
                            <span>Bạn đã có tài khoản</span>
                            <span className={clsx(styles.content_to_register_icon)}><FontAwesomeIcon icon={faQuestion} /></span>
                            <Link to="/login">Đăng nhập</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;