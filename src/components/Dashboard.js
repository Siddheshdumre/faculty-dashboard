import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensures Chart.js works with React-Chartjs-2

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
    <div className="container mt-5">
      <h2>Dashboard</h2>

      {/* Gender Ratio Section */}
      <div className="row">
        <div className="col-md-6">
          <h4>Teaching Faculties Gender Ratio</h4>
          <Pie
            data={{
              labels: genderData.labels,
              datasets: [genderData.datasets[0]], // Only show teaching faculties data
            }}
            options={pieOptions}
          />
        </div>

        <div className="col-md-6">
          <h4>Non-Teaching Faculties Gender Ratio</h4>
          <Pie
            data={{
              labels: genderData.labels,
              datasets: [genderData.datasets[1]], // Only show non-teaching faculties data
            }}
            options={pieOptions}
          />
        </div>
      </div>

      {/* Designation Breakdown Section */}
      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Faculty Designation Breakdown</h4>
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
        </div>

        {/* Skillset Distribution Section */}
        <div className="col-md-6">
          <h4>Faculty Skillset Distribution</h4>
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
        </div>
      </div>

      {/* Student Achievement Section */}
      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Student Achievements</h4>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
