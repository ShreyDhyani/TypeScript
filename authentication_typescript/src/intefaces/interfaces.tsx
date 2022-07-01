export interface registrationForm {
  email: string;
  password: string;
  re_password: string;
}

export interface loginForm {
  email: string;
  password: string;
}

export interface user {
  first_name?: string;
  last_name?: string;
  password: string;
  email: string;
  mobile_no?: string;
}
