export interface Contact {
  address: string | null;
  number: string | null;
  email: string | null;
}

export interface Patient {
  patient_id: number;
  patient_name: string;
  age: number;
  medical_issue: string;
  photo_url: string | null;
  contact: Contact[];
}