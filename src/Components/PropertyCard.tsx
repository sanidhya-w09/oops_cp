import React from 'react';
import {MapPin, Users, IndianRupee} from 'lucide-react';
import { Property } from '../types.ts';

interface PropertyCardProps {
    property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 text-sm font-medium rounded">
                    {property.type}
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>

                <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-blue-600 font-bold">
                        <IndianRupee className="h-5 w-5 mr-1" />
                        <span>{property.price}/month</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.bedrooms} {property.bedrooms === 1 ? 'bedroom' : 'bedrooms'}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.map((amenity, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {amenity}
            </span>
                    ))}
                </div>

                <div className="border-t pt-4">
                    <a href="#" className="w-full">
                        <button
                            className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors">
                            View Details
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};