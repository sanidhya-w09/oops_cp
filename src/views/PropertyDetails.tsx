import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import properties from '../Data/properties';

import {
    StarIcon,
    BedDouble,
    MapPin,
    Building2,
    Ruler,
    CheckCircle2,
    Phone,
    UserCircle2,
    ArrowLeft,
} from 'lucide-react';

const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const property = properties.find((p) => p.id === parseInt(id!));

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    if (!property)
        return (
            <div className="text-center mt-10 text-red-600 text-xl font-semibold">
                Property Not Found
            </div>
        );

    const handlePrevImage = () => {
        if (!property.gallery) return;
        setCurrentImageIndex((prev) =>
            prev === 0 ? property.gallery!.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        if (!property.gallery) return;
        setCurrentImageIndex((prev) =>
            prev === property.gallery!.length - 1 ? 0 : prev + 1
        );
    };


    return (
        <div className="relative max-w-5xl mx-auto px-4 py-8">
            {/* Floating Back Button */}
            <button
                onClick={() => navigate('/properties')}
                className="fixed top-20 left-2 sm:left-6 flex items-center px-3 py-2 bg-white hover:bg-gray-100 rounded-full shadow text-gray-700 z-50 border border-gray-300"
            >
                <ArrowLeft className="w-4 h-4 mr-1"/>
                Back
            </button>

            {/* Image Carousel */}
            {property.gallery && property.gallery.length > 0 && (
                <div className="relative w-full h-96 mb-6 rounded-xl overflow-hidden shadow-md">
                    <img
                        src={property.gallery[currentImageIndex]}
                        alt={`Property image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover transition duration-300"
                    />
                    <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
                    >
                        ‹
                    </button>
                    <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
                    >
                        ›
                    </button>
                </div>
            )}


            {/* Title & Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
                    <div className="flex items-center text-yellow-500 mt-1">
                        <StarIcon className="h-5 w-5 mr-1"/>
                        <span className="text-sm font-medium">{property.rating} / 5</span>
                    </div>
                </div>
                <div className="mt-4 sm:mt-0 text-right">
                    <p className="text-2xl font-bold text-blue-600">
                        ₹{property.price.toLocaleString()}/month
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        Available from: <span className="font-medium">{property.available}</span>
                    </p>
                </div>
            </div>

            {/* Location */}
            <div className="flex items-center text-gray-600 mt-3">
                <MapPin className="h-4 w-4 mr-1"/>
                <span>{property.location}</span>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-700 leading-relaxed">{property.description}</p>

            {/* Property Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-sm text-gray-800">
                <div className="flex items-center space-x-2">
                    <BedDouble className="w-5 h-5 text-blue-500"/>
                    <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-blue-500"/>
                    <span>{property.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Ruler className="w-5 h-5 text-blue-500"/>
                    <span>{property.distance}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500"/>
                    <span>{property.available}</span>
                </div>
            </div>

            {/* Landlord Info */}
            <div className="mt-8 space-y-2 text-gray-700">
                <h2 className="text-xl font-semibold mb-2">Landlord Info</h2>
                <div className="flex items-center space-x-2">
                    <UserCircle2 className="h-5 w-5 text-blue-500"/>
                    <span>{property.landlord}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-blue-500"/>
                    <span>{property.contact}</span>
                </div>
            </div>

            {/* Amenities */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">Amenities</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
                    {property.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                    ))}
                </ul>
            </div>

            {/* Contact Button
            <div className="mt-10">
                <button
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Contact Landlord
                </button>
            </div>*/}
        </div>
    );
};

export default PropertyDetails;
