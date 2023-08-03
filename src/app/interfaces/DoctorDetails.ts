import { AvailabilityDays } from "../enums/AvailableDays";
import { Gender } from "../enums/Gender";

export interface DoctorDetails {
    firstName: string;
    lastName: string;
    gender: Gender;
    age: number;
    specialization: string;
    contactNumber: string;
    emailAddress: string;
    yearsOfExperience: number;
    languagesKnown: string;
    consultationHours: string;
    availabilityDays: AvailabilityDays[];
}

