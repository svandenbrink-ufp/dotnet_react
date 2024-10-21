import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";

function Home() {
  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Home Page
        </Typography>
      </Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                B2C Login Flow
              </Typography>
              <Typography variant="body2">
                Showcases B2C features we wish to incorporate in TrussTrax
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Try Out</Button>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
}

export default Home;
