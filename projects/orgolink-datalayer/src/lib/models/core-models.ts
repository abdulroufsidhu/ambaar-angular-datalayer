export interface LoginReq {
  email: string;
  password: string;
}

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
  AFGHANISTAN = "Afghanistan",
  ALBANIA = "Albania",
  ALGERIA = "Algeria",
  ANDORRA = "Andorra",
  ANGOLA = "Angola",
  ANTIGUA_AND_BARBUDA = "Antigua And Barbuda",
  ARGENTINA = "Argentina",
  ARMENIA = "Armenia",
  AUSTRALIA = "Australia",
  AUSTRIA = "Austria",
  AZERBAIJAN = "Azerbaijan",
  BAHAMAS = "Bahamas",
  BAHRAIN = "Bahrain",
  BANGLADESH = "Bangladesh",
  BARBADOS = "Barbados",
  BELARUS = "Belarus",
  BELGIUM = "Belgium",
  BELIZE = "Belize",
  BENIN = "Benin",
  BHUTAN = "Bhutan",
  BOLIVIA = "Bolivia",
  BOSNIA_AND_HERZEGOVINA = "Bosnia And Herzegovina",
  BOTSWANA = "Botswana",
  BRAZIL = "Brazil",
  BRUNEI = "Brunei",
  BULGARIA = "Bulgaria",
  BURKINA_FASO = "Burkina Faso",
  BURUNDI = "Burundi",
  CABO_VERDE = "Cabo Verde",
  CAMBODIA = "Cambodia",
  CAMEROON = "Cameroon",
  CANADA = "Canada",
  CENTRAL_AFRICAN_REPUBLIC = "Central African Republic",
  CHAD = "Chad",
  CHILE = "Chile",
  CHINA = "China",
  COLOMBIA = "Colombia",
  COMOROS = "Comoros",
  CONGO_REPUBLIC = "Congo Republic",
  COSTA_RICA = "Costa Rica",
  CROATIA = "Croatia",
  CUBA = "Cuba",
  CYPRUS = "Cyprus",
  CZECH_REPUBLIC = "Czech Republic",
  DENMARK = "Denmark",
  DJIBOUTI = "Djibouti",
  DOMINICA = "Dominica",
  DOMINICAN_REPUBLIC = "Dominican Republic",
  EAST_TIMOR = "East Timor",
  ECUADOR = "Ecuador",
  EGYPT = "Egypt",
  EL_SALVADOR = "El Salvador",
  EQUATORIAL_GUINEA = "Equatorial Guinea",
  ERITREA = "Eritrea",
  ESTONIA = "Estonia",
  ESWATINI = "Eswatini",
  ETHIOPIA = "Ethiopia",
  FIJI = "Fiji",
  FINLAND = "Finland",
  FRANCE = "France",
  GABON = "Gabon",
  GAMBIA = "Gambia",
  GEORGIA = "Georgia",
  GERMANY = "Germany",
  GHANA = "Ghana",
  GREECE = "Greece",
  GRENADA = "Grenada",
  GUATEMALA = "Guatemala",
  GUINEA = "Guinea",
  GUINEA_BISSAU = "Guinea Bissau",
  GUYANA = "Guyana",
  HAITI = "Haiti",
  HONDURAS = "Honduras",
  HUNGARY = "Hungary",
  ICELAND = "Iceland",
  INDIA = "India",
  INDONESIA = "Indonesia",
  IRAN = "Iran",
  IRAQ = "Iraq",
  IRELAND = "Ireland",
  ISRAEL = "Israel",
  ITALY = "Italy",
  IVORY_COAST = "Ivory Coast",
  JAMAICA = "Jamaica",
  JAPAN = "Japan",
  JORDAN = "Jordan",
  KAZAKHSTAN = "Kazakhstan",
  KENYA = "Kenya",
  KIRIBATI = "Kiribati",
  KOSOVO = "Kosovo",
  KUWAIT = "Kuwait",
  KYRGYZSTAN = "Kyrgyzstan",
  LAOS = "Laos",
  LATVIA = "Latvia",
  LEBANON = "Lebanon",
  LESOTHO = "Lesotho",
  LIBERIA = "Liberia",
  LIBYA = "Libya",
  LIECHTENSTEIN = "Liechtenstein",
  LITHUANIA = "Lithuania",
  LUXEMBOURG = "Luxembourg",
  MADAGASCAR = "Madagascar",
  MALAWI = "Malawi",
  MALAYSIA = "Malaysia",
  MALDIVES = "Maldives",
  MALI = "Mali",
  MALTA = "Malta",
  MARSHALL_ISLANDS = "Marshall Islands",
  MAURITANIA = "Mauritania",
  MAURITIUS = "Mauritius",
  MEXICO = "Mexico",
  MICRONESIA = "Micronesia",
  MOLDOVA = "Moldova",
  MONACO = "Monaco",
  MONGOLIA = "Mongolia",
  MONTENEGRO = "Montenegro",
  MOROCCO = "Morocco",
  MOZAMBIQUE = "Mozambique",
  MYANMAR = "Myanmar",
  NAMIBIA = "Namibia",
  NAURU = "Nauru",
  NEPAL = "Nepal",
  NETHERLANDS = "Netherlands",
  NEW_ZEALAND = "New Zealand",
  NICARAGUA = "Nicaragua",
  NIGER = "Niger",
  NIGERIA = "Nigeria",
  NORTH_KOREA = "North Korea",
  NORTH_MACEDONIA = "North Macedonia",
  NORWAY = "Norway",
  OMAN = "Oman",
  PAKISTAN = "Pakistan",
  PALAU = "Palau",
  PALESTINE = "Palestine",
  PANAMA = "Panama",
  PAPUA_NEW_GUINEA = "Papua New Guinea",
  PARAGUAY = "Paraguay",
  PERU = "Peru",
  PHILIPPINES = "Philippines",
  POLAND = "Poland",
  PORTUGAL = "Portugal",
  QATAR = "Qatar",
  ROMANIA = "Romania",
  RUSSIA = "Russia",
  RWANDA = "Rwanda",
  SAINT_KITTS_AND_NEVIS = "Saint Kitts And Nevis",
  SAINT_LUCIA = "Saint Lucia",
  SAMOA = "Samoa",
  SAN_MARINO = "San Marino",
  SAO_TOME_AND_PRINCIPE = "Sao Tome And Principe",
  SAUDI_ARABIA = "Saudi Arabia",
  SENEGAL = "Senegal",
  SERBIA = "Serbia",
  SEYCHELLES = "Seychelles",
  SIERRA_LEONE = "Sierra Leone",
  SINGAPORE = "Singapore",
  SLOVAKIA = "Slovakia",
  SLOVENIA = "Slovenia",
  SOLOMON_ISLANDS = "Solomon Islands",
  SOMALIA = "Somalia",
  SOUTH_AFRICA = "South Africa",
  SOUTH_KOREA = "South Korea",
  SOUTH_SUDAN = "South Sudan",
  SPAIN = "Spain",
  SRI_LANKA = "Sri Lanka",
  SUDAN = "Sudan",
  SURINAME = "Suriname",
  SWEDEN = "Sweden",
  SWITZERLAND = "Switzerland",
  SYRIA = "Syria",
  TAIWAN = "Taiwan",
  TAJIKISTAN = "Tajikistan",
  TANZANIA = "Tanzania",
  THAILAND = "Thailand",
  TOGO = "Togo",
  TONGA = "Tonga",
  TRINIDAD_AND_TOBAGO = "Trinidad And Tobago",
  TUNISIA = "Tunisia",
  TURKEY = "Turkey",
  TURKMENISTAN = "Turkmenistan",
  TUVALU = "Tuvalu",
  UGANDA = "Uganda",
  UKRAINE = "Ukraine",
  UNITED_ARAB_EMIRATES = "United Arab Emirates",
  UNITED_KINGDOM = "United Kingdom",
  UNITED_STATES = "United States",
  URUGUAY = "Uruguay",
  UZBEKISTAN = "Uzbekistan",
  VANUATU = "Vanuatu",
  VATICAN_CITY = "Vatican City",
  VENEZUELA = "Venezuela",
  VIETNAM = "Vietnam",
  YEMEN = "Yemen",
  ZAMBIA = "Zambia",
  ZIMBABWE = "Zimbabwe",
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
  country?: typeof Country;
  issue_date?: string;
  expiry_date?: string;
}

export interface Address extends BaseTable {
  house_number: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: typeof Country;
}

export interface Person extends BaseTable {
  first_name?: string;
  last_name?: string;
  phone_number?: Array<PhoneNumber>;
  nationalities?: Array<Nationality>;
  emails?: Array<Email>;
  address?: Array<Address>;
}

export interface User extends BaseTable {
  id?: string;
  person?: Person;
  primary_email?: string;
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

export interface Employee extends BaseTable {
  designation?: string;
  user?: User;
  branch?: Branch;
  permissions?: Array<string>;
}
