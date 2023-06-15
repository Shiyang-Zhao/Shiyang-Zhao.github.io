import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
