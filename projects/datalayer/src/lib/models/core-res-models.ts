export interface ResponseModel<Template> {
  code: number;
  message?: string;
  data?: Template;
}

export interface BaseTable {
  id?: string;
  active?: boolean;
  created_at?: string;
  updated_at?: string;
  created_by?: string;
  updated_by?: string;
}

export enum Country {
  AFGHANISTAN,
  ALBANIA,
  ALGERIA,
  ANDORRA,
  ANGOLA,
  ANTIGUA_AND_BARBUDA,
  ARGENTINA,
  ARMENIA,
  AUSTRALIA,
  AUSTRIA,
  AZERBAIJAN,
  BAHAMAS,
  BAHRAIN,
  BANGLADESH,
  BARBADOS,
  BELARUS,
  BELGIUM,
  BELIZE,
  BENIN,
  BHUTAN,
  BOLIVIA,
  BOSNIA_AND_HERZEGOVINA,
  BOTSWANA,
  BRAZIL,
  BRUNEI,
  BULGARIA,
  BURKINA_FASO,
  BURUNDI,
  CABO_VERDE,
  CAMBODIA,
  CAMEROON,
  CANADA,
  CENTRAL_AFRICAN_REPUBLIC,
  CHAD,
  CHILE,
  CHINA,
  COLOMBIA,
  COMOROS,
  CONGO_REPUBLIC,
  COSTA_RICA,
  CROATIA,
  CUBA,
  CYPRUS,
  CZECH_REPUBLIC,
  DENMARK,
  DJIBOUTI,
  DOMINICA,
  DOMINICAN_REPUBLIC,
  EAST_TIMOR,
  ECUADOR,
  EGYPT,
  EL_SALVADOR,
  EQUATORIAL_GUINEA,
  ERITREA,
  ESTONIA,
  ESWATINI,
  ETHIOPIA,
  FIJI,
  FINLAND,
  FRANCE,
  GABON,
  GAMBIA,
  GEORGIA,
  GERMANY,
  GHANA,
  GREECE,
  GRENADA,
  GUATEMALA,
  GUINEA,
  GUINEA_BISSAU,
  GUYANA,
  HAITI,
  HONDURAS,
  HUNGARY,
  ICELAND,
  INDIA,
  INDONESIA,
  IRAN,
  IRAQ,
  IRELAND,
  ISRAEL,
  ITALY,
  IVORY_COAST,
  JAMAICA,
  JAPAN,
  JORDAN,
  KAZAKHSTAN,
  KENYA,
  KIRIBATI,
  KOSOVO,
  KUWAIT,
  KYRGYZSTAN,
  LAOS,
  LATVIA,
  LEBANON,
  LESOTHO,
  LIBERIA,
  LIBYA,
  LIECHTENSTEIN,
  LITHUANIA,
  LUXEMBOURG,
  MADAGASCAR,
  MALAWI,
  MALAYSIA,
  MALDIVES,
  MALI,
  MALTA,
  MARSHALL_ISLANDS,
  MAURITANIA,
  MAURITIUS,
  MEXICO,
  MICRONESIA,
  MOLDOVA,
  MONACO,
  MONGOLIA,
  MONTENEGRO,
  MOROCCO,
  MOZAMBIQUE,
  MYANMAR,
  NAMIBIA,
  NAURU,
  NEPAL,
  NETHERLANDS,
  NEW_ZEALAND,
  NICARAGUA,
  NIGER,
  NIGERIA,
  NORTH_KOREA,
  NORTH_MACEDONIA,
  NORWAY,
  OMAN,
  PAKISTAN,
  PALAU,
  PALESTINE,
  PANAMA,
  PAPUA_NEW_GUINEA,
  PARAGUAY,
  PERU,
  PHILIPPINES,
  POLAND,
  PORTUGAL,
  QATAR,
  ROMANIA,
  RUSSIA,
  RWANDA,
  SAINT_KITTS_AND_NEVIS,
  SAINT_LUCIA,
  SAMOA,
  SAN_MARINO,
  SAO_TOME_AND_PRINCIPE,
  SAUDI_ARABIA,
  SENEGAL,
  SERBIA,
  SEYCHELLES,
  SIERRA_LEONE,
  SINGAPORE,
  SLOVAKIA,
  SLOVENIA,
  SOLOMON_ISLANDS,
  SOMALIA,
  SOUTH_AFRICA,
  SOUTH_KOREA,
  SOUTH_SUDAN,
  SPAIN,
  SRI_LANKA,
  SUDAN,
  SURINAME,
  SWEDEN,
  SWITZERLAND,
  SYRIA,
  TAIWAN,
  TAJIKISTAN,
  TANZANIA,
  THAILAND,
  TOGO,
  TONGA,
  TRINIDAD_AND_TOBAGO,
  TUNISIA,
  TURKEY,
  TURKMENISTAN,
  TUVALU,
  UGANDA,
  UKRAINE,
  UNITED_ARAB_EMIRATES,
  UNITED_KINGDOM,
  UNITED_STATES,
  URUGUAY,
  UZBEKISTAN,
  VANUATU,
  VATICAN_CITY,
  VENEZUELA,
  VIETNAM,
  YEMEN,
  ZAMBIA,
  ZIMBABWE,
}

export interface Email extends BaseTable {
  email?: string;
}

export interface PhoneNumber extends BaseTable {
  number?: string;
}

export interface Nationality extends BaseTable {
  number?: string;
  type?: "NIC" | "PASSPORT";
  country?: Country;
  issue_date?: string;
  expiry_date?: string;
}

export interface Address extends BaseTable {
  house_number: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: Country;
}

export interface Person extends BaseTable {
  first_name?: string;
  last_name?: string;
  contact_number?: string;
  national_id?: string;
  email?: string;
  address?: Address;
}

export interface User extends BaseTable {
  id?: string;
  person?: Person;
}

export interface LoginRes {
  token: string;
  user: User;
}

export interface Business extends BaseTable {
  name?: string;
  description?: string;
  licence?: string;
}

export interface Branch extends BaseTable {
  name?: string;
  code?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  address?: Address;
  business?: Business;
}

export default interface Employee extends BaseTable {
  designation?: string;
  user?: User;
  branch?: Branch;
  permissions?: Array<string>;
}
