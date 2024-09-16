import MyButtons from '../1-AlignedButtons/AlignedButtons.jsx';
import RegisterForm from '../2-GridTextFields/GridTextFields.jsx';
import { createTheme, colors, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[300],
    },
    secondary: {
      main: colors.pink[900],
    },
    success: {
      main: colors.yellow[500],
    },
  },
});
export default function ThreeInOne() {
  return (
    <ThemeProvider theme={theme}>
    <MyButtons />
    <RegisterForm />
    </ThemeProvider>
  );
}
