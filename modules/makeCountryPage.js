const axios = require("axios").default;
const { flag, code } = require("country-emoji");

// Dictionary to covert iso3 code to iso2 code
convert = {
  AFG: "AF",
  ALB: "AL",
  DZA: "DZ",
  ASM: "AS",
  AND: "AD",
  AGO: "AO",
  AIA: "AI",
  ATA: "AQ",
  ATG: "AG",
  ARG: "AR",
  ARM: "AM",
  ABW: "AW",
  AUS: "AU",
  AUT: "AT",
  AZE: "AZ",
  BHS: "BS",
  BHR: "BH",
  BGD: "BD",
  BRB: "BB",
  BLR: "BY",
  BEL: "BE",
  BLZ: "BZ",
  BEN: "BJ",
  BMU: "BM",
  BTN: "BT",
  BOL: "BO",
  BES: "BQ",
  BIH: "BA",
  BWA: "BW",
  BVT: "BV",
  BRA: "BR",
  IOT: "IO",
  BRN: "BN",
  BGR: "BG",
  BFA: "BF",
  BDI: "BI",
  CPV: "CV",
  KHM: "KH",
  CMR: "CM",
  CAN: "CA",
  CYM: "KY",
  CAF: "CF",
  TCD: "TD",
  CHL: "CL",
  CHN: "CN",
  CXR: "CX",
  CCK: "CC",
  COL: "CO",
  COM: "KM",
  COD: "CD",
  COG: "CG",
  COK: "CK",
  CRI: "CR",
  HRV: "HR",
  CUB: "CU",
  CUW: "CW",
  CYP: "CY",
  CZE: "CZ",
  CIV: "CI",
  DNK: "DK",
  DJI: "DJ",
  DMA: "DM",
  DOM: "DO",
  ECU: "EC",
  EGY: "EG",
  SLV: "SV",
  GNQ: "GQ",
  ERI: "ER",
  EST: "EE",
  SWZ: "SZ",
  ETH: "ET",
  FLK: "FK",
  FRO: "FO",
  FJI: "FJ",
  FIN: "FI",
  FRA: "FR",
  GUF: "GF",
  PYF: "PF",
  ATF: "TF",
  GAB: "GA",
  GMB: "GM",
  GEO: "GE",
  DEU: "DE",
  GHA: "GH",
  GIB: "GI",
  GRC: "GR",
  GRL: "GL",
  GRD: "GD",
  GLP: "GP",
  GUM: "GU",
  GTM: "GT",
  GGY: "GG",
  GIN: "GN",
  GNB: "GW",
  GUY: "GY",
  HTI: "HT",
  HMD: "HM",
  VAT: "VA",
  HND: "HN",
  HKG: "HK",
  HUN: "HU",
  ISL: "IS",
  IND: "IN",
  IDN: "ID",
  IRN: "IR",
  IRQ: "IQ",
  IRL: "IE",
  IMN: "IM",
  ISR: "IL",
  ITA: "IT",
  JAM: "JM",
  JPN: "JP",
  JEY: "JE",
  JOR: "JO",
  KAZ: "KZ",
  KEN: "KE",
  KIR: "KI",
  PRK: "KP",
  KOR: "KR",
  KWT: "KW",
  KGZ: "KG",
  LAO: "LA",
  LVA: "LV",
  LBN: "LB",
  LSO: "LS",
  LBR: "LR",
  LBY: "LY",
  LIE: "LI",
  LTU: "LT",
  LUX: "LU",
  MAC: "MO",
  MDG: "MG",
  MWI: "MW",
  MYS: "MY",
  MDV: "MV",
  MLI: "ML",
  MLT: "MT",
  MHL: "MH",
  MTQ: "MQ",
  MRT: "MR",
  MUS: "MU",
  MYT: "YT",
  MEX: "MX",
  FSM: "FM",
  MDA: "MD",
  MCO: "MC",
  MNG: "MN",
  MNE: "ME",
  MSR: "MS",
  MAR: "MA",
  MOZ: "MZ",
  MMR: "MM",
  NAM: "NA",
  NRU: "NR",
  NPL: "NP",
  NLD: "NL",
  NCL: "NC",
  NZL: "NZ",
  NIC: "NI",
  NER: "NE",
  NGA: "NG",
  NIU: "NU",
  NFK: "NF",
  MNP: "MP",
  NOR: "NO",
  OMN: "OM",
  PAK: "PK",
  PLW: "PW",
  PSE: "PS",
  PAN: "PA",
  PNG: "PG",
  PRY: "PY",
  PER: "PE",
  PHL: "PH",
  PCN: "PN",
  POL: "PL",
  PRT: "PT",
  PRI: "PR",
  QAT: "QA",
  MKD: "MK",
  ROU: "RO",
  RUS: "RU",
  RWA: "RW",
  REU: "RE",
  BLM: "BL",
  SHN: "SH",
  KNA: "KN",
  LCA: "LC",
  MAF: "MF",
  SPM: "PM",
  VCT: "VC",
  WSM: "WS",
  SMR: "SM",
  STP: "ST",
  SAU: "SA",
  SEN: "SN",
  SRB: "RS",
  SYC: "SC",
  SLE: "SL",
  SGP: "SG",
  SXM: "SX",
  SVK: "SK",
  SVN: "SI",
  SLB: "SB",
  SOM: "SO",
  ZAF: "ZA",
  SGS: "GS",
  SSD: "SS",
  ESP: "ES",
  LKA: "LK",
  SDN: "SD",
  SUR: "SR",
  SJM: "SJ",
  SWE: "SE",
  CHE: "CH",
  SYR: "SY",
  TWN: "TW",
  TJK: "TJ",
  TZA: "TZ",
  THA: "TH",
  TLS: "TL",
  TGO: "TG",
  TKL: "TK",
  TON: "TO",
  TTO: "TT",
  TUN: "TN",
  TUR: "TR",
  TKM: "TM",
  TCA: "TC",
  TUV: "TV",
  UGA: "UG",
  UKR: "UA",
  ARE: "AE",
  GBR: "GB",
  UMI: "UM",
  USA: "US",
  URY: "UY",
  UZB: "UZ",
  VUT: "VU",
  VEN: "VE",
  VNM: "VN",
  VGB: "VG",
  VIR: "VI",
  WLF: "WF",
  ESH: "EH",
  YEM: "YE",
  ZMB: "ZM",
  ZWE: "ZW",
  ALA: "AX",
};

