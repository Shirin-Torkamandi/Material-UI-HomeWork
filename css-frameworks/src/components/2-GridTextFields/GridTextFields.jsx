import { Container, TextField, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const RegisterForm = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom marginTop={2}>
        Create Your Account
      </Typography>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="none"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="none"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Age"
            variant="outlined"
            margin="none"
            type="number"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="none"
            type="email"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="none"
            type="password"
          />
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Bio"
            variant="outlined"
            margin="none"
            multiline
            rows={3}
          />
        </Grid>
        <Grid marginTop={1} item size={{ xs: 4 }}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            margin="normal"
            type="submit"
          >
            SIGN UP
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterForm;
