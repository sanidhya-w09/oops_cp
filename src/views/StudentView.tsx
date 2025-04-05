import React, {useState,useRef} from 'react';
import {Search, MapPin, Building,DollarSignIcon,TimerIcon} from 'lucide-react';
import { Link } from "react-router-dom";
import { PropertyCard } from '../Components/PropertyCard';
import { properties } from '../Data/properties';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate


const StudentView: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOpen, setSearchOpen] = useState(false); // State to open search bar
    const searchRef = useRef<HTMLDivElement>(null); // Ref for search bar container
    const navigate = useNavigate(); // ✅ Initialize navigation

    // Function to scroll to top and open search bar
    const handleSearchClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setSearchOpen(true);

        // Optional: Focus on input field after scrolling
        setTimeout(() => {
            searchRef.current?.querySelector("input")?.focus();
        }, 300); // Delay ensures scroll completes first
    };
    const handleViewAllProperties = () => {
        navigate('/properties');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100); // Ensure scroll happens after navigation
    };


    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Find Your Perfect Student Home
                        </h1>
                        <p className="text-xl mb-8">
                            Connect directly with landlords. No broker fees. No hassle.
                        </p>

                        {/* Search Bar */}
                        <div
                            ref={searchRef}
                            className={`bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row transition-all duration-300 ${
                                searchOpen ? "border-2 border-blue-600" : ""
                            }`}
                        >
                            <div className="flex-grow flex items-center px-4 py-2">
                                <Search className="h-5 w-5 text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search by city, university, or area..."
                                    className="w-full outline-none text-gray-800"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors mt-2 md:mt-0"
                            >
                                Find Properties
                            </button>
                        </div>

                        {/* Quick Filters
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <button className="bg-blue-700 bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors">
                                <MapPin className="h-4 w-4" />
                                <span>Near Campus</span>
                            </button>
                            <button className="bg-blue-700 bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors">
                                <IndianRupeeIcon className="h-4 w-4" />
                                <span>Budget Friendly</span>
                            </button>
                            <button className="bg-blue-700 bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors">
                                <Users className="h-4 w-4" />
                                <span>Shared Flats</span>
                            </button>
                            <button className="bg-blue-700 bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors">
                                <Filter className="h-4 w-4" />
                                <span>More Filters</span>
                            </button>
                        </div>*/}
                    </div>
                </div>
            </section>

            {/* Featured ViewAllProperties Section */}
            <section id="property-section" className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Featured Properties</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.slice(0, 6).map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button
                            onClick={handleViewAllProperties}
                            className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
                            View All Properties
                        </button>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">How StudentNest Works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Search Properties</h3>
                            <p className="text-gray-600">
                                Browse through verified student accommodations near your university or preferred location.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Connect Directly</h3>
                            <p className="text-gray-600">
                                Contact landlords directly without any middlemen or broker fees.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Move In</h3>
                            <p className="text-gray-600">
                                Schedule a viewing, sign your lease, and move into your new student home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Advantages of StudentNest</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <DollarSignIcon className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Cost Savings</h3>
                            <p className="text-gray-600">
                                Students avoid extra fees by connecting directly with landlords, reducing rental costs.                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Search for Roommates</h3>
                                <Link to="/roommatefinder" className="bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors px-6 py-3 flex items-center justify-center text-lg">
                                    Find Roommates
                                </Link>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TimerIcon className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Simplified Process</h3>
                            <p className="text-gray-600">
                                The platform makes it easier for students to find and communicate with landlords quickly.                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">What Students Say</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-600 mb-4">
                                "StudentNest helped me find an affordable apartment just 10 minutes from my university. The direct connection with my landlord made everything so much easier!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-100 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-medium">Diya Sharma</p>
                                    <p className="text-sm text-gray-500">Computer Science Student</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-600 mb-4">
                                "I was able to find a great shared flat with other students in my program. The platform made it easy to filter for exactly what I needed."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-100 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-medium">Ram Rathod</p>
                                    <p className="text-sm text-gray-500">Business Administration Student</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-600 mb-4">
                                "As a student, finding accommodation was my biggest worry. StudentNest made it simple and I saved so much by avoiding broker fees!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-100 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-medium">Ananya Bakshi</p>
                                    <p className="text-sm text-gray-500">Engineering Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Find Your Student Home?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of students who found their perfect accommodation without paying broker fees.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={handleSearchClick} // 👈 Add this function
                            className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
                        >
                            Search Properties
                        </button>
                        <Link to="/signup" className="px-6 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition-colors">
                            Sign Up Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentView;