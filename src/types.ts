export interface Property {
    id?: number;
    title: string;
    location: string;
    price: number;
    bedrooms: number;
    type: string;
    amenities: string[];
    imageUrl?: string;
    description: string;
    distance: string;
    available?: string;
    rating?:string;
    landlord:string;
    contact:number;
    gallery?: string[];
}
export interface Roommate{
    name: string;
    gender: string;
    university: string;
    preference: string;
    contact_info: string;
    current_info: string;
    current_home: string;
}