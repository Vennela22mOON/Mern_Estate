import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Header from './components/Header';
export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}
