export interface IAddress {
  id?: number;
  create_date?: string;
  update_date?: string;
  address1: string;
  address2: string;
  city: string;
  post_code: string;
  country: string;
  state?: string;
}

export type CompanyType = {
  id?: string;
  create_date?: string;
  update_date?: string;
  sales_tax_number: string;
  name: string;
  email: string;
  number: string;
};

export interface IUser {
  create_date: string;
  update_date: string;
  id: number;
  admin_type: number;
  retail_store?: string;
  invoice_email?: string;
  requestion_number?: string;
  first_name: string;
  last_name: string;
  department?: string;
  phone_number: number;
  is_send_news: boolean;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  user_type: number;
  user_address?: IAddress;
  user_company?: CompanyType;
}
