import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
} from '@mui/material';

const DashboardContent = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null); // Reference to the Chart.js instance

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      // Check if chartInstance already exists, if yes, destroy it
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create a new Chart.js instance
      const ctx = chartContainer.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line', // Set the chart type to line
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Missions Over Time', // Chart label
              data: [10, 20, 30, 25, 40, 35, 45], // Sample data
              fill: false,
              borderColor: 'rgb(75, 192, 192)', // Line color
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart instance when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Example of a Statistics Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Soldiers
              </Typography>
              <Typography variant="h2" component="div">
                120
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Missions Completed
              </Typography>
              <Typography variant="h2" component="div">
                58
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Units Active
              </Typography>
              <Typography variant="h2" component="div">
                8
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Example of a Chart/Graph */}
        <Grid item xs={12}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Missions Over Time
            </Typography>
            <Box style={{ height: '300px' }}>
              {/* Canvas element for Chart.js */}
              <canvas ref={chartContainer} />
            </Box>
          </Paper>
        </Grid>

        {/* Example of Recent Activities */}
        <Grid item xs={12}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            <Box>
              <Typography variant="body1" gutterBottom>
                - Soldier John Doe completed mission Alpha.
              </Typography>
              <Typography variant="body1" gutterBottom>
                - Unit Bravo was deployed to location X.
              </Typography>
              <Typography variant="body1" gutterBottom>
                - New equipment added to inventory.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardContent;
