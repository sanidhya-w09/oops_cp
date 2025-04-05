import React from 'react';
import {Home, Users, Shield, CheckCircle, MessageSquare, IndianRupeeIcon} from 'lucide-react';
import {Link} from "react-router-dom";

const LandlordView: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            List Your Property to Student Tenants
                        </h1>
                        <p className="text-xl mb-8">
                            Connect directly with verified students. No middlemen. Higher returns.
                        </p>
                        <Link to="/list-property">
                            <button className="px-8 py-4 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                                List Your Property
                            </button>
                        </Link>

                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Why List With StudentNest?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                <IndianRupeeIcon className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">No Commission Fees</h3>
                            <p className="text-gray-600">
                                Keep 100% of your rental income. We don't charge any commission on your rentals.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Verified Students</h3>
                            <p className="text-gray-600">
                                All student profiles are verified with university credentials for your peace of mind.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
                            <p className="text-gray-600">
                                Our secure messaging and document sharing keeps your information protected.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">How It Works For Landlords</h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center mb-12">
                            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <Home className="h-8 w-8 text-indigo-600" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">Create Your Listing</h3>
                                <p className="text-gray-600">
                                    Add your property details, photos, amenities, and set your rental terms. Our user-friendly interface makes it easy to showcase your property.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <img
                                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                                        alt="Property listing interface"
                                        className="rounded-lg w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center mb-12">
                            <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
                                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <MessageSquare className="h-8 w-8 text-indigo-600" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">Connect With Students</h3>
                                <p className="text-gray-600">
                                    Receive inquiries from verified students and communicate directly through our secure messaging system. No intermediaries involved.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <img
                                        src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        alt="Messaging interface"
                                        className="rounded-lg w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <CheckCircle className="h-8 w-8 text-indigo-600" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">Finalize Agreements</h3>
                                <p className="text-gray-600">
                                    Schedule viewings, finalize rental agreements, and manage your property all in one place. We provide templates and tools to make the process smooth.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <img
                                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        alt="Agreement signing"
                                        className="rounded-lg w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                        No hidden fees or commissions. Just straightforward pricing to list your properties.
                    </p>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border rounded-lg p-6 flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">Basic</h3>
                            <p className="text-gray-600 mb-4">Perfect for single property owners</p>
                            <div className="text-3xl font-bold mb-1">₹0</div>
                            <p className="text-gray-500 mb-6">Free</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>1 property listing</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Basic property details</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Up to 5 photos</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Standard visibility</span>
                                </li>
                            </ul>
                            <a href="#">
                                <button
                                    className="w-full py-2 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200 transition-colors mt-auto">
                                    Get Started
                                </button>
                            </a>
                        </div>

                        <div className="border border-indigo-500 rounded-lg p-6 flex flex-col relative shadow-lg">
                            <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                                Popular
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Premium</h3>
                            <p className="text-gray-600 mb-4">For serious property owners</p>
                            <div className="text-3xl font-bold mb-1">₹199</div>
                            <p className="text-gray-500 mb-6">per month</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Up to 5 property listings</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Enhanced property details</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Up to 20 photos</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Featured in search results</span>
                                </li>
                            </ul>
                            <a href="#">
                                <button
                                    className="w-full py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors mt-auto">
                                    Get Started
                                </button>
                            </a>
                        </div>

                        <div className="border rounded-lg p-6 flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">Professional</h3>
                            <p className="text-gray-600 mb-4">For property management companies</p>
                            <div className="text-3xl font-bold mb-1">₹499</div>
                            <p className="text-gray-500 mb-6">per month</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Unlimited property listings</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Premium property showcase</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Unlimited photos & virtual tours</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Top placement in search</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Dedicated account manager</span>
                                </li>
                            </ul>
                            <a href="#">
                                <button
                                    className="w-full py-2 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-900 transition-colors mt-auto">
                                    Contact Sales
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">What Landlords Say</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                "I've been renting to students for years, but StudentNest has made the process so much more efficient. I found reliable tenants quickly and the direct communication is a game-changer."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-medium">Ishaan Goenka</p>
                                    <p className="text-sm text-gray-500">Property Owner, 3 listings</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                "The verification system gives me peace of mind. I know I'm dealing with real students, and the platform handles all the initial screening. Worth every penny of the premium subscription."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-medium">Rhea Deshmukh</p>
                                    <p className="text-sm text-gray-500">Property Manager, 12 listings</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(4)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                    <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                "As a small landlord with just one property near campus, the free tier is perfect for me. I found great tenants within a week of listing, and the process was straightforward and easy."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-medium">Aditya Singhania</p>
                                    <p className="text-sm text-gray-500">Property Owner, 6 listings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 bg-indigo-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to List Your Property?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of landlords who are connecting directly with student tenants and maximizing their rental income.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/list-property">
                            <button className="px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                                List Your Property
                            </button>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandlordView;