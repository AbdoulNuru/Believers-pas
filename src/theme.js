import { createMuiTheme } from "@material-ui/core/styles";
// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Trebuchet MS", sans-serif',
  },
  palette: {
    primary: {
      main: "#02B1D8",
    },
    secondary: {
      main: "#F5436E",
    },
    background: {
      default: "#fff",
    },
  },
});
export default theme;
