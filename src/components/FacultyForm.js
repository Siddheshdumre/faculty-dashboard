import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  department: yup.string().required("Department is required"),
  designation: yup.string().required("Designation is required"),
  gender: yup.string().oneOf(['Male', 'Female', 'Other'], 'Select gender').required('Gender is required'),
});

const FacultyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    axios.post('/api/faculty', data)
      .then(response => {
        alert('Faculty registered successfully');
      })
      .catch(error => {
        console.error('There was an error registering the faculty!', error);
      });
  };

  return (
    <div className="container">
      <h2>Faculty Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input {...register('name')} className="form-control" />
          <p>{errors.name?.message}</p>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input {...register('email')} className="form-control" />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input {...register('phone')} className="form-control" />
          <p>{errors.phone?.message}</p>
        </div>
        <div className="form-group">
          <label>Department</label>
          <input {...register('department')} className="form-control" />
          <p>{errors.department?.message}</p>
        </div>
        <div className="form-group">
          <label>Designation</label>
          <select {...register('designation')} className="form-control">
            <option value="Teaching">Teaching</option>
            <option value="Non-Teaching">Non-Teaching</option>
          </select>
          <p>{errors.designation?.message}</p>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select {...register('gender')} className="form-control">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <p>{errors.gender?.message}</p>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FacultyForm;
