import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import StudentView from './views/StudentView';
import LandlordView from './views/LandlordView';
import Login from "./views/Login";
import Signup from "./views/Signup";
import Properties from "./views/Properties.tsx";
import FAQ from "./views/FAQ.tsx"
import RoommateFinder from "./views/RoommateFinder.tsx";
import SafetyTips from "./views/SafetyTips.tsx";

function App() {
    const [userType, setUserType] = useState<'student' | 'landlord'>('student');

    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-gray-50">
                <Navbar userType={userType} setUserType={setUserType} />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={userType === "student" ? <StudentView /> : <LandlordView />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/properties" element={<Properties />} />
                        <Route path="/faq" element={<FAQ/>}/>
                        <Route path="/roommatefinder" element={<RoommateFinder/>}/>
                        <Route path="/safetytips" element={<SafetyTips/>}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;