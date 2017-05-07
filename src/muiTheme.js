import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
export default getMuiTheme({
  ...lightBaseTheme,
  palette: {
    ...lightBaseTheme.palette,
    textColor: '#121211',
  },
  appBar: {
    color: '#fff',
    textColor: '#121211',
  },
});
