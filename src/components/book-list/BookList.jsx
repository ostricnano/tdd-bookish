import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, Button, CardActions, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const BookList = ({ books, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <Box data-test="book-list" sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {books?.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id} className="book-item">
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    component="h2"
                    sx={{ maxHeight: 30, overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {book.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    sx={{ maxHeight: 40, overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/books/${book.id}`} style={{ textDecoration: 'none' }}>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
