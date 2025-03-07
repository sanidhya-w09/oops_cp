import React from 'react';
import { Home, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Home className="h-6 w-6 text-blue-400" />
                            <span className="text-xl font-bold">StudentNest</span>
                        </div>
                        <p className="text-gray-300 mb-4">
                            Find your perfect student accommodation without broker fees.
                            Direct connections between students and landlords.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Search Properties</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">List Your Property</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">How It Works</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">For Students</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Find Accommodation</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Roommate Finder</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Student Resources</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Safety Tips</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                                <span className="text-gray-300">support@studentnest.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                                <span className="text-gray-300">+91 9876543210</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} StudentNest. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;