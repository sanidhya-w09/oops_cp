import React, {useEffect, useState} from 'react';

const RoommateFinder: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    const [searchQuery, setSearchQuery] = useState('');
    const roommates = [
        { name: "Amit Sharma", university: "IIT Delhi", preferences: "Non-smoker, Vegetarian" },
        { name: "Sanya Kapoor", university: "Mumbai University", preferences: "Pet-friendly, Night owl" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Find a Roommate</h1>
            <input
                type="text"
                placeholder="Search by university or preferences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            <ul>
                {roommates.filter(r => r.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    r.preferences.toLowerCase().includes(searchQuery.toLowerCase())).map((r, index) => (
                    <li key={index} className="border p-4 rounded-lg mb-2">
                        <h2 className="text-lg font-semibold">{r.name}</h2>
                        <p>University: {r.university}</p>
                        <p>Preferences: {r.preferences}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoommateFinder;