import { EmailValidator } from "@angular/forms";

export interface GeneralPublicUser {
    id: number;
    userCode: String;
    password: String;
    email_id: EmailValidator;
    first_name: String;
    middle_name: String;
    last_name: String;
    contact_number: String;
    street_name: String;
    city: String;
    zip_code: String;
    state: String;
    emergency_contact_name: String;
    emergency_contact_number: String;
    user_created_date: Date;
}