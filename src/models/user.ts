export interface User {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    hair: { color: string };
    address: { postalCode: string };
    company: {department: string };
}

export interface Department {
    male: number;
    female: number;
    ageRange: string;
    hair: Record<string, number>;
    addressUser: Record<string, number>;
    _ages?: number[];
}