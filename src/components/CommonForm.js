import React from 'react';
import { useForm } from 'react-hook-form';

const CommonForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    // Handle activity registration logic
    console.log(data);
  };

  return (
    <div className="container">
      <h2>Activity Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input {...register('name')} className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input {...register('email')} className="form-control" />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select {...register('role')} className="form-control">
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </select>
        </div>
        <div className="form-group">
          <label>Activity</label>
          <input {...register('activity')} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default CommonForm;
