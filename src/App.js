import Container from './component/Container/Container';
import Header from './component/Header/Header';
import Statistics from './component/Statistics/Statistics';
import './App.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <Container>
      <Header />
      <Statistics />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
