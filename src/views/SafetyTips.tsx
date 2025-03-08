import React, {useEffect} from 'react';
import { ShieldCheck, AlertTriangle, Home, Lock, Users, PhoneIncoming } from 'lucide-react';

const SafetyTips: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Stay Safe with StudentNest</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
                Your safety is our priority. Follow these essential tips to ensure a secure and hassle-free housing experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Tip 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheck className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Verify Listings</h3>
                    <p className="text-gray-600">Always double-check property details and verify the landlord's identity before making any payments.</p>
                </div>

                {/* Tip 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Beware of Scams</h3>
                    <p className="text-gray-600">Avoid making payments in advance without viewing the property. Use secure payment methods.</p>
                </div>

                {/* Tip 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Home className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Visit the Property</h3>
                    <p className="text-gray-600">Always visit the property in person or request a virtual tour before making any decisions.</p>
                </div>

                {/* Tip 4 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Secure Your Lease</h3>
                    <p className="text-gray-600">Make sure to read and sign a formal lease agreement before moving in.</p>
                </div>

                {/* Tip 5 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Check Neighborhood Safety</h3>
                    <p className="text-gray-600">Research the neighborhood's safety and transportation options before finalizing your rental.</p>
                </div>

                {/* Tip 6 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <PhoneIncoming className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Keep Emergency Contacts</h3>
                    <p className="text-gray-600">Save important emergency contacts, such as local police, fire department, and nearby hospitals, in your phone.</p>
                </div>
            </div>
        </div>
    );
};

export default SafetyTips;