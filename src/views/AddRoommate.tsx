// src/pages/AddRoommate.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

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

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const requiredFields = ['name', 'gender', 'university', 'preferences', 'contact_info', 'current_info', 'current_home'];
        const isFormValid = requiredFields.every(field => formData[field as keyof typeof formData].trim() !== '');

        if (!isFormValid) {
            toast.error('Please fill in all fields.');
            return;
        }

        const newRoommate = {
            name: formData.name,
            gender: formData.gender,
            university: formData.university,
            preference: formData.preferences,
            contact_info: formData.contact_info,
            current_info: formData.current_info,
            current_home: formData.current_home,
        };

        const existing = JSON.parse(localStorage.getItem('roommates') || '[]');
        localStorage.setItem('roommates', JSON.stringify([...existing, newRoommate]));

        toast.success("Roommate added successfully!");
        navigate('/roommatefinder');
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-10">
            <Toaster position="top-center" reverseOrder={false} />
            <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Add Roommate</h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-5 border border-gray-200">
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
