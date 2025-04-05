import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRoommate: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        university: '',
        preferences: '',
        contact_info: '',
        current_info: '',
        current_home: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        const requiredFields = ['name', 'gender', 'university', 'preferences', 'contact_info', 'current_info', 'current_home'];
        const isFormValid = requiredFields.every(field => formData[field as keyof typeof formData].trim() !== '');

        if (!isFormValid) {
            setError('Please fill in all fields.');
            return;
        }

        // Here, you could send data to a backend or global state
        console.log('New Roommate Added:', formData);

        // Redirect back to RoommateFinder
        navigate('/roommate-finder');
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Add Roommate</h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-5 border border-gray-200">
                {error && <div className="text-red-600 text-sm font-medium text-center">{error}</div>}

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Gender</label>
                    <select
                        name="gender"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">University</label>
                    <input
                        type="text"
                        name="university"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.university}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Preferences</label>
                    <textarea
                        name="preferences"
                        rows={3}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        value={formData.preferences}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Contact Info</label>
                    <input
                        type="text"
                        name="contact_info"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.contact_info}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Current Info</label>
                    <textarea
                        name="current_info"
                        rows={2}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        value={formData.current_info}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Current Home</label>
                    <input
                        type="text"
                        name="current_home"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.current_home}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                >
                    Add Roommate
                </button>
            </form>
        </div>
    );
};

export default AddRoommate;
