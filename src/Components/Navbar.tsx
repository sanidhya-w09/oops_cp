import React, { useState } from 'react';
import {Home, UserPlus, LogIn, Menu, X, Building} from 'lucide-react';
import { Link } from "react-router-dom";
interface NavbarProps {
    userType: 'student' | 'landlord';
    setUserType: (type: 'student' | 'landlord') => void;
}

const Navbar: React.FC<NavbarProps> = ({ userType, setUserType }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <Home className="h-6 w-6 text-blue-600" />
                        <span className="text-xl font-bold text-blue-600">StudentNest</span>
                    </Link>

                    {/* User Type Toggle */}
                    <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
                        <button
                            onClick={() => setUserType('student')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                userType === 'student'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Student
                        </button>
                        <button
                            onClick={() => setUserType('landlord')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                userType === 'landlord'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Landlord
                        </button>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center justify-between space-x-1">
                        <Link to="/properties" className="px-4 py-2 text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                            <Building className="h-4 w-4"/>
                            <span>All Properties</span>
                        </Link>

                        <Link to="/login"
                              className="px-4 py-2 text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                            <LogIn className="h-4 w-4"/>
                            <span>Login</span>
                        </Link>

                        <Link
                            to="/signup"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-1"
                        >
                            <UserPlus className="h-4 w-4"/>
                            <span>Sign Up</span>
                        </Link>
                    </div>


                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-3">
                            <div className="flex flex-col space-y-2 mb-2">
                                <button
                                    onClick={() => {
                                        setUserType('student');
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                                        userType === 'student'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700'
                                    }`}
                                >
                                    Student
                                </button>
                                <button
                                    onClick={() => {
                                        setUserType('landlord');
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                                        userType === 'landlord'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700'
                                    }`}
                                >
                                    Landlord
                                </button>
                            </div>
                            <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600">
                                <a href="#" className="flex items-center space-x-1">
                                    <LogIn className="h-4 w-4"/>
                                    <span>Login</span>
                                </a>
                            </button>
                            <button
                                className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                <a href="#" className="flex items-center space-x-1">
                                    <UserPlus className="h-4 w-4"/>
                                    <span>Sign Up</span>
                                </a>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;