import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Theme } from './themes/Theme';
import { ThemeProvider } from 'styled-components';
// import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <ThemeProvider theme={Theme}>
  // <CssBaseline />
  <App />
  // </ThemeProvider>
);

reportWebVitals();
