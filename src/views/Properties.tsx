import React, {useEffect} from "react";
import { PropertyCard2 } from "../Components/PropertyCard2";
import properties from "../Data/properties"; // Ensure the correct path to properties.ts

const Properties: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Available Properties</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {properties.map((property, index) => (
                    <PropertyCard2 key={index} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Properties;
