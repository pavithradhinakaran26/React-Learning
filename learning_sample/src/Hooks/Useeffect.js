import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Useeffect.css'; 

function Useeffect() { 
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      userpassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      userpassword: Yup.string().required('Password is required'),
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

        if (!response.ok) {
          throw new Error('Failed to save data');
        }

        navigate('/Registerpage', { state: { submittedData: values } }); 
      } catch (error) {
        console.error('Error saving data:', error);
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
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="login-input"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="login-error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="login-group">
            <label className="login-label">Password:</label>
            <input
              type="password"
              name="userpassword"
              placeholder="Enter your password"
              value={formik.values.userpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="login-input"
            />
            {formik.touched.userpassword && formik.errors.userpassword ? (
              <div className="login-error">{formik.errors.userpassword}</div>
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
    onClick={() => navigate('/Registerpage')}
    style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
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

export default Useeffect;
