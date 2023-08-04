export interface HospitalAccount {

    h_id: number;
    h_name: string;
    h_password: string;
    h_street: string;
    h_zip_code: number;
    h_city: string;
    h_state: string;
    h_contact_number: string;
    h_email: string;
    h_website?: String;
    h_lab_facility1?: String;
    h_scanning_facility?: String;
    h_insurance_acceptance?: String;
}