import { MERCHI_SDK } from "./merchi-sdk";
import { externalUrlFor } from "@/utils/url_map";

export function uploadNewFile(event: any, updateFilesCallback: any) {
  const element = event.target;
  const files = element.files;
  const filesArray: any = [];
  const inputFiles = Array.from(files);
  let newFile: any = null;
  let fileUploaded: any = null;
  let i;

  function upload(index: number) {
    filesArray[index].onload = function (e: any) {
      fileUploaded = new MERCHI_SDK.File();
      fileUploaded.fromFormFile(inputFiles[index]);
      fileUploaded.publicCreate(
        function (createdFile: any) {
          updateFilesCallback(createdFile, true);
        },
        function (data: any) {
          // console.log(data.message);
        }
      );
    };
    filesArray[index].readAsDataURL(inputFiles[index]);
  }

  element.value = "";

  for (i = 0; i < inputFiles.length; i++) {
    newFile = new MERCHI_SDK.File();
    newFile.id(null);
    updateFilesCallback(newFile, false);
    filesArray.push(new FileReader());
    upload(i);
  }
}

/* eslint-disable no-unused-vars */
export enum alertStyle {
  info = "info",
  success = "success",
  warning = "warning",
  danger = "danger",
}
/* eslint-enable */

export function alertMessage(errorObj: any) {
  return typeof errorObj === "string"
    ? errorObj
    : errorObj.errorMessage
    ? errorObj.errorMessage
    : errorObj.message;
}

function newAlert(alertType: alertStyle, message: string, title?: string) {
  return {
    alertType: alertType,
    message: message,
    title: title ? title : alertType,
  };
}

interface AlertPayload {
  errorObj?: any;
  message: string;
  title?: string;
}

function makeErrorMessage(payload: any) {
  try {
    const errorObj = JSON.parse(payload.errorObj);
    return `Error ${errorObj.errorCode}: ${payload.message} ${errorObj.message}`;
  } catch {
    return `${payload.message} ${payload.errorObj}`;
  }
}

export function alertContent(message: string, title?: string, errotObj?: any) {
  return {
    errorObj: errotObj && errotObj.message ? errotObj.message : errotObj,
    message: message,
    title: title,
  };
}

function makeMessage(payload: any) {
  return `${payload.message}`;
}

export function errorAlertObj(payload: AlertPayload) {
  const { title = "Error!" } = payload;
  return newAlert(alertStyle.danger, makeErrorMessage(payload), title);
}

export function infoAlertObj(payload: AlertPayload) {
  const { title = "Alert!" } = payload;
  return newAlert(alertStyle.info, makeMessage(payload), title);
}

export function successAlertObj(payload: AlertPayload) {
  const { title = "Success!" } = payload;
  return newAlert(alertStyle.success, makeMessage(payload), title);
}

export function warningAlertObj(payload: AlertPayload) {
  const { title = "Warning!" } = payload;
  return newAlert(alertStyle.warning, makeMessage(payload), title);
}

export const isoCountries: any = {
  AF: "Afghanistan",
  AX: "Aland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua And Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia And Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, Democratic Republic",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Cote D'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island & Mcdonald Islands",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic Of",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle Of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KR: "Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libyan Arab Jamahiriya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States Of",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territory, Occupied",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthelemy",
  SH: "Saint Helena",
  KN: "Saint Kitts And Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre And Miquelon",
  VC: "Saint Vincent And Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome And Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia And Sandwich Isl.",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard And Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad And Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks And Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UM: "United States Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  WF: "Wallis And Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

export function addressInOneLine(address: any) {
  const a = address ? address : {};
  const { city, country, lineOne, lineTwo, postcode, state } = a;
  const l1 = lineOne ? `${lineOne} ` : "";
  const l2 = lineTwo ? `${lineTwo} ` : "";
  const c = city ? `${city} ` : "";
  const s = state ? `${state} ` : "";
  const p = postcode ? `${postcode} ` : "";
  const countryFull = country ? isoCountries[country] : "";
  return l1 + l2 + c + s + p + countryFull;
}

export const defaultProductFeature = externalUrlFor("static", {
  filename: "images/merchi-monster-blue.png",
});

export const productNotFoundUrl = externalUrlFor("static", {
  filename: "images/product-not-found.png",
});

export function productProfileUrl(product: any) {
  if (product && product.featureImage && product.featureImage.viewUrl) {
    return String(product.featureImage.viewUrl);
  }
  return defaultProductFeature;
}

export function productFeatureImageUrl(product: any, noImageSrc?: string) {
  return product!.featureImage && product!.featureImage!.viewUrl
    ? product!.featureImage!.viewUrl
    : product!.images && product!.images[0] && product!.images[0]!.viewUrl
    ? product!.images[0]!.viewUrl
    : noImageSrc
    ? noImageSrc
    : productProfileUrl(product);
}

export function toReact(component: any, context: any) {
  const fullFunctionCode =
    "with (this) { " + component.compiled + " return " + component.name + ";}";
  const proxy = new Proxy(context, {});
  const callable = new Function(fullFunctionCode);
  return callable.call(proxy);
}

export function getNextBackendUri() {
  const defaultBackendUri: string = "https://api.merchi.co/";
  const clientBackendUri =
    typeof window !== "undefined"
      ? (window as any).merchiBackendUri
      : undefined;
  // backend uri as defined on env
  // @ts-ignore
  const envBackendUri =
    typeof process !== "undefined"
      ? (process as any).env.MERCHI_BACKEND_URI
      : undefined;
  return clientBackendUri ?? envBackendUri ?? defaultBackendUri;
}

export function getNextFrontendUri() {
  // backend uri as defined on env
  // @ts-ignore
  const envPlacesKey =
    typeof process !== "undefined"
      ? (process as any).env.MERCHI_FRONTEND_URI
      : undefined;
  return envPlacesKey || "";
}

export function getNextGoogleApi() {
  // backend uri as defined on env
  // @ts-ignore
  const envPlacesKey =
    typeof process !== "undefined"
      ? (process as any).env.GOOGLE_PLACES_API_KEY
      : undefined;
  return envPlacesKey || "";
}
