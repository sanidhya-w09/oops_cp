import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const PropertyList: React.FC = () => {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        price: "",
        bedrooms: "",
        type: "",
        amenities: "",
        description: "",
        distance: "",
        available: "",
        landlord: "",
        contact: "",
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        for (const key in formData) {
            if (formData[key as keyof typeof formData].trim() === "") {
                toast.error("Please fill out all fields.");
                return;
            }
        }

        toast.success("Property submitted successfully!");
        console.log("Property Submitted:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Add Property Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                        { name: "title", placeholder: "Title" },
                        { name: "location", placeholder: "Location" },
                        { name: "price", placeholder: "Price", type: "number" },
                        { name: "bedrooms", placeholder: "Bedrooms", type: "number" },
                        { name: "type", placeholder: "Type (e.g. Apartment)" },
                        { name: "amenities", placeholder: "Amenities (comma separated)" },
                        { name: "distance", placeholder: "Distance (e.g. 2km from campus)" },
                        { name: "available", placeholder: "Availability (e.g. Yes/No)" },
                        { name: "landlord", placeholder: "Landlord Name" },
                        { name: "contact", placeholder: "Landlord Contact" },
                    ].map((field) => (
                        <input
                            key={field.name}
                            type={field.type || "text"}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                    ))}

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition h-24 resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Submit Property
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PropertyList;
