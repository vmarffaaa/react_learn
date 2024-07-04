export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
        address: string;
        city: string;
        state: string;
        country: string;
    };
    company: {
        name: string;
        title: string;
    };
}
