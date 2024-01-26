import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                {/* <Route path="/" element={<RegisterPage />} /> */}
                {/* <Route path="/job-details" element={<RegisterPage />} /> */}
                {/* <Route path="/job-post" element={<RegisterPage />} /> */}
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
