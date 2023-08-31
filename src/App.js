import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SignInPage from './Components/SignInPage';
import SignUpPage from './Components/SignUpPage';
import WelcomePage from './Components/WelcomePage';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/welcome' element={
          <ProtectedRoute>
            <WelcomePage />
          </ProtectedRoute>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("token");
  return isAuth ? children : <Navigate replace to="/" />
}

export default App;
