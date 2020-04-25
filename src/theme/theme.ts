import { createMuiTheme } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: green,
    },
    typography: {
      fontFamily: [
        '"VT323"',
         'monospace'
      ].join(',')
    }
  });
  