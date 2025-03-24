import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import './Login.css'; 

function Login() {  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 

  const formik = useFormik({
    initialValues: {
      Username: '',
      Userpassword: '',
    },
    validationSchema: Yup.object({
      Username: Yup.string().required('Username is required'),
      Userpassword: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/form',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          }
        );

        navigate('/Tablec', { state: { submittedData: values } }); 
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <div className="login-container">
      <div className="login-card"> 
        <h1 className="login-title">Login</h1> 
        <form onSubmit={formik.handleSubmit} className="login-form">
          <div className="login-group">
            <label className="login-label">Username:</label>
            <input type="text" name="Username" placeholder="Enter your username" value={formik.values.Username} onChange={formik.handleChange} onBlur={formik.handleBlur} className="login-input"/>
            {formik.touched.Username && formik.errors.Username ? (
              <div className="login-error">{formik.errors.Username}</div>
            ) : null}
          </div>

         <div className="login-group password-group">
            <label className="login-label">Password:</label>
            <div className="password-wrapper">
              <input type={showPassword ? 'text' : 'password'} name="Userpassword" placeholder="Enter your password" value={formik.values.Userpassword} onChange={formik.handleChange}onBlur={formik.handleBlur}className="login-input"/>
              <span 
                className="password-toggle-icon" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {formik.touched.Userpassword && formik.errors.Userpassword ? (
              <div className="login-error">{formik.errors.Userpassword}</div>
            ) : null}
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          <div className="login-footer">
            <p>
              Don’t have an account?{' '}
              <span 
                className="login-register" 
                onClick={() => navigate('/Register')}
                style={{ cursor: 'pointer', color: '#007bff' }}
              >
                Register here
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;