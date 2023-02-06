import { createTheme } from '@mui/material/styles';
import { amber, blue } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      background: amber[100],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});
