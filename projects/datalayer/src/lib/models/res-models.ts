export interface ResponseModel<Template> {
  code: number;
  message?: string;
  data?: Template;
}

export interface Address {
  id?: string;
  house_number: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country:
    | "AFGHANISTAN"
    | "ALBANIA"
    | "ALGERIA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BHUTAN"
    | "BOLIVIA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BRAZIL"
    | "BRUNEI"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO_REPUBLIC"
    | "COSTA_RICA"
    | "CROATIA"
    | "CUBA"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "EAST_TIMOR"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ESWATINI"
    | "ETHIOPIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GREECE"
    | "GRENADA"
    | "GUATEMALA"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HONDURAS"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAN"
    | "IRAQ"
    | "IRELAND"
    | "ISRAEL"
    | "ITALY"
    | "IVORY_COAST"
    | "JAMAICA"
    | "JAPAN"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAOS"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MEXICO"
    | "MICRONESIA"
    | "MOLDOVA"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NORTH_KOREA"
    | "NORTH_MACEDONIA"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PALESTINE"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "POLAND"
    | "PORTUGAL"
    | "QATAR"
    | "ROMANIA"
    | "RUSSIA"
    | "RWANDA"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_KOREA"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "SUDAN"
    | "SURINAME"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIA"
    | "TAIWAN"
    | "TAJIKISTAN"
    | "TANZANIA"
    | "THAILAND"
    | "TOGO"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM"
    | "UNITED_STATES"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "VANUATU"
    | "VATICAN_CITY"
    | "VENEZUELA"
    | "VIETNAM"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
}

export interface Person {
  id?: string;
  first_name?: string;
  last_name?: string;
  contact_number?: string;
  national_id?: string;
  email?: string;
  address?: Address;
}

export interface User {
  id?: string;
  person?: Person;
  active?: boolean;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface Business {
  id?: string;
  name?: string;
  description?: string;
  licence?: string;
  active?: boolean;
}

export interface Branch {
  name?: string;
  code?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  active?: string;
  address?: Address;
  business?: Business;
  id?: string;
}

export interface Employee {
  designation?: string;
  user?: User;
  branch?: Branch;
  permissions?: Array<
    | "BRANCH_CREATE"
    | "BRANCH_READ_ALL"
    | "BRANCH_UPDATE"
    | "BRANCH_DELETE"
    | "EMPLOYEE_CREATE"
    | "EMPLOYEE_READ_ALL"
    | "EMPLOYEE_UPDATE"
    | "EMPLOYEE_DELETE"
    | "INVENTORY_CREATE"
    | "INVENTORY_READ"
    | "INVENTORY_UPDATE"
    | "INVENTORY_DELETE"
    | "VIEW_SALES"
    | "GENERATE_SALES"
    | "UPDATE_SALES"
    | "DELETE_SALES"
  >;
  active?: string;
  id?: string;
}

export interface Product {
  name?: string;
  company?: string;
  weight?: string;
  dimentions?: string;
  id?: string;
}

export interface Inventory {
  color?: string;
  description?: string;
  quantityInStock?: number;
  unitPrice?: number;
  allowedDiscountInPercent?: number;
  purchasePrice?: number;
  branch?: Branch;
  product?: Product;
  id?: string;
}
