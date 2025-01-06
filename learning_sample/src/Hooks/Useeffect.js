// // import React, { useState } from 'react';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';
// // import { useNavigate } from 'react-router-dom';
// // import './Useeffect.css';
// // import images2 from './images2.jpg'; 



// // function Useeffect() {
// //   const navigate = useNavigate(); 

// //   const formik = useFormik({
// //     initialValues: {
// //       name: '',
// //       password: '',
// //     },
// //     validationSchema: Yup.object({
// //       name: Yup.string().required('Name is required'),
// //       password: Yup.string().required('Password is required'),
// //     }),
// //     onSubmit: async (values) => {
// //       try {
// //         const response = await fetch(
// //           'https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/form',
// //           {
// //             method: 'POST',
// //             headers: {
// //               'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(values),
// //           }
// //         );

// //         if (!response.ok) {
// //           throw new Error('Failed to save data');
// //         }

// //         navigate('/Data', { state: { submittedData: values } });
// //       } catch (error) {
// //         console.error('Error saving data:', error);
// //       }
// //     },
// //   });

// //   const goToRegister = () => {
// //     navigate('/Register');
// //   };

// //   return (
// //     <div className="image-container">
// //       <img src={images2} alt="System" className="image"/> 
// //       <div className='container1'>
// //         <h1 className='form-title'>Login Form</h1>
// //         <form onSubmit={formik.handleSubmit}>
// //           <div className='form-group'>
// //             <label className='form-label'>Name:</label>
// //             <input
// //               type='text'
// //               name='name'
// //               placeholder='Enter your name' 
// //               value={formik.values.name}
// //               onChange={formik.handleChange}
// //               onBlur={formik.handleBlur}
// //               className='form-group'
// //             />
// //             {formik.touched.name && formik.errors.name ? (
// //               <div className='error-message'>{formik.errors.name}</div>
// //             ) : null}
// //           </div>
// //           <div className='form-group'>
// //             <label className='form-label'>Password:</label>
// //             <input
// //               type='password'
// //               name='password'
// //               placeholder='Enter your password'
// //               value={formik.values.password}
// //               onChange={formik.handleChange}
// //               onBlur={formik.handleBlur}
// //               className='form-input'
// //             />
// //             {formik.touched.password && formik.errors.password ? (
// //               <div className='error-message'>{formik.errors.password}</div>
// //             ) : null}
// //           </div>
// //           <button type='submit' className='submit-btn'>
// //             Login
// //           </button>
// //           <div className='sign'>
// //             <p>
// //               Already have an account?{' '}
// //               <a href='#' onClick={goToRegister}>
// //                 Sign in
// //               </a>
// //             </p>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Useeffect;







// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import './Useeffect.css';
// import images2 from './images2.jpg';

// function Useeffect() {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Name is required'),
//       password: Yup.string().required('Password is required'),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch(
//           'https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/form',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(values),
//           }
//         );

//         if (!response.ok) {
//           throw new Error('Failed to save data');
//         }

//         navigate('/Data', { state: { submittedData: values } });
//       } catch (error) {
//         console.error('Error saving data:', error);
//       }
//     },
//   });

//   const Register = () => {
//     navigate('/Register');
//   };

//   return (
//     <div className="image-container">
//       <img src={images2} alt="System" className="image" />
//       <div className="container1">
//         <h1 className="form-title">Login Form</h1>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="form-group">
//             <label className="form-label">Name:</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="form-input"
//             />
//             {formik.touched.name && formik.errors.name ? (
//               <div className="error-message">{formik.errors.name}</div>
//             ) : null}
//           </div>
//           <div className="form-group">
//             <label className="form-label">Password:</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="form-input"
//             />
//             {formik.touched.password && formik.errors.password ? (
//               <div className="error-message">{formik.errors.password}</div>
//             ) : null}
//           </div>
//           <button type="submit" className="submit-btn">
//             Login
//           </button>
//           <div className="sign">
//             <p>
//               Don’t have an account?{' '}
//               <a href="#" onClick={Register}>
//                 Register here
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Useeffect;













import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import './Useeffect.css';
import images2 from './images2.jpg';

function Useeffect() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/form',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to save data');
        }

        navigate('/Register', { state: { submittedData: values } });
      } catch (error) {
        console.error('Error saving data:', error);
      }
    },
  });

  const Register = () => {
    navigate('/Register');
  };

  return (
    <div className="image-container">
      <img src={images2} alt="System" className="image" />
      <div className="container1">
        <h1 className="form-title">Login Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-input"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error-message">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-input"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
          <div className="sign">
            <p>
              Don’t have an account?{' '}
              <button
                type="button"
                className="register-link"
                onClick={Register}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'blue',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Register here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Useeffect;








