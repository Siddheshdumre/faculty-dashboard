import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

// Validation schema using Yup
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
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios.post('/api/faculty', data)
      .then((response) => {
        alert('Faculty registered successfully');
      })
      .catch((error) => {
        console.error('There was an error registering the faculty!', error);
      });
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title className="text-center mb-4">Faculty Registration</Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control {...register('name')} placeholder="Enter name" />
              <small className="text-danger">{errors.name?.message}</small>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" {...register('email')} placeholder="Enter email" />
              <small className="text-danger">{errors.email?.message}</small>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control {...register('phone')} placeholder="Enter phone number" />
              <small className="text-danger">{errors.phone?.message}</small>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control {...register('department')} placeholder="Enter department" />
              <small className="text-danger">{errors.department?.message}</small>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control as="select" {...register('designation')}>
                <option value="">Select designation</option>
                <option value="Teaching">Teaching</option>
                <option value="Non-Teaching">Non-Teaching</option>
              </Form.Control>
              <small className="text-danger">{errors.designation?.message}</small>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" {...register('gender')}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
              <small className="text-danger">{errors.gender?.message}</small>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FacultyForm;
