import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import AdminDashboard from './Pages/AdminDashboard';
import FeedbackForm from './Pages/FeedbackForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
