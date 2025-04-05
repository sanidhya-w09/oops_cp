import React, { useEffect, useState } from 'react';
import { GraduationCap, HeartHandshake, PhoneIcon, SmileIcon, PlusCircle, BookMarkedIcon ,HomeIcon} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { roommates as roommateData } from '../Data/roommates'; // Adjust the path as needed

const RoommateFinder: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredRoommates = roommateData.filter(
        (r) =>
            r.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.preference.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold text-blue-600">Find a Roommate</h1>
                <button
                    onClick={() => navigate('/add-roommate')}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                >
                    <PlusCircle className="w-5 h-5" />
                    <span>Add Roommate</span>
                </button>
            </div>

            <input
                type="text"
                placeholder="🔍 Search by university or preferences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            {filteredRoommates.length > 0 ? (
                <ul className="space-y-4">
                    {filteredRoommates.map((r, index) => (
                        <li
                            key={index}
                            className="border border-gray-200 rounded-lg p-5 bg-white hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-1">{r.name}</h2>
                            <p className="flex items-center text-gray-600">
                                <SmileIcon className="w-4 h-4 mr-2 text-blue-500"/>
                                {r.gender}
                            </p>
                            <p className="flex items-center text-gray-600 mb-1">
                                <GraduationCap className="w-4 h-4 mr-2 text-indigo-500"/>
                                {r.university}
                            </p>
                            <p className="flex items-center text-gray-600">
                                <HeartHandshake className="w-4 h-4 mr-2 text-pink-500"/>
                                {r.preference}
                            </p>
                            <p className="flex items-center text-gray-600">
                                <PhoneIcon className="w-4 h-4 mr-2 text-blue-500"/>
                                {r.contact_info}
                            </p>
                            <p className="flex items-center text-gray-600">
                                <BookMarkedIcon className="w-4 h-4 mr-2 text-blue-500"/>
                                {r.current_info}
                            </p>
                            <p className="flex items-center text-gray-600">
                                <HomeIcon className="w-4 h-4 mr-2 text-blue-500"/>
                                {r.current_home}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center text-gray-500 mt-10">
                    No roommates match your search.
                </div>
            )}
        </div>
    );
};

export default RoommateFinder;
