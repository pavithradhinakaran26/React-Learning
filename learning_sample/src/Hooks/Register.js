import React from 'react';
import './Register.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const userToEdit = location.state?.user;

  const formik = useFormik({
    initialValues: {
      username: userToEdit?.username || '',
      email: userToEdit?.email || '',
      phone: userToEdit?.phone || '',
      password: userToEdit?.password || '',
      address: userToEdit?.address || '',
      city: userToEdit?.city || '',
      gender: userToEdit?.gender || '',
      birthdate: userToEdit?.birthdate || ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      gender: Yup.string().required('Gender is required'),
      birthdate: Yup.string().required('Date of Birth is required')
    }),
    onSubmit: async (values) => {
      const method = userToEdit ? 'PUT' : 'POST';
      const url = userToEdit 
        ? `https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/Register/${userToEdit.id}` 
        : `https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/Register`;

      try {
        const response = await fetch(url, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        alert(userToEdit ? 'User updated successfully!' : 'Registration successful!');
        navigate('/Tablec', { replace: true });
      } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
      }
    }
  });

  return (
    <div className="reg-container1">
      <div className="forms-register">
        <h1>{userToEdit ? 'Edit User' : 'Register User'}</h1>
        <form className="input-name" onSubmit={formik.handleSubmit}>
          <div className="input-row">
            <div className="form-name">
              <label>Username:</label>
              <input type="text" name="username"placeholder='Enter your name'   value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              {formik.touched.username && formik.errors.username && <p className="error">{formik.errors.username}</p>}
            </div>
            <div className="form-name">
              <label>Email:</label>
              <input type="email" name="email" placeholder='Enter your email'   value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
            </div>
          </div>

          <div className="input-row">
            <div className="form-name">
              <label>Phone:</label>
              <input type="tel" name="phone"  placeholder='Enter your Phone number' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              {formik.touched.phone && formik.errors.phone && <p className="error">{formik.errors.phone}</p>}
            </div>
            <div className="form-name">
              <label>Password:</label>
              <input type="password" name="password"  placeholder='Enter your Password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              {formik.touched.password && formik.errors.password && <p className="error">{formik.errors.password}</p>}
            </div>
          </div>

          <div className="input-row">
            <div className="form-name">
              <label>Address:</label>
              <input type="text" name="address" placeholder='Enter your address'  value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              {formik.touched.address && formik.errors.address && <p className="error">{formik.errors.address}</p>}
            </div>
            <div className="form-name">
              <label>City:</label>
              <input type="text" name="city" placeholder='Enter your city'   value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              {formik.touched.city && formik.errors.city && <p className="error">{formik.errors.city}</p>}
            </div>
          </div>

          <div className="main">
            <div className="form-select">
              <label>Gender:</label>
              <select name="gender" value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {formik.touched.gender && formik.errors.gender && <p className="error">{formik.errors.gender}</p>}
            </div>

            <div className="form-error">
              <label>Date of Birth:</label>
              <input type="date" name="birthdate" value={formik.values.birthdate} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              {formik.touched.birthdate && formik.errors.birthdate && <p className="error">{formik.errors.birthdate}</p>}
            </div>
          </div>

          <div className="submit-btn">
            <button type="submit">{userToEdit ? 'Update' : 'Register'}</button>
          </div>

          <p>Already have an account? <a href="#" onClick={() => navigate('/Login')}>Sign in</a>.</p>
        </form>
      </div>
    </div>
  );
}

export default Register;