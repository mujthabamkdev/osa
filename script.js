document.addEventListener("DOMContentLoaded", function () {
  const sectionDropdown = document.getElementById("sectionDropdown");
  const subsectionDropdown = document.getElementById("subsectionDropdown");
  const videoContentContainer = document.getElementById("video-content");

  const excelData = [
    {
      day: 1,
      Quran: "https://youtu.be/2fUmBu_bdNE",
      Hadees: "https://youtu.be/ISKhKn83Pus",
      Fiqh: "https://youtu.be/9I9xLJHb-ho",
      Swarf: "https://youtu.be/0GVdanuajco",
      Nahv: "https://youtu.be/oxuPuR4JyZk",
    },
    {
      day: 2,
      Quran: "https://youtu.be/_M3CqmqsTcw",
      Hadees: "https://youtu.be/xNjD7uhizCY",
      Fiqh: "https://youtu.be/17BCMXQueuo",
      Swarf: "https://youtu.be/5a2Ao-ejb-0",
      Nahv: "https://youtu.be/5KAO3bCnS6A",
    },
    {
      day: 3,
      Quran: "https://youtu.be/K_BqPOzhS6Q",
      Hadees: "https://youtu.be/brLMYRFL9gc",
      Fiqh: "https://youtu.be/k2rWiN_V_5s",
      Swarf: "https://youtu.be/VaGeRNAFPfg",
      Nahv: "https://youtu.be/uwrEX9c_Djo",
    },
    {
      day: 4,
      Quran: "https://youtu.be/UQwLqECoV3w",
      Hadees: "https://youtu.be/AqcuVJK8B0I",
      Fiqh: "https://youtu.be/_nV4SBMH_xU",
      Swarf: "https://youtu.be/TvFRHpCCEIQ",
      Nahv: "https://youtu.be/HWqc7lphkOs",
    },
    {
      day: 5,
      Quran: "https://youtu.be/XZ8fJDIaJ-0",
      Hadees: "https://youtu.be/vCGL-cI4DLw",
      Fiqh: "https://youtu.be/jYE8-Fc69mo",
      Swarf: "https://youtu.be/SkEBA4hRT4k",
      Nahv: "https://youtu.be/PGnyTGvJdes",
    },
    {
      day: 6,
      Quran: "https://youtu.be/84mbAp1UCVk",
      Hadees: "https://youtu.be/bLB-Whq_0yk",
      Fiqh: "https://youtu.be/Usj7IZhSHf8",
      Swarf: "https://youtu.be/Cec40f73AE4",
      Nahv: "https://youtu.be/Hzcd3Vg-I4g",
    },
    {
      day: 7,
      Quran: "https://youtu.be/_Bn2ShLLlVo",
      Hadees: "https://youtu.be/dPd65bXw64s",
      Fiqh: "https://youtu.be/n-jaJVR8t98",
      Swarf: "https://youtu.be/pPsjXxH29AE",
      Nahv: "https://youtu.be/oZ7v_HgiEaU",
    },
    {
      day: 8,
      Quran: "https://youtu.be/bzezuWKgPL8",
      Hadees: "https://youtu.be/GuSvfZTxHdI",
      Fiqh: "https://youtu.be/VhHfww-iVTw",
      Swarf: "https://youtu.be/9ZNiYIGnOW0",
      Nahv: "https://youtu.be/DFGmrBKANpE",
    },
    {
      day: 9,
      Quran: "https://youtu.be/SqOpIxx5XEM",
      Hadees: "https://youtu.be/9e54Q43DP9I",
      Fiqh: "https://youtu.be/afqXl5-grMQ",
      Swarf: "https://youtu.be/Yw6AtChV7VE",
      Nahv: "https://youtu.be/A5HgET3OkYA",
    },
    {
      day: 10,
      Quran: "https://youtu.be/_OUi_xByDFU",
      Hadees: "https://youtu.be/0UcgKgwihuE",
      Fiqh: "https://youtu.be/1Hb6hQJRLM4",
      Swarf: "https://youtu.be/ayciO87fmPU",
      Nahv: "https://youtu.be/d468KtX8UuI",
    },
    {
      day: 11,
      Quran: "https://youtu.be/nQqiRwQ5BxE",
      Hadees: "https://youtu.be/8hZoL-vO028",
      Fiqh: "https://youtu.be/kzV80BiRvDw",
      Swarf: "https://youtu.be/PPljBh9TqdQ",
      Nahv: "https://youtu.be/glw8n8jJdig",
    },
    {
      day: 12,
      Quran: "https://youtu.be/ZCRSZH1lN-k",
      Hadees: "https://youtu.be/thQ6aZZvvQE",
      Fiqh: "https://youtu.be/A3z7BHxAlbU",
      Swarf: "https://youtu.be/7UzGM2R5LT4",
      Nahv: "https://youtu.be/9W-1s-YnGwU",
    },
    {
      day: 13,
      Quran: "https://youtu.be/5FS1O3HMQv0",
      Hadees: "https://youtu.be/8aogaIXj0N4",
      Fiqh: "https://youtu.be/kGOzerIGnkE",
      Swarf: "https://youtu.be/NSR7itdF4hQ",
      Nahv: "https://youtu.be/T9wAxfB05fM",
    },
    {
      day: 14,
      Quran: "https://youtu.be/5KezxEf5VoY",
      Hadees: "https://youtu.be/BLHnQ0BcXNA",
      Fiqh: "https://youtu.be/VVOGw91fkUY",
      Swarf: "https://youtu.be/vavNngqStLM",
      Nahv: "https://youtu.be/W61QLlQrDhc",
    },
    {
      day: 15,
      Quran: "https://youtu.be/P-AKHcF-TMQ",
      Hadees: "https://youtu.be/5y9s7waqaTc",
      Fiqh: "https://youtu.be/YX4t9gCd3qI",
      Swarf: "https://youtu.be/y9kNEdoKLL0",
      Nahv: "https://youtu.be/BVZ2HxW1PM8",
    },
    {
      day: 16,
      Quran: "https://youtu.be/0rPflFFm4xw",
      Hadees: "https://youtu.be/BKNHKtY9qHg",
      Fiqh: "https://youtu.be/LM3OiJJudKE",
      Swarf: "https://youtu.be/2VmYF60237Y",
      Nahv: "https://youtu.be/UG6KoZB8dVk",
    },
    {
      day: 17,
      Quran: "https://youtu.be/8WClZjJVaNE",
      Hadees: "https://youtu.be/Wuv9g1TUdr0",
      Fiqh: "https://youtu.be/xsVO-sHrwQI",
      Swarf: "https://youtu.be/29CrJHRvgJs",
      Nahv: "https://youtu.be/CeDyFKMIZTY",
    },
    {
      day: 18,
      Quran: "https://youtu.be/qw_jf_S-2w0",
      Hadees: "https://youtu.be/FeJTeab1VJU",
      Fiqh: "https://youtu.be/eXsG2OkxCrU",
      Swarf: "https://youtu.be/0GpjybQOdCM",
      Nahv: "https://youtu.be/IB9AhStRX-M",
    },
    {
      day: 19,
      Quran: "https://youtu.be/RxIqnuLEOus",
      Hadees: "https://youtu.be/VcSEAf5iqrE",
      Fiqh: "https://youtu.be/ReLg01E4pRI",
      Swarf: "https://youtu.be/1-c_Y7vD_1E",
      Nahv: "https://youtu.be/hvZxYA0V3Ao",
    },
    {
      day: 20,
      Quran: "https://youtu.be/2P5fvlZg_t4",
      Hadees: "https://youtu.be/eqeC0ds-NEk",
      Fiqh: "https://youtu.be/GgXb73M8AsI",
      Swarf: "https://youtu.be/6UiXFoJjfts",
      Nahv: "https://youtu.be/nty6_lnC3u0",
    },
    {
      day: 21,
      Quran: "https://youtu.be/3yozSujo49M",
      Hadees: "https://youtu.be/Sb-kGntloAU",
      Fiqh: "https://youtu.be/Fh4k4CTsLD4",
      Swarf: "https://youtu.be/i4jkCz4PsJw",
      Nahv: "https://youtu.be/tlinTQKM4nw",
    },
    {
      day: 22,
      Quran: "",
      Hadees: "https://youtu.be/m8QjD0iRlnA",
      Fiqh: "https://youtu.be/LC0a2OF2VTw",
      Swarf: "https://youtu.be/3OniHR6MHI0",
      Nahv: "https://youtu.be/d2QJSuH-VJA",
    },
    {
      day: 23,
      Quran: "",
      Hadees: "https://youtu.be/37A3k05jakc",
      Fiqh: "https://youtu.be/_CvBkT8zSoo",
      Swarf: "https://youtu.be/LScARB7kW6Q",
      Nahv: "https://youtu.be/zbohqHMv64E",
    },
    {
      day: 24,
      Quran: "",
      Hadees: "https://youtu.be/Hqse8yO3BBw",
      Fiqh: "https://youtu.be/R8XAKgP-svM",
      Swarf: "https://youtu.be/ZB5gHV56F6A",
      Nahv: "https://youtu.be/qTG8Nrf31oo",
    },
    {
      day: 25,
      Quran: "",
      Hadees: "https://youtu.be/MCZrUpghkkU",
      Fiqh: "https://youtu.be/eVbqdKsPxz4",
      Swarf: "https://youtu.be/MLlJjUHSVX8",
      Nahv: "https://youtu.be/hAP0ztRBzsk",
    },
    {
      day: 26,
      Quran: "",
      Hadees: "https://youtu.be/3-Mdk0hvVO4",
      Fiqh: "https://youtu.be/EjbpBWL1uBI",
      Swarf: "https://youtu.be/g3nrkIHL_O0",
      Nahv: "https://youtu.be/gaKyuEBYqgQ",
    },
    {
      day: 27,
      Quran: "",
      Hadees: "https://youtu.be/p2RU32e65PE",
      Fiqh: "https://youtu.be/akBtDv9Aad4",
      Swarf: "https://youtu.be/aPqcpOxN2bU",
      Nahv: "https://youtu.be/DXDRzcdKpWY",
    },
    {
      day: 28,
      Quran: "",
      Hadees: "https://youtu.be/VA1vp39XCFs",
      Fiqh: "https://youtu.be/20HATo4tZTw",
      Swarf: "https://youtu.be/i4NGOjHIQIQ",
      Nahv: "https://youtu.be/EcyWmlC_Q-I",
    },
    {
      day: 29,
      Quran: "",
      Hadees: "https://youtu.be/Kfuq9WanaIc",
      Fiqh: "https://youtu.be/b1TWoaknU14",
      Swarf: "https://youtu.be/jN68zI5Mzs4",
      Nahv: "",
    },
    {
      day: 30,
      Quran: "",
      Hadees: "https://youtu.be/lQS3Bnhkb38",
      Fiqh: "https://youtu.be/b4dkheVOBs8",
      Swarf: "https://youtu.be/MJ8ly9",
      Nahv: "",
    },
    {
      day: 31,
      Quran: "https://youtu.be/vu2i7q4AxI4",
      Hadees: "https://youtu.be/tmM0ytLCEaM",
      Fiqh: "https://youtu.be/E-cq6w1SThg",
      Swarf: "https://youtu.be/Z-tKlkWV2T4",
      Nahv: "https://youtu.be/gKs91b0ERwo",
    },
    {
      day: 32,
      Quran: "https://youtu.be/Z-tKlkWV2T4",
      Hadees: "https://youtu.be/gKs91b0ERwo",
      Fiqh: "https://youtu.be/xJlj-Vwhsuk",
      Swarf: "https://youtu.be/NdKLSdIqveI",
      Nahv: "https://youtu.be/l2do4vXkpXM",
    },
    {
      day: 33,
      Quran: "https://youtu.be/NdKLSdIqveI",
      Hadees: "https://youtu.be/l2do4vXkpXM",
      Fiqh: "https://youtu.be/icJ2ZQif-sg",
      Swarf: "https://youtu.be/N-_OSQUME4c",
      Nahv: "https://youtu.be/SO0ag3W020g",
    },
    {
      day: 34,
      Quran: "https://youtu.be/N-_OSQUME4c",
      Hadees: "https://youtu.be/SO0ag3W020g",
      Fiqh: "https://youtu.be/OMImC3b1Thw",
      Swarf: "https://youtu.be/dAY2ZnivTa8",
      Nahv: "https://youtu.be/IQ25uMEHyYI",
    },
    {
      day: 35,
      Quran: "https://youtu.be/dAY2ZnivTa8",
      Hadees: "https://youtu.be/IQ25uMEHyYI",
      Fiqh: "https://youtu.be/63RsT75xa9A",
      Swarf: "https://youtu.be/Y2ioMMlTBJE",
      Nahv: "https://youtu.be/UG6KoZB8dVk",
    },
    {
      day: 36,
      Quran: "https://youtu.be/Y2ioMMlTBJE",
      Hadees: "https://youtu.be/UG6KoZB8dVk",
      Fiqh: "https://youtu.be/4vPLJjPExWw",
      Swarf: "https://youtu.be/ElNQehpf23M",
      Nahv: "https://youtu.be/gO8HWmmtPk8",
    },
    {
      day: 37,
      Quran: "https://youtu.be/ElNQehpf23M",
      Hadees: "https://youtu.be/gO8HWmmtPk8",
      Fiqh: "https://youtu.be/g1nrRxf2Hr4",
      Swarf: "https://youtu.be/fZt8GFZ0718",
      Nahv: "https://youtu.be/ujgK715DTng",
    },
    {
      day: 38,
      Quran: "https://youtu.be/g1nrRxf2Hr4",
      Hadees: "https://youtu.be/fZt8GFZ0718",
      Fiqh: "https://youtu.be/ujgK715DTng",
      Swarf: "https://youtu.be/PvSMxXM0t5o",
      Nahv: "https://youtu.be/2sizelS_RTI",
    },
    {
      day: 39,
      Quran: "https://youtu.be/ujgK715DTng",
      Hadees: "https://youtu.be/PvSMxXM0t5o",
      Fiqh: "https://youtu.be/2sizelS_RTI",
      Swarf: "https://youtu.be/vQ3WtsoujkQ",
      Nahv: "https://youtu.be/mRuSMnTPHsE",
    },
    {
      day: 40,
      Quran: "https://youtu.be/2sizelS_RTI",
      Hadees: "https://youtu.be/vQ3WtsoujkQ",
      Fiqh: "https://youtu.be/GgXb73M8AsI",
      Swarf: "https://youtu.be/6UiXFoJjfts",
      Nahv: "https://youtu.be/nty6_lnC3u0",
    },
    {
      day: 41,
      Quran: "https://youtu.be/mRuSMnTPHsE",
      Hadees: "https://youtu.be/C5kjMawhU1c",
      Fiqh: "https://youtu.be/qw_jf_S-2w0",
      Swarf: "https://youtu.be/FeJTeab1VJU",
      Nahv: "https://youtu.be/eXsG2OkxCrU",
    },
    {
      day: 42,
      Quran: "https://youtu.be/-6q5Etf12eM",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 43,
      Quran: "https://youtu.be/X4yfV7usuWw",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 31,
      Quran: "https://youtu.be/vu2i7q4AxI4",
      Hadees: "https://youtu.be/tmM0ytLCEaM",
      Fiqh: "https://youtu.be/E-cq6w1SThg",
      Swarf: "https://youtu.be/Z-tKlkWV2T4",
      Nahv: "https://youtu.be/gKs91b0ERwo",
    },
    {
      day: 32,
      Quran: "https://youtu.be/Z-tKlkWV2T4",
      Hadees: "https://youtu.be/gKs91b0ERwo",
      Fiqh: "https://youtu.be/xJlj-Vwhsuk",
      Swarf: "https://youtu.be/NdKLSdIqveI",
      Nahv: "https://youtu.be/l2do4vXkpXM",
    },
    {
      day: 33,
      Quran: "https://youtu.be/NdKLSdIqveI",
      Hadees: "https://youtu.be/l2do4vXkpXM",
      Fiqh: "https://youtu.be/icJ2ZQif-sg",
      Swarf: "https://youtu.be/N-_OSQUME4c",
      Nahv: "https://youtu.be/SO0ag3W020g",
    },
    {
      day: 34,
      Quran: "https://youtu.be/N-_OSQUME4c",
      Hadees: "https://youtu.be/SO0ag3W020g",
      Fiqh: "https://youtu.be/OMImC3b1Thw",
      Swarf: "https://youtu.be/dAY2ZnivTa8",
      Nahv: "https://youtu.be/IQ25uMEHyYI",
    },
    {
      day: 35,
      Quran: "https://youtu.be/dAY2ZnivTa8",
      Hadees: "https://youtu.be/IQ25uMEHyYI",
      Fiqh: "https://youtu.be/63RsT75xa9A",
      Swarf: "https://youtu.be/Y2ioMMlTBJE",
      Nahv: "https://youtu.be/UG6KoZB8dVk",
    },
    {
      day: 36,
      Quran: "https://youtu.be/Y2ioMMlTBJE",
      Hadees: "https://youtu.be/UG6KoZB8dVk",
      Fiqh: "https://youtu.be/4vPLJjPExWw",
      Swarf: "https://youtu.be/ElNQehpf23M",
      Nahv: "https://youtu.be/gO8HWmmtPk8",
    },
    {
      day: 37,
      Quran: "https://youtu.be/ElNQehpf23M",
      Hadees: "https://youtu.be/gO8HWmmtPk8",
      Fiqh: "https://youtu.be/g1nrRxf2Hr4",
      Swarf: "https://youtu.be/fZt8GFZ0718",
      Nahv: "https://youtu.be/ujgK715DTng",
    },
    {
      day: 38,
      Quran: "https://youtu.be/g1nrRxf2Hr4",
      Hadees: "https://youtu.be/fZt8GFZ0718",
      Fiqh: "https://youtu.be/ujgK715DTng",
      Swarf: "https://youtu.be/PvSMxXM0t5o",
      Nahv: "https://youtu.be/2sizelS_RTI",
    },
    {
      day: 39,
      Quran: "https://youtu.be/ujgK715DTng",
      Hadees: "https://youtu.be/PvSMxXM0t5o",
      Fiqh: "https://youtu.be/2sizelS_RTI",
      Swarf: "https://youtu.be/vQ3WtsoujkQ",
      Nahv: "https://youtu.be/mRuSMnTPHsE",
    },
    {
      day: 40,
      Quran: "https://youtu.be/2sizelS_RTI",
      Hadees: "https://youtu.be/vQ3WtsoujkQ",
      Fiqh: "https://youtu.be/GgXb73M8AsI",
      Swarf: "https://youtu.be/6UiXFoJjfts",
      Nahv: "https://youtu.be/nty6_lnC3u0",
    },
    {
      day: 41,
      Quran: "https://youtu.be/mRuSMnTPHsE",
      Hadees: "https://youtu.be/C5kjMawhU1c",
      Fiqh: "https://youtu.be/qw_jf_S-2w0",
      Swarf: "https://youtu.be/FeJTeab1VJU",
      Nahv: "https://youtu.be/eXsG2OkxCrU",
    },
    {
      day: 42,
      Quran: "https://youtu.be/-6q5Etf12eM",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 43,
      Quran: "https://youtu.be/X4yfV7usuWw",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 44,
      Quran: "https://youtu.be/rdDhRAe5rYo",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 45,
      Quran: "https://youtu.be/h9QBZuTPkV8",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 46,
      Quran: "https://youtu.be/Eos9dW5LB2I",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 47,
      Quran: "https://youtu.be/T7YGcNHcnJY",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 48,
      Quran: "https://youtu.be/zZXiQsLuBxQ",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 49,
      Quran: "https://youtu.be/ChWw5_4fbSc",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 50,
      Quran: "https://youtu.be/u-5rWkmfSWs",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 51,
      Quran: "https://youtu.be/UninD96pY4s",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 52,
      Quran: "https://youtu.be/ZERwigzwNiA",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 53,
      Quran: "https://youtu.be/RdyPYdF7w_M",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 54,
      Quran: "https://youtu.be/bhGZcJ1Epd8",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 55,
      Quran: "https://youtu.be/hlI8S1mNWCE",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 56,
      Quran: "https://youtu.be/FQLoBH2ptMM",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 57,
      Quran: "https://youtu.be/exaE1ErcfZE",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 58,
      Quran: "https://youtu.be/6Z1-Jjn3DmM",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 59,
      Quran: "https://youtu.be/LgpnXQQSyPA",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 60,
      Quran: "https://youtu.be/_irF1ko4o4M",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 61,
      Quran: "https://youtu.be/BEWWe6bHch0",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 62,
      Quran: "https://youtu.be/BEWWe6bHch0",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 63,
      Quran: "https://youtu.be/QhfQNizO-E4",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 64,
      Quran: "https://youtu.be/WTcCO_NWX8A",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 65,
      Quran: "https://youtu.be/_tWtiFTkY5k",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 66,
      Quran: "https://youtu.be/MGQ22xkUFIA",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 67,
      Quran: "https://youtu.be/3Fl1kyrY_Sk",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 68,
      Quran: "https://youtu.be/wF1vJD5DqTE",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 69,
      Quran: "https://youtu.be/UhHV-2PwLSI",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 70,
      Quran: "https://youtu.be/U2OOLyo2JWQ",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 71,
      Quran: "https://youtu.be/Kxl4orrIbIU",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 72,
      Quran: "https://youtu.be/TJyVJAXygTU",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 73,
      Quran: "https://youtu.be/IwxjxitjcxM",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 74,
      Quran: "https://youtu.be/A7ebZLKmEXQ",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 75,
      Quran: "https://youtu.be/xtiS0ccAdHU",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 76,
      Quran: "https://youtu.be/DyIxoDX37oA",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 77,
      Quran: "https://youtu.be/vS0n9L-SfEs",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 78,
      Quran: "https://youtu.be/F9kQtTC2JBM",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 79,
      Quran: "https://youtu.be/dRdsPbTOeGc",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
      Nahv: "",
    },
    {
      day: 80,
      Quran: "https://youtu.be/7lVmiMh77Po",
      Hadees: "",
      Fiqh: "",
      Swarf: "",
    },
  ];

  // Populate Section Dropdown
  excelData.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.day;
    option.textContent = `Day ${item.day}`;
    sectionDropdown.appendChild(option);
  });

  // Handle Section Dropdown Change
  sectionDropdown.addEventListener("change", function () {
    const selectedSection = parseInt(sectionDropdown.value);
    const selectedSubsections = Object.keys(excelData[selectedSection - 1]).filter(key => key !== 'day');

    // Clear Subsection Dropdown
    subsectionDropdown.innerHTML = '<option value="" disabled selected>Select Subsection</option>';

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
    const selectedVideoUrl = excelData[excelData.findIndex(item => item.day === selectedDay)][selectedSubsection];
    console.log(selectedVideoUrl);
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
});