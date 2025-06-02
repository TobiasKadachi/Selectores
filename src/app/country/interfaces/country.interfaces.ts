export enum Region {
  Africa  = 'Africa',
  America = 'America',
  Asia    = 'Asia',
  Europe  = 'Europe',
  Oceania = 'Oceania',

}

export interface SmallCountry{
  name   : string;
  cca3   : string;
  borders: string [];
}


export interface Country {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   { [key: string]: Currency };
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  cca3:         string;
  translations: { [key: string]: Translation };
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode:   PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currency {
  symbol: string;
  name:   string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  swe?: string;
  spa?: string;
  cat?: string;
  eus?: string;
  glc?: string;
  cnr?: string;
  deu?: string;
  fra?: string;
  nld?: string;
  bel?: string;
  rus?: string;
  por?: string;
  dan?: string;
  fao?: string;
  eng?: string;
  mlt?: string;
  ita?: string;
  lit?: string;
  gsw?: string;
  roh?: string;
  glv?: string;
  ron?: string;
  gle?: string;
  ell?: string;
  sqi?: string;
  srp?: string;
  bul?: string;
  pol?: string;
  est?: string;
  hrv?: string;
  mkd?: string;
  hun?: string;
  slk?: string;
  lat?: string;
  tur?: string;
  nfr?: string;
  fin?: string;
  isl?: string;
  lav?: string;
  bos?: string;
  nrf?: string;
  ltz?: string;
  slv?: string;
  ces?: string;
  nor?: string;
  ukr?: string;
  nno?: string;
  nob?: string;
  smi?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: null | string;
  regex:  null | string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
