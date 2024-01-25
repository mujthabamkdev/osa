document.addEventListener("DOMContentLoaded", function () {
  const classDropdown = document.getElementById("classDropdown");
  const sectionDropdown = document.getElementById("sectionDropdown");
  const subsectionDropdown = document.getElementById("subsectionDropdown");
  const videoContentContainer = document.getElementById("video-content");
  const excelDataClass1 = [
    {
      "Day": "1",
      "Quran": "https://youtu.be/2fUmBu_bdNE",
      "Hadees": "https://youtu.be/ISKhKn83Pus",
      "Fiqh": "https://youtu.be/9I9xLJHb-ho",
      "Swarf": "https://youtu.be/0GVdanuajco",
      "Nahv": "https://youtu.be/oxuPuR4JyZk",
      "": ""
    },
    {
      "Day": "2",
      "Quran": "https://youtu.be/_M3CqmqsTcw",
      "Hadees": "https://youtu.be/xNjD7uhizCY",
      "Fiqh": "https://youtu.be/17BCMXQueuo",
      "Swarf": "https://youtu.be/5a2Ao-ejb-0",
      "Nahv": "https://youtu.be/5KAO3bCnS6A",
      "": ""
    },
    {
      "Day": "3",
      "Quran": "https://youtu.be/K_BqPOzhS6Q",
      "Hadees": "https://youtu.be/brLMYRFL9gc",
      "Fiqh": "https://youtu.be/k2rWiN_V_5s",
      "Swarf": "https://youtu.be/VaGeRNAFPfg",
      "Nahv": "https://youtu.be/uwrEX9c_Djo",
      "": ""
    },
    {
      "Day": "4",
      "Quran": "https://youtu.be/UQwLqECoV3w",
      "Hadees": "https://youtu.be/AqcuVJK8B0I",
      "Fiqh": "https://youtu.be/_nV4SBMH_xU",
      "Swarf": "https://youtu.be/TvFRHpCCEIQ",
      "Nahv": "https://youtu.be/HWqc7lphkOs",
      "": ""
    },
    {
      "Day": "5",
      "Quran": "https://youtu.be/XZ8fJDIaJ-0",
      "Hadees": "https://youtu.be/vCGL-cI4DLw",
      "Fiqh": "https://youtu.be/jYE8-Fc69mo",
      "Swarf": "https://youtu.be/SkEBA4hRT4k",
      "Nahv": "https://youtu.be/PGnyTGvJdes",
      "": ""
    },
    {
      "Day": "6",
      "Quran": "https://youtu.be/84mbAp1UCVk",
      "Hadees": "https://youtu.be/bLB-Whq_0yk",
      "Fiqh": "https://youtu.be/Usj7IZhSHf8",
      "Swarf": "https://youtu.be/Cec40f73AE4",
      "Nahv": "https://youtu.be/Hzcd3Vg-I4g",
      "": ""
    },
    {
      "Day": "7",
      "Quran": "https://youtu.be/_Bn2ShLLlVo",
      "Hadees": "https://youtu.be/dPd65bXw64s",
      "Fiqh": "https://youtu.be/n-jaJVR8t98",
      "Swarf": "https://youtu.be/pPsjXxH29AE",
      "Nahv": "https://youtu.be/oZ7v_HgiEaU",
      "": ""
    },
    {
      "Day": "8",
      "Quran": "https://youtu.be/bzezuWKgPL8",
      "Hadees": "https://youtu.be/GuSvfZTxHdI",
      "Fiqh": "https://youtu.be/VhHfww-iVTw",
      "Swarf": "https://youtu.be/9ZNiYIGnOW0",
      "Nahv": "https://youtu.be/DFGmrBKANpE",
      "": ""
    },
    {
      "Day": "9",
      "Quran": "https://youtu.be/SqOpIxx5XEM",
      "Hadees": "https://youtu.be/9e54Q43DP9I",
      "Fiqh": "https://youtu.be/afqXl5-grMQ",
      "Swarf": "https://youtu.be/Yw6AtChV7VE",
      "Nahv": "https://youtu.be/A5HgET3OkYA",
      "": ""
    },
    {
      "Day": "10",
      "Quran": "https://youtu.be/_OUi_xByDFU",
      "Hadees": "https://youtu.be/0UcgKgwihuE",
      "Fiqh": "https://youtu.be/1Hb6hQJRLM4",
      "Swarf": "https://youtu.be/ayciO87fmPU",
      "Nahv": "https://youtu.be/d468KtX8UuI",
      "": ""
    },
    {
      "Day": "11",
      "Quran": "https://youtu.be/nQqiRwQ5BxE",
      "Hadees": "https://youtu.be/8hZoL-vO028",
      "Fiqh": "https://youtu.be/kzV80BiRvDw",
      "Swarf": "https://youtu.be/PPljBh9TqdQ",
      "Nahv": "https://youtu.be/glw8n8jJdig",
      "": ""
    },
    {
      "Day": "12",
      "Quran": "https://youtu.be/ZCRSZH1lN-k",
      "Hadees": "https://youtu.be/thQ6aZZvvQE",
      "Fiqh": "https://youtu.be/A3z7BHxAlbU",
      "Swarf": "https://youtu.be/7UzGM2R5LT4",
      "Nahv": "https://youtu.be/9W-1s-YnGwU",
      "": ""
    },
    {
      "Day": "13",
      "Quran": "https://youtu.be/5FS1O3HMQv0",
      "Hadees": "https://youtu.be/8aogaIXj0N4",
      "Fiqh": "https://youtu.be/kGOzerIGnkE",
      "Swarf": "https://youtu.be/NSR7itdF4hQ",
      "Nahv": "https://youtu.be/T9wAxfB05fM",
      "": ""
    },
    {
      "Day": "14",
      "Quran": "https://youtu.be/5KezxEf5VoY",
      "Hadees": "https://youtu.be/BLHnQ0BcXNA",
      "Fiqh": "https://youtu.be/VVOGw91fkUY",
      "Swarf": "https://youtu.be/vavNngqStLM",
      "Nahv": "https://youtu.be/W61QLlQrDhc",
      "": ""
    },
    {
      "Day": "15",
      "Quran": "https://youtu.be/P-AKHcF-TMQ",
      "Hadees": "https://youtu.be/5y9s7waqaTc",
      "Fiqh": "https://youtu.be/YX4t9gCd3qI",
      "Swarf": "https://youtu.be/y9kNEdoKLL0",
      "Nahv": "https://youtu.be/BVZ2HxW1PM8",
      "": ""
    },
    {
      "Day": "16",
      "Quran": "https://youtu.be/0rPflFFm4xw",
      "Hadees": "https://youtu.be/BKNHKtY9qHg",
      "Fiqh": "https://youtu.be/LM3OiJJudKE",
      "Swarf": "https://youtu.be/2VmYF60237Y",
      "Nahv": "https://youtu.be/UG6KoZB8dVk",
      "": ""
    },
    {
      "Day": "17",
      "Quran": "https://youtu.be/8WClZjJVaNE",
      "Hadees": "https://youtu.be/Wuv9g1TUdr0",
      "Fiqh": "https://youtu.be/xsVO-sHrwQI",
      "Swarf": "https://youtu.be/29CrJHRvgJs",
      "Nahv": "https://youtu.be/CeDyFKMIZTY",
      "": ""
    },
    {
      "Day": "18",
      "Quran": "https://youtu.be/qw_jf_S-2w0",
      "Hadees": "https://youtu.be/FeJTeab1VJU",
      "Fiqh": "https://youtu.be/eXsG2OkxCrU",
      "Swarf": "https://youtu.be/0GpjybQOdCM",
      "Nahv": "https://youtu.be/IB9AhStRX-M",
      "": ""
    },
    {
      "Day": "19",
      "Quran": "https://youtu.be/RxIqnuLEOus",
      "Hadees": "https://youtu.be/VcSEAf5iqrE",
      "Fiqh": "https://youtu.be/ReLg01E4pRI",
      "Swarf": "https://youtu.be/1-c_Y7vD_1E",
      "Nahv": "https://youtu.be/hvZxYA0V3Ao",
      "": ""
    },
    {
      "Day": "20",
      "Quran": "https://youtu.be/2P5fvlZg_t4",
      "Hadees": "https://youtu.be/eqeC0ds-NEk",
      "Fiqh": "https://youtu.be/GgXb73M8AsI",
      "Swarf": "https://youtu.be/6UiXFoJjfts",
      "Nahv": "https://youtu.be/nty6_lnC3u0",
      "": ""
    },
    {
      "Day": "21",
      "Quran": "https://youtu.be/3yozSujo49M",
      "Hadees": "https://youtu.be/Sb-kGntloAU",
      "Fiqh": "https://youtu.be/Fh4k4CTsLD4",
      "Swarf": "https://youtu.be/i4jkCz4PsJw",
      "Nahv": "https://youtu.be/tlinTQKM4nw",
      "": ""
    },
    {
      "Day": "22",
      "Quran": "",
      "Hadees": "https://youtu.be/m8QjD0iRlnA",
      "Fiqh": "https://youtu.be/LC0a2OF2VTw",
      "Swarf": "https://youtu.be/3OniHR6MHI0",
      "Nahv": "https://youtu.be/d2QJSuH-VJA",
      "": ""
    },
    {
      "Day": "23",
      "Quran": "",
      "Hadees": "https://youtu.be/37A3k05jakc",
      "Fiqh": "https://youtu.be/_CvBkT8zSoo",
      "Swarf": "https://youtu.be/LScARB7kW6Q",
      "Nahv": "https://youtu.be/zbohqHMv64E",
      "": ""
    },
    {
      "Day": "24",
      "Quran": "",
      "Hadees": "https://youtu.be/Hqse8yO3BBw",
      "Fiqh": "https://youtu.be/R8XAKgP-svM",
      "Swarf": "https://youtu.be/ZB5gHV56F6A",
      "Nahv": "https://youtu.be/qTG8Nrf31oo",
      "": ""
    },
    {
      "Day": "25",
      "Quran": "",
      "Hadees": "https://youtu.be/MCZrUpghkkU",
      "Fiqh": "https://youtu.be/eVbqdKsPxz4",
      "Swarf": "https://youtu.be/MLlJjUHSVX8",
      "Nahv": "https://youtu.be/hAP0ztRBzsk",
      "": ""
    },
    {
      "Day": "26",
      "Quran": "",
      "Hadees": "https://youtu.be/3-Mdk0hvVO4",
      "Fiqh": "https://youtu.be/EjbpBWL1uBI",
      "Swarf": "https://youtu.be/g3nrkIHL_O0",
      "Nahv": "https://youtu.be/gaKyuEBYqgQ",
      "": ""
    },
    {
      "Day": "27",
      "Quran": "",
      "Hadees": "https://youtu.be/p2RU32e65PE",
      "Fiqh": "https://youtu.be/akBtDv9Aad4",
      "Swarf": "https://youtu.be/aPqcpOxN2bU",
      "Nahv": "https://youtu.be/DXDRzcdKpWY",
      "": ""
    },
    {
      "Day": "28",
      "Quran": "",
      "Hadees": "https://youtu.be/VA1vp39XCFs",
      "Fiqh": "https://youtu.be/20HATo4tZTw",
      "Swarf": "https://youtu.be/i4NGOjHIQIQ",
      "Nahv": "https://youtu.be/EcyWmlC_Q-I",
      "": ""
    },
    {
      "Day": "29",
      "Quran": "",
      "Hadees": "https://youtu.be/Kfuq9WanaIc",
      "Fiqh": "https://youtu.be/b1TWoaknU14",
      "Swarf": "https://youtu.be/jN68zI5Mzs4",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "30",
      "Quran": "",
      "Hadees": "https://youtu.be/lQS3Bnhkb38",
      "Fiqh": "https://youtu.be/b4dkheVOBs8",
      "Swarf": "https://youtu.be/MJ8ly9MvdvE",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "31",
      "Quran": "",
      "Hadees": "https://youtu.be/vu2i7q4AxI4",
      "Fiqh": "https://youtu.be/tmM0ytLCEaM",
      "Swarf": "https://youtu.be/E-cq6w1SThg",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "32",
      "Quran": "",
      "Hadees": "https://youtu.be/Z-tKlkWV2T4",
      "Fiqh": "https://youtu.be/gKs91b0ERwo",
      "Swarf": "https://youtu.be/xJlj-Vwhsuk",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "33",
      "Quran": "",
      "Hadees": "https://youtu.be/NdKLSdIqveI",
      "Fiqh": "https://youtu.be/l2do4vXkpXM",
      "Swarf": "https://youtu.be/icJ2ZQif-sg",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "34",
      "Quran": "",
      "Hadees": "https://youtu.be/N-_OSQUME4c",
      "Fiqh": "https://youtu.be/SO0ag3W020g",
      "Swarf": "https://youtu.be/OMImC3b1Thw",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "35",
      "Quran": "",
      "Hadees": "https://youtu.be/dAY2ZnivTa8",
      "Fiqh": "https://youtu.be/IQ25uMEHyYI",
      "Swarf": "https://youtu.be/63RsT75xa9A",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "36",
      "Quran": "",
      "Hadees": "https://youtu.be/Y2ioMMlTBJE",
      "Fiqh": "https://youtu.be/ym1rMm_gh1Y",
      "Swarf": "https://youtu.be/4vPLJjPExWw",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "37",
      "Quran": "",
      "Hadees": "https://youtu.be/ElNQehpf23M",
      "Fiqh": "https://youtu.be/gO8HWmmtPk8",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "38",
      "Quran": "",
      "Hadees": "https://youtu.be/g1nrRxf2Hr4",
      "Fiqh": "https://youtu.be/fZt8GFZ0718",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "39",
      "Quran": "",
      "Hadees": "https://youtu.be/ujgK715DTng",
      "Fiqh": "https://youtu.be/PvSMxXM0t5o",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "40",
      "Quran": "",
      "Hadees": "https://youtu.be/2sizelS_RTI",
      "Fiqh": "https://youtu.be/vQ3WtsoujkQ",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "41",
      "Quran": "",
      "Hadees": "https://youtu.be/mRuSMnTPHsE",
      "Fiqh": "https://youtu.be/C5kjMawhU1c",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "42",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/-6q5Etf12eM",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "43",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/X4yfV7usuWw",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "44",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/rdDhRAe5rYo",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "45",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/h9QBZuTPkV8",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "46",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/Eos9dW5LB2I",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "47",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/T7YGcNHcnJY",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "48",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/zZXiQsLuBxQ",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "49",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/ChWw5_4fbSc",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "50",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/u-5rWkmfSWs",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "51",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/UninD96pY4s",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "52",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/ZERwigzwNiA",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "53",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/RdyPYdF7w_M",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "54",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/bhGZcJ1Epd8",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "55",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/hlI8S1mNWCE",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "56",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/FQLoBH2ptMM",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "57",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/exaE1ErcfZE",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "58",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/6Z1-Jjn3DmM",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "59",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/LgpnXQQSyPA",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "60",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/_irF1ko4o4M",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "61",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/BEWWe6bHch0",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "62",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/BEWWe6bHch0",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "63",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/QhfQNizO-E4",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "64",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/WTcCO_NWX8A",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "65",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/_tWtiFTkY5k",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "66",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/MGQ22xkUFIA",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "67",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/3Fl1kyrY_Sk",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "68",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/wF1vJD5DqTE",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "69",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/UhHV-2PwLSI",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "70",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/U2OOLyo2JWQ",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "71",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/Kxl4orrIbIU",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "72",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/TJyVJAXygTU",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "73",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/IwxjxitjcxM",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "74",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/A7ebZLKmEXQ",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "75",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/xtiS0ccAdHU",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "76",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/DyIxoDX37oA",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "77",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/vS0n9L-SfEs",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "78",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/F9kQtTC2JBM",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "79",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/dRdsPbTOeGc",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "80",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "https://youtu.be/7lVmiMh77Po",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "81",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "82",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "83",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "84",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "85",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "86",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "87",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "88",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "89",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "",
      "Swarf": "",
      "Nahv": "",
      "": ""
    },
    {
      "Day": "90",
      "Quran": "",
      "Hadees": "",
      "Fiqh": "",
      "Swarf": "",
      "Nahv": "",
      "": ""
    }
  ];

  const excelDataClass2 = [
    { Day: 1, Subject1: "VideoURL1", Subject2: "VideoURL2", Subject3: "VideoURL3" },
    // Add more entries as needed
  ];

  const excelDataClass3 = [
    { Day: 1, Subject1: "VideoURL1", Subject2: "VideoURL2", Subject3: "VideoURL3" },
    // Add more entries as needed
  ];
  // Populate Class Dropdown
  const classes = ["Class 1", "Class 2", "Class 3"]; // Add your class names here
  classes.forEach((className) => {
    const option = document.createElement("option");
    option.value = className;
    option.textContent = className;
    classDropdown.appendChild(option);
  });

  // Handle Class Dropdown Change
  classDropdown.addEventListener("change", function () {
    const selectedClass = classDropdown.value;

    // Clear Section and Subsection Dropdowns
    sectionDropdown.innerHTML = '<option value="" disabled selected>Select Day</option>';
    subsectionDropdown.innerHTML = '<option value="" disabled selected>Select Subject</option>';

    // Load data based on the selected class
    const classData = getClassData(selectedClass);

    // Populate Section Dropdown
    classData.forEach((item) => {
      const option = document.createElement("option");
      option.value = parseInt(item.Day);
      option.textContent = `Day ${item.Day}`;
      sectionDropdown.appendChild(option);
    });
  });

  // Handle Section Dropdown Change
  sectionDropdown.addEventListener("change", function () {
    const selectedSection = parseInt(sectionDropdown.value);
    const selectedSubsections = Object.keys(getClassData(classDropdown.value)[selectedSection - 1]).filter(key => key !== 'Day');

    // Clear Subsection Dropdown
    subsectionDropdown.innerHTML = '<option value="" disabled selected>Select Subject</option>';

    // Populate Subsection Dropdown
    selectedSubsections.forEach(subsection => {
      const option = document.createElement("option");
      option.value = subsection;
      option.textContent = subsection;
      subsectionDropdown.appendChild(option);
    });
  });

  // Handle Subsection Dropdown Change
  subsectionDropdown.addEventListener("change", function () {
    const selectedDay = parseInt(sectionDropdown.value);
    const selectedSubsection = subsectionDropdown.value;

    // Find the selected video URL
    const selectedVideoUrl = getClassData(classDropdown.value)[getClassData(classDropdown.value).findIndex(item => parseInt(item.Day) === selectedDay)][selectedSubsection];

    // Load the selected video
    loadYouTubeVideo(selectedVideoUrl);
  });

  function loadYouTubeVideo(videoUrl) {
    const videoId = extractVideoId(videoUrl);
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.frameborder = "0";
    iframe.allowfullscreen = true;

    // Set the iframe attributes
    if (window.innerWidth >= 768) {
      // Larger screens: Reduce width and center
      iframe.setAttribute("style", "width: 60%; margin: 0 auto; aspect-ratio: 16/9;");
    } else {
      // Smaller screens: Full width and height with 1px padding
      iframe.setAttribute("style", "width: 100%; height: 100%; aspect-ratio: 16/9;");
    }

    // Clear any previous content
    videoContentContainer.innerHTML = "";

    // Append the iframe to the video-content container
    videoContentContainer.appendChild(iframe);
  }

  function extractVideoId(url) {
    const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regex);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      console.error("Invalid YouTube URL:", url);
      return "";
    }
  }

  function getClassData(className) {
    // Replace this with your actual data retrieval logic
    switch (className) {
      case "Class 1":
        return excelDataClass1;
      case "Class 2":
        return excelDataClass2;
      case "Class 3":
        return excelDataClass3;
      default:
        return [];
    }
  }
});
