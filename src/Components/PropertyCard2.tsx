import React from "react";
import { MapPin, Users, IndianRupee, CalendarCheck, Map } from "lucide-react";
import { Property } from "../types.ts";
import {Link} from "react-router-dom";

interface PropertyCardProps {
    property: Property;
}

export const PropertyCard2: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {/* Image and Type Badge */}
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

            {/* Property Details */}
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>

                <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="flex items-center">
                        <CalendarCheck className="h-4 w-4 mr-2 text-green-600" />
                        <span className="text-sm">{property.available}</span>
                    </div>

                    <div className="flex items-center">
                        <Map className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">{property.distance}</span>
                    </div>
                </div>

                {/* Price and Bedroom Info */}
                <div className="flex items-center justify-between mt-4 mb-4">
                    <div className="flex items-center text-blue-600 font-bold">
                        <IndianRupee className="h-5 w-5 mr-1" />
                        <span>{property.price}/month</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">
                            {property.bedrooms} {property.bedrooms === 1 ? "bedroom" : "bedrooms"}
                        </span>
                    </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.map((amenity, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {amenity}
                        </span>
                    ))}
                </div>

                {/* View Details Button */}
                <div className="border-t pt-4">
                    <Link to={`/property/${property.id}`} className="w-full">
                        <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
