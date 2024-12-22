import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import styles from './login.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faQuestion } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.png';
import { loginService } from '../../Service/AxiosService';

function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginService(email, password);
            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data.data));
                onLoginSuccess();
                navigate('/');
            }
        } catch (error) {
            setError(error.response?.data?.userMsg || 'Login failed');
        }
    };

    return (
        <>
            <div className={clsx(styles.login)}>
                <div className={clsx(styles.login_head)}>
                    <div className={clsx(styles.logo)}>
                        <Link to="/">
                            <img src={logo} alt="" className={clsx(styles.logo_img)}/>
                        </Link>
                    </div>
                    <div className={clsx(styles.title)}>
                        <span>ĐĂNG NHẬP</span>
                    </div>
                </div>
                <div className={clsx(styles.login_content)}>
                    <div className={clsx(styles.wrap)}>
                        <div className={clsx(styles.content_title)}>
                            <span>ĐĂNG NHẬP</span>
                        </div>
                        {error && <div className={clsx(styles.error_message)}>{error}</div>}
                        <form onSubmit={handleLogin}>
                            <div className={clsx(styles.content_username,styles.input)}>
                                <input 
                                    type="email" 
                                    placeholder='Email' 
                                    className={clsx(styles.username,styles.item)}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={clsx(styles.content_password,styles.input)}>
                                <input 
                                    type="password" 
                                    placeholder='Mật khẩu' 
                                    className={clsx(styles.password,styles.item)}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={clsx(styles.content_btn)}>
                                <button type="submit" className={clsx(styles.btn_login)}>Đăng nhập</button>
                            </div>
                        </form>
                        <div className={clsx(styles.content_forgot_password)}>
                            <a href=''>Quên mật khẩu</a>
                        </div>
                        <div className={clsx(styles.content_to_register)}>
                            <span>Bạn chưa có tài khoản</span>
                            <span className={clsx(styles.content_to_register_icon)}><FontAwesomeIcon icon={faQuestion} /></span>
                            <Link to="/register">Đăng ký</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
