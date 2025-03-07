export interface Property {
    id: number;
    title: string;
    location: string;
    price: number;
    bedrooms: number;
    type: string;
    amenities: string[];
    imageUrl: string;
    description?: string;
    distance?: string;
    available?: string;
}