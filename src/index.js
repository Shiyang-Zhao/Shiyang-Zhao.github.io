import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { ThemeProvider } from './contexts/theme'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
