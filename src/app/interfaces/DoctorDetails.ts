import { AvailabilityDays } from "../enums/AvailableDays";
import { Gender } from "../enums/Gender";

export interface DoctorDetails {
    first_name: string;
    last_name: string;
    gender: Gender;
    age: number;
    specialization: string;
    contact_number: string;
    email_address: string;
    years_of_experience: number;
    languages_known: string[];
    consultation_hours: string[];
    availability_days: AvailabilityDays[];
}

