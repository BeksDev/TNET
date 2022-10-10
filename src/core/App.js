import {Main} from '../pages';
import {Navbar} from '../components';
import { ThemeProvider } from 'react-bootstrap';
import '../style/app.scss';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
