import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'chart.js/auto'; // Ensure Chart.js works with React-Chartjs-2

const Dashboard = () => {
  // Dummy data for gender ratio (Teaching vs Non-Teaching Faculties)
  const genderData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        label: 'Gender Distribution (Teaching Faculties)',
        data: [60, 35, 5], // Dummy data for teaching faculties
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
      {
        label: 'Gender Distribution (Non-Teaching Faculties)',
        data: [50, 40, 10], // Dummy data for non-teaching faculties
        backgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'],
      },
    ],
  };

  // Dummy data for designation breakdown (Teaching vs Non-Teaching)
  const designationData = {
    labels: ['Teaching', 'Non-Teaching'],
    datasets: [
      {
        label: 'Faculty Designation',
        data: [70, 30], // Dummy data: 70% Teaching, 30% Non-Teaching
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  // Dummy data for skillset distribution among faculties
  const skillsetData = {
    labels: ['Research', 'Programming', 'Data Analysis', 'Teaching'],
    datasets: [
      {
        label: 'Skillset Distribution',
        data: [20, 30, 25, 25], // Dummy data for skillsets
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  // Dummy data for student achievements (Academic, Extracurricular, Co-curricular)
  const achievementData = {
    labels: ['Academic', 'Extracurricular', 'Co-curricular'],
    datasets: [
      {
        label: 'Student Achievements',
        data: [50, 30, 20], // Dummy data for student achievements
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  // Options for the pie charts
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Faculty Management Dashboard</h2>
      
      {/* Gender Ratio Section */}
      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Teaching Faculties Gender Ratio</Card.Title>
              <Pie
                data={{
                  labels: genderData.labels,
                  datasets: [genderData.datasets[0]], // Only show teaching faculties data
                }}
                options={pieOptions}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Non-Teaching Faculties Gender Ratio</Card.Title>
              <Pie
                data={{
                  labels: genderData.labels,
                  datasets: [genderData.datasets[1]], // Only show non-teaching faculties data
                }}
                options={pieOptions}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Designation Breakdown Section */}
      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Faculty Designation Breakdown</Card.Title>
              <Pie
                data={designationData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Faculty Designation (Teaching vs Non-Teaching)',
                    },
                  },
                }}
              />
            </Card.Body>
          </Card>
        </Col>

        {/* Skillset Distribution Section */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Faculty Skillset Distribution</Card.Title>
              <Bar
                data={skillsetData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false, // Hide legend for bar chart
                    },
                    title: {
                      display: true,
                      text: 'Skillsets Among Faculties',
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'Percentage',
                      },
                    },
                  },
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Student Achievement Section */}
      <Row>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Student Achievements</Card.Title>
              <Pie
                data={achievementData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Student Achievements Distribution',
                    },
                  },
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