// Get today's date
let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();

today = "2020" + "-" + mm + "-" + dd;

module.exports = (page, id) => {
  // Some Variables
  countryData = {
    name: "",
    date: "",
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    confirmed_diff: 0,
    deaths_diff: 0,
    recovered_diff: 0,
    active: 0,
    active_diff: 0,
    fatality_rate: 0.0,
  };

  // API
  const options = {
    method: "GET",
    url: "https://covid-19-statistics.p.rapidapi.com/reports",
    params: { date: "2020-04-16", iso: id },
    headers: {
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": "e53ef78ca3mshf5ddf973ab1fa48p1906bejsn8471a1a5e9a2",
    },
  };

  return axios
    .request(options)
    .then((response) => {
      countryData.name = response.data.data[0].region["name"];
      countryData.date = response.data.data[0].date;
      let size = 0;

      //console.log(response.data.data);

      response.data.data.forEach((el) => {
        size++;
        countryData.confirmed += el.confirmed;
        countryData.deaths += el.deaths;
        countryData.recovered += el.recovered;
        countryData.confirmed_diff += el.confirmed_diff;
        countryData.deaths_diff += el.deaths_diff;
        countryData.recovered_diff += el.recovered_diff;
        countryData.active += el.active;
        countryData.active_diff += el.active_diff;
        countryData.fatality_rate += el.fatality_rate;
      });

      countryData.fatality_rate /= size;
      countryData.fatality_rate =
        Math.round((countryData.fatality_rate + Number.EPSILON) * 1000) / 1000;

      let currPage = page.replace(/{%IMAGE%}/g, flag(convert[id]));
      currPage = currPage.replace(/{%COUNTRY%}/g, countryData.name);
      currPage = currPage.replace(/{%DATE%}/g, countryData.date);
      currPage = currPage.replace(/{%CON%}/g, countryData.confirmed);
      currPage = currPage.replace(/{%DEATH%}/g, countryData.deaths);
      currPage = currPage.replace(/{%REC%}/g, countryData.recovered);
      currPage = currPage.replace(/{%CON_DIFF%}/g, countryData.confirmed_diff);
      currPage = currPage.replace(/{%DEATH_DIFF%}/g, countryData.deaths_diff);
      currPage = currPage.replace(/{%REC_DIFF%}/g, countryData.recovered_diff);
      currPage = currPage.replace(/{%ACTIVE%}/g, countryData.active);
      currPage = currPage.replace(/{%ACTIVE_DIFF%}/g, countryData.active_diff);
      currPage = currPage.replace(/{%FATALITY%}/g, countryData.fatality_rate);
      currPage = currPage.replace(/{%ISO%}/g, id);

      return currPage;
    })
    .catch(function (error) {
      console.error(error);
    });
};
