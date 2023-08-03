import { EmailValidator } from "@angular/forms";

export interface GeneralPublicUser {
    id: number;
    city: String;
    state: String;
    zip_code: String;
    userCode: String;
    password: String;
    first_name: String;
    middle_name: String;
    last_name: String;
    street_name: String;
    contact_number: String;
    user_created_date: Date;
    email_id: EmailValidator;
    emergency_contact_name: String;
    emergency_contact_number: String;
}