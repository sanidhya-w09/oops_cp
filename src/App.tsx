import { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import StudentView from './views/StudentView';
import LandlordView from './views/LandlordView';

function App() {
    const [userType, setUserType] = useState<'student' | 'landlord'>('student');

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar userType={userType} setUserType={setUserType} />
            <main className="flex-grow">
                {userType === 'student' ? <StudentView /> : <LandlordView />}
            </main>
            <Footer />
        </div>
    );
}

export default App;