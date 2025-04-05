import { useState } from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import StudentView from './views/StudentView';
import LandlordView from './views/LandlordView';
import Login from "./views/Login";
import Signup from "./views/Signup";
import ViewAllProperties from "./views/ViewAllProperties.tsx";
import FAQ from "./views/FAQ.tsx"
import RoommateFinder from "./views/RoommateFinder.tsx";
import SafetyTips from "./views/SafetyTips.tsx";
import PropertyDetails from "./views/PropertyDetails.tsx";
import properties from "./Data/properties.ts";
import ForgotPassword from "./views/ForgotPassword.tsx";
import AddRoommate from "./views/AddRoommate.tsx";

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
                        <Route path="/properties" element={<ViewAllProperties />} />
                        <Route path="/faq" element={<FAQ/>}/>
                        <Route path="/roommatefinder" element={<RoommateFinder/>}/>
                        <Route path="/safetytips" element={<SafetyTips/>}/>
                        <Route path="/" element={
                            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {properties.map(property => (
                                    <div key={property.id} className="border rounded shadow p-4">
                                        <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover rounded" />
                                        <h2 className="text-xl font-bold mt-2">{property.title}</h2>
                                        <p>{property.location}</p>
                                        <p>₹{property.price}/month</p>
                                        <Link to={`/property/${property.id}`}>
                                            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">View Details</button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        } />
                        {/* Dynamic property details page */}
                        <Route path="/property/:id" element={<PropertyDetails />} />
                        <Route path="/forgotpassword" element={<ForgotPassword />}/>
                        <Route path="/add-roommate" element={<AddRoommate />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;