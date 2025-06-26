import './AuthForm.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdEmail } from "react-icons/md";
import { FaLock,FaGoogle,FaApple} from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IoWarning } from "react-icons/io5";

const AuthForm = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (activeTab === 'login') {
            console.log('Logging in with:', data);
            // Handle login logic here
        } else {
            console.log('Signing up with:', data);
            // Handle signup logic here
        }
    }
    return (
        <div className='auth-form-container'>
            <div className="auth-select-container">
                <button
                    className={`lgn-section${activeTab === 'login' ? ' active' : ''}`}
                    onClick={() => setActiveTab('login')}
                >
                    Log In
                </button>
                <button
                    className={`sgn-section${activeTab === 'signup' ? ' active' : ''}`}
                    onClick={() => setActiveTab('signup')}
                >
                    Sign Up
                </button>
            </div>
            <div className='auth-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="lgn-form-container">
                        <div className={`input-group ${errors.email ? 'has-error' : ''}`}>
                            <div style={{ position: 'relative' }}>
                                <div className="icon-wrapper">
                                    <MdEmail className='input-icon' />
                                </div>
                                <input type="email" placeholder='Email address'
                                    {...register('email', {
                                        required: 'Электронная почта обязательна',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Неверный формат электронной почты'
                                        }
                                    })} />
                            </div>
                            {errors.email &&
                                <div className="error-message">
                                    <IoWarning style={{ marginRight: '5px', fontSize: '14px' }} />
                                    {errors.email.message}
                                </div>
                            }
                        </div>
                        <div className={`input-group ${errors.password ? 'has-error' : ''}`}>
                            <div style={{ position: 'relative' }}>
                                <div className="icon-wrapper">
                                    <FaLock className='input-icon' />
                                </div>
                                <input type={showPassword ? "text" : "password"} placeholder='Password'
                                    {...register('password', {
                                        required: 'Пароль обязателен',
                                        minLength: {
                                            value: 6,
                                            message: 'Пароль должен содержать не менее 6 символов'
                                        },
                                        validate: {
                                            hasUpperCase: v => /[A-Z]/.test(v) || 'Пароль должен содержать заглавную букву',
                                            hasNumber: v => /\d/.test(v) || 'Пароль должен содержать хотя бы одну цифру'
                                        }
                                    })} />
                                <div className="eye-icon-wrapper" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <IoEyeOffOutline className='eye-icon' /> : <IoEyeOutline className='eye-icon' />}
                                </div>
                            </div>
                            {errors.password &&
                                <div className="error-message">
                                    <IoWarning style={{ marginRight: '5px', fontSize: '14px' }} />
                                    {errors.password.message}
                                </div>
                            }
                        </div>
                        {activeTab === 'login' && (
                            <div className="forgot-password-container">
                                <a href="#" className="forgot-password-link">Forgot password?</a>
                            </div>
                        )}
                        <button className="submit-but">
                            {activeTab === 'login' ? 'Log In' : 'Sign Up'}
                        </button>
                    </div>
                </form>
                <div className="separate-container">
                    <div className="separate-line"></div>
                    <span className="separate-text">or continue with</span>
                    <div className="separate-line"></div>
                </div>
                <div className="log-buts">
                    <button><FaGoogle style={{width: '20px', height: '20px'}}/> Google</button>
                    <button><FaApple style={{width: '20px', height: '20px'}}/> Apple</button>
                    
                </div>
            </div>
        </div>
    )
}

export default AuthForm;