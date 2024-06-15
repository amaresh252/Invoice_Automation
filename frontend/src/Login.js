import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Navigate } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', data);
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log(response.data)
    } catch (error) {
        console.log(error);
    }
  };

  const user = localStorage.getItem('user');

  return (
    <div>
        { user && <Navigate to='/' replace={true}></Navigate>}
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
      
        

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Login</button>

      </form>
    </div>
  );
};

export default Login;
