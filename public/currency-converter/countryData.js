let ctryDataArr = [
    {
        currencyCode: "AED",
        currencyName: "United Arab Emirates dirham",
        flagUrl: "https://flagcdn.com/16x12/ae.png",
    },
    {
        currencyCode: "AFN",
        currencyName: "Afghan afghani",
        flagUrl: "https://flagcdn.com/16x12/af.png",
    },
    {
        currencyCode: "ALL",
        currencyName: "Albanian lek",
        flagUrl: "https://flagcdn.com/16x12/al.png",
    },
    {
        currencyCode: "AMD",
        currencyName: "Armenian dram",
        flagUrl: "https://flagcdn.com/16x12/am.png",
    },
    {
        currencyCode: "AOA",
        currencyName: "Angolan kwanza",
        flagUrl: "https://flagcdn.com/16x12/ao.png",
    },
    {
        currencyCode: "ARS",
        currencyName: "Argentine peso",
        flagUrl: "https://flagcdn.com/16x12/ar.png",
    },
    {
        currencyCode: "AUD",
        currencyName: "Australian dollar",
        flagUrl: "https://flagcdn.com/16x12/au.png",
    },
    {
        currencyCode: "AWG",
        currencyName: "Aruban florin",
        flagUrl: "https://flagcdn.com/16x12/aw.png",
    },
    {
        currencyCode: "AZN",
        currencyName: "Azerbaijani manat",
        flagUrl: "https://flagcdn.com/16x12/az.png",
    },
    {
        currencyCode: "BAM",
        currencyName: "Bosnia and Herzegovina convertible mark",
        flagUrl: "https://flagcdn.com/16x12/ba.png",
    },
    {
        currencyCode: "BBD",
        currencyName: "Barbados dollar",
        flagUrl: "https://flagcdn.com/16x12/bb.png",
    },
    {
        currencyCode: "BDT",
        currencyName: "Bangladeshi taka",
        flagUrl: "https://flagcdn.com/16x12/bd.png",
    },
    {
        currencyCode: "BGN",
        currencyName: "Bulgarian lev",
        flagUrl: "https://flagcdn.com/16x12/bg.png",
    },
    {
        currencyCode: "BHD",
        currencyName: "Bahraini dinar",
        flagUrl: "https://flagcdn.com/16x12/bh.png",
    },
    {
        currencyCode: "BIF",
        currencyName: "Burundian franc",
        flagUrl: "https://flagcdn.com/16x12/bi.png",
    },
    {
        currencyCode: "BMD",
        currencyName: "Bermudian dollar (customarily known as Bermuda dollar)",
        flagUrl: "https://flagcdn.com/16x12/bm.png",
    },
    {
        currencyCode: "BND",
        currencyName: "Brunei dollar",
        flagUrl: "https://flagcdn.com/16x12/bn.png",
    },
    {
        currencyCode: "BOB",
        currencyName: "Boliviano",
        flagUrl: "https://flagcdn.com/16x12/bo.png",
    },
    {
        currencyCode: "BRL",
        currencyName: "Brazilian real",
        flagUrl: "https://flagcdn.com/16x12/br.png",
    },
    {
        currencyCode: "BSD",
        currencyName: "Bahamian dollar",
        flagUrl: "https://flagcdn.com/16x12/bs.png",
    },
    {
        currencyCode: "BTN",
        currencyName: "Bhutanese ngultrum",
        flagUrl: "https://flagcdn.com/16x12/bt.png",
    },
    {
        currencyCode: "BWP",
        currencyName: "Botswana pula",
        flagUrl: "https://flagcdn.com/16x12/bw.png",
    },
    {
        currencyCode: "BYR",
        currencyName: "Belarusian ruble",
        flagUrl: "https://flagcdn.com/16x12/by.png",
    },
    {
        currencyCode: "BZD",
        currencyName: "Belize dollar",
        flagUrl: "https://flagcdn.com/16x12/bz.png",
    },
    {
        currencyCode: "CAD",
        currencyName: "Canadian dollar",
        flagUrl: "https://flagcdn.com/16x12/ca.png",
    },
    {
        currencyCode: "CDF",
        currencyName: "Congolese franc",
        flagUrl: "https://flagcdn.com/16x12/cd.png",
    },
    {
        currencyCode: "CHF",
        currencyName: "Swiss franc",
        flagUrl: "https://flagcdn.com/16x12/ch.png",
    },
    {
        currencyCode: "CLF",
        currencyName: "Unidad de Fomento (funds code)",
        flagUrl: "https://flagcdn.com/16x12/cl.png",
    },
    {
        currencyCode: "CLP",
        currencyName: "Chilean peso",
        flagUrl: "https://flagcdn.com/16x12/cl.png",
    },
    {
        currencyCode: "CNY",
        currencyName: "Chinese yuan",
        flagUrl: "https://flagcdn.com/16x12/cn.png",
    },
    {
        currencyCode: "COP",
        currencyName: "Colombian peso",
        flagUrl: "https://flagcdn.com/16x12/co.png",
    },
    {
        currencyCode: "CRC",
        currencyName: "Costa Rican colon",
        flagUrl: "https://flagcdn.com/16x12/cr.png",
    },
    {
        currencyCode: "CUC",
        currencyName: "Cuban convertible peso",
        flagUrl: "https://flagcdn.com/16x12/cu.png",
    },
    {
        currencyCode: "CUP",
        currencyName: "Cuban peso",
        flagUrl: "https://flagcdn.com/16x12/cu.png",
    },
    {
        currencyCode: "CVE",
        currencyName: "Cape Verde escudo",
        flagUrl: "https://flagcdn.com/16x12/cv.png",
    },
    {
        currencyCode: "CZK",
        currencyName: "Czech koruna",
        flagUrl: "https://flagcdn.com/16x12/cz.png",
    },
    {
        currencyCode: "DJF",
        currencyName: "Djiboutian franc",
        flagUrl: "https://flagcdn.com/16x12/dj.png",
    },
    {
        currencyCode: "DKK",
        currencyName: "Danish krone",
        flagUrl: "https://flagcdn.com/16x12/dk.png",
    },
    {
        currencyCode: "DOP",
        currencyName: "Dominican peso",
        flagUrl: "https://flagcdn.com/16x12/do.png",
    },
    {
        currencyCode: "DZD",
        currencyName: "Algerian dinar",
        flagUrl: "https://flagcdn.com/16x12/dz.png",
    },
    {
        currencyCode: "EGP",
        currencyName: "Egyptian pound",
        flagUrl: "https://flagcdn.com/16x12/eg.png",
    },
    {
        currencyCode: "ERN",
        currencyName: "Eritrean nakfa",
        flagUrl: "https://flagcdn.com/16x12/er.png",
    },
    {
        currencyCode: "ETB",
        currencyName: "Ethiopian birr",
        flagUrl: "https://flagcdn.com/16x12/et.png",
    },
    {
        currencyCode: "EUR",
        currencyName: "Euro",
        flagUrl: "https://flagcdn.com/16x12/eu.png",
    },
    {
        currencyCode: "FJD",
        currencyName: "Fiji dollar",
        flagUrl: "https://flagcdn.com/16x12/fj.png",
    },
    {
        currencyCode: "FKP",
        currencyName: "Falkland Islands pound",
        flagUrl: "https://flagcdn.com/16x12/fk.png",
    },
    {
        currencyCode: "GBP",
        currencyName: "Pound sterling",
        flagUrl: "https://flagcdn.com/16x12/gb.png",
    },
    {
        currencyCode: "GEL",
        currencyName: "Georgian lari",
        flagUrl: "https://flagcdn.com/16x12/ge.png",
    },
    {
        currencyCode: "GHS",
        currencyName: "Ghanaian cedi",
        flagUrl: "https://flagcdn.com/16x12/gh.png",
    },
    {
        currencyCode: "GIP",
        currencyName: "Gibraltar pound",
        flagUrl: "https://flagcdn.com/16x12/gi.png",
    },
    {
        currencyCode: "GMD",
        currencyName: "Gambian dalasi",
        flagUrl: "https://flagcdn.com/16x12/gm.png",
    },
    {
        currencyCode: "GNF",
        currencyName: "Guinean franc",
        flagUrl: "https://flagcdn.com/16x12/gn.png",
    },
    {
        currencyCode: "GTQ",
        currencyName: "Guatemalan quetzal",
        flagUrl: "https://flagcdn.com/16x12/gt.png",
    },
    {
        currencyCode: "GYD",
        currencyName: "Guyanese dollar",
        flagUrl: "https://flagcdn.com/16x12/gy.png",
    },
    {
        currencyCode: "HKD",
        currencyName: "Hong Kong dollar",
        flagUrl: "https://flagcdn.com/16x12/hk.png",
    },
    {
        currencyCode: "HNL",
        currencyName: "Honduran lempira",
        flagUrl: "https://flagcdn.com/16x12/hn.png",
    },
    {
        currencyCode: "HRK",
        currencyName: "Croatian kuna",
        flagUrl: "https://flagcdn.com/16x12/hr.png",
    },
    {
        currencyCode: "HTG",
        currencyName: "Haitian gourde",
        flagUrl: "https://flagcdn.com/16x12/ht.png",
    },
    {
        currencyCode: "HUF",
        currencyName: "Hungarian forint",
        flagUrl: "https://flagcdn.com/16x12/hu.png",
    },
    {
        currencyCode: "IDR",
        currencyName: "Indonesian rupiah",
        flagUrl: "https://flagcdn.com/16x12/id.png",
    },
    {
        currencyCode: "ILS",
        currencyName: "Israeli new shekel",
        flagUrl: "https://flagcdn.com/16x12/il.png",
    },
    {
        currencyCode: "INR",
        currencyName: "Indian rupee",
        flagUrl: "https://flagcdn.com/16x12/in.png",
    },
    {
        currencyCode: "IQD",
        currencyName: "Iraqi dinar",
        flagUrl: "https://flagcdn.com/16x12/iq.png",
    },
    {
        currencyCode: "IRR",
        currencyName: "Iranian rial",
        flagUrl: "https://flagcdn.com/16x12/ir.png",
    },
    {
        currencyCode: "ISK",
        currencyName: "Icelandic króna",
        flagUrl: "https://flagcdn.com/16x12/is.png",
    },
    {
        currencyCode: "JMD",
        currencyName: "Jamaican dollar",
        flagUrl: "https://flagcdn.com/16x12/jm.png",
    },
    {
        currencyCode: "JOD",
        currencyName: "Jordanian dinar",
        flagUrl: "https://flagcdn.com/16x12/jo.png",
    },
    {
        currencyCode: "JPY",
        currencyName: "Japanese yen",
        flagUrl: "https://flagcdn.com/16x12/jp.png",
    },
    {
        currencyCode: "KES",
        currencyName: "Kenyan shilling",
        flagUrl: "https://flagcdn.com/16x12/ke.png",
    },
    {
        currencyCode: "KGS",
        currencyName: "Kyrgyzstani som",
        flagUrl: "https://flagcdn.com/16x12/kg.png",
    },
    {
        currencyCode: "KHR",
        currencyName: "Cambodian riel",
        flagUrl: "https://flagcdn.com/16x12/kh.png",
    },
    {
        currencyCode: "KMF",
        currencyName: "Comoro franc",
        flagUrl: "https://flagcdn.com/16x12/km.png",
    },
    {
        currencyCode: "KPW",
        currencyName: "North Korean won",
        flagUrl: "https://flagcdn.com/16x12/kp.png",
    },
    {
        currencyCode: "KRW",
        currencyName: "South Korean won",
        flagUrl: "https://flagcdn.com/16x12/kr.png",
    },
    {
        currencyCode: "KWD",
        currencyName: "Kuwaiti dinar",
        flagUrl: "https://flagcdn.com/16x12/kw.png",
    },
    {
        currencyCode: "KYD",
        currencyName: "Cayman Islands dollar",
        flagUrl: "https://flagcdn.com/16x12/ky.png",
    },
    {
        currencyCode: "KZT",
        currencyName: "Kazakhstani tenge",
        flagUrl: "https://flagcdn.com/16x12/kz.png",
    },
    {
        currencyCode: "LAK",
        currencyName: "Lao kip",
        flagUrl: "https://flagcdn.com/16x12/la.png",
    },
    {
        currencyCode: "LBP",
        currencyName: "Lebanese pound",
        flagUrl: "https://flagcdn.com/16x12/lb.png",
    },
    {
        currencyCode: "LKR",
        currencyName: "Sri Lankan rupee",
        flagUrl: "https://flagcdn.com/16x12/lk.png",
    },
    {
        currencyCode: "LRD",
        currencyName: "Liberian dollar",
        flagUrl: "https://flagcdn.com/16x12/lr.png",
    },
    {
        currencyCode: "LSL",
        currencyName: "Lesotho loti",
        flagUrl: "https://flagcdn.com/16x12/ls.png",
    },
    {
        currencyCode: "LTL",
        currencyName: "Lithuanian litas",
        flagUrl: "https://flagcdn.com/16x12/lt.png",
    },
    {
        currencyCode: "LVL",
        currencyName: "Latvian lats",
        flagUrl: "https://flagcdn.com/16x12/lv.png",
    },
    {
        currencyCode: "LYD",
        currencyName: "Libyan dinar",
        flagUrl: "https://flagcdn.com/16x12/ly.png",
    },
    {
        currencyCode: "MAD",
        currencyName: "Moroccan dirham",
        flagUrl: "https://flagcdn.com/16x12/ma.png",
    },
    {
        currencyCode: "MDL",
        currencyName: "Moldovan leu",
        flagUrl: "https://flagcdn.com/16x12/md.png",
    },
    {
        currencyCode: "MGA",
        currencyName: "Malagasy ariary",
        flagUrl: "https://flagcdn.com/16x12/mg.png",
    },
    {
        currencyCode: "MKD",
        currencyName: "Macedonian denar",
        flagUrl: "https://flagcdn.com/16x12/mk.png",
    },
    {
        currencyCode: "MMK",
        currencyName: "Myanma kyat",
        flagUrl: "https://flagcdn.com/16x12/mm.png",
    },
    {
        currencyCode: "MNT",
        currencyName: "Mongolian tugrik",
        flagUrl: "https://flagcdn.com/16x12/mn.png",
    },
    {
        currencyCode: "MOP",
        currencyName: "Macanese pataca",
        flagUrl: "https://flagcdn.com/16x12/mo.png",
    },
    {
        currencyCode: "MRO",
        currencyName: "Mauritanian ouguiya",
        flagUrl: "https://flagcdn.com/16x12/mr.png",
    },
    {
        currencyCode: "MUR",
        currencyName: "Mauritian rupee",
        flagUrl: "https://flagcdn.com/16x12/mu.png",
    },
    {
        currencyCode: "MVR",
        currencyName: "Maldivian rufiyaa",
        flagUrl: "https://flagcdn.com/16x12/mv.png",
    },
    {
        currencyCode: "MWK",
        currencyName: "Malawian kwacha",
        flagUrl: "https://flagcdn.com/16x12/mw.png",
    },
    {
        currencyCode: "MXN",
        currencyName: "Mexican peso",
        flagUrl: "https://flagcdn.com/16x12/mx.png",
    },
    {
        currencyCode: "MYR",
        currencyName: "Malaysian ringgit",
        flagUrl: "https://flagcdn.com/16x12/my.png",
    },
    {
        currencyCode: "MZN",
        currencyName: "Mozambican metical",
        flagUrl: "https://flagcdn.com/16x12/mz.png",
    },
    {
        currencyCode: "NAD",
        currencyName: "Namibian dollar",
        flagUrl: "https://flagcdn.com/16x12/na.png",
    },
    {
        currencyCode: "NGN",
        currencyName: "Nigerian naira",
        flagUrl: "https://flagcdn.com/16x12/ng.png",
    },
    {
        currencyCode: "NIO",
        currencyName: "Nicaraguan córdoba",
        flagUrl: "https://flagcdn.com/16x12/ni.png",
    },
    {
        currencyCode: "NOK",
        currencyName: "Norwegian krone",
        flagUrl: "https://flagcdn.com/16x12/no.png",
    },
    {
        currencyCode: "NPR",
        currencyName: "Nepalese rupee",
        flagUrl: "https://flagcdn.com/16x12/np.png",
    },
    {
        currencyCode: "NZD",
        currencyName: "New Zealand dollar",
        flagUrl: "https://flagcdn.com/16x12/nz.png",
    },
    {
        currencyCode: "OMR",
        currencyName: "Omani rial",
        flagUrl: "https://flagcdn.com/16x12/om.png",
    },
    {
        currencyCode: "PAB",
        currencyName: "Panamanian balboa",
        flagUrl: "https://flagcdn.com/16x12/pa.png",
    },
    {
        currencyCode: "PEN",
        currencyName: "Peruvian nuevo sol",
        flagUrl: "https://flagcdn.com/16x12/pe.png",
    },
    {
        currencyCode: "PGK",
        currencyName: "Papua New Guinean kina",
        flagUrl: "https://flagcdn.com/16x12/pg.png",
    },
    {
        currencyCode: "PHP",
        currencyName: "Philippine peso",
        flagUrl: "https://flagcdn.com/16x12/ph.png",
    },
    {
        currencyCode: "PKR",
        currencyName: "Pakistani rupee",
        flagUrl: "https://flagcdn.com/16x12/pk.png",
    },
    {
        currencyCode: "PLN",
        currencyName: "Polish złoty",
        flagUrl: "https://flagcdn.com/16x12/pl.png",
    },
    {
        currencyCode: "PYG",
        currencyName: "Paraguayan guaraní",
        flagUrl: "https://flagcdn.com/16x12/py.png",
    },
    {
        currencyCode: "QAR",
        currencyName: "Qatari riyal",
        flagUrl: "https://flagcdn.com/16x12/qa.png",
    },
    {
        currencyCode: "RON",
        currencyName: "Romanian new leu",
        flagUrl: "https://flagcdn.com/16x12/ro.png",
    },
    {
        currencyCode: "RSD",
        currencyName: "Serbian dinar",
        flagUrl: "https://flagcdn.com/16x12/rs.png",
    },
    {
        currencyCode: "RUB",
        currencyName: "Russian rouble",
        flagUrl: "https://flagcdn.com/16x12/ru.png",
    },
    {
        currencyCode: "RWF",
        currencyName: "Rwandan franc",
        flagUrl: "https://flagcdn.com/16x12/rw.png",
    },
    {
        currencyCode: "SAR",
        currencyName: "Saudi riyal",
        flagUrl: "https://flagcdn.com/16x12/sa.png",
    },
    {
        currencyCode: "SBD",
        currencyName: "Solomon Islands dollar",
        flagUrl: "https://flagcdn.com/16x12/sb.png",
    },
    {
        currencyCode: "SCR",
        currencyName: "Seychelles rupee",
        flagUrl: "https://flagcdn.com/16x12/sc.png",
    },
    {
        currencyCode: "SDG",
        currencyName: "Sudanese pound",
        flagUrl: "https://flagcdn.com/16x12/sd.png",
    },
    {
        currencyCode: "SEK",
        currencyName: "Swedish krona/kronor",
        flagUrl: "https://flagcdn.com/16x12/se.png",
    },
    {
        currencyCode: "SGD",
        currencyName: "Singapore dollar",
        flagUrl: "https://flagcdn.com/16x12/sg.png",
    },
    {
        currencyCode: "SHP",
        currencyName: "Saint Helena pound",
        flagUrl: "https://flagcdn.com/16x12/sh.png",
    },
    {
        currencyCode: "SLL",
        currencyName: "Sierra Leonean leone",
        flagUrl: "https://flagcdn.com/16x12/sl.png",
    },
    {
        currencyCode: "SOS",
        currencyName: "Somali shilling",
        flagUrl: "https://flagcdn.com/16x12/so.png",
    },
    {
        currencyCode: "SRD",
        currencyName: "Surinamese dollar",
        flagUrl: "https://flagcdn.com/16x12/sr.png",
    },
    {
        currencyCode: "STD",
        currencyName: "São Tomé and Príncipe dobra",
        flagUrl: "https://flagcdn.com/16x12/st.png",
    },
    {
        currencyCode: "SYP",
        currencyName: "Syrian pound",
        flagUrl: "https://flagcdn.com/16x12/sy.png",
    },
    {
        currencyCode: "SZL",
        currencyName: "Swazi lilangeni",
        flagUrl: "https://flagcdn.com/16x12/sz.png",
    },
    {
        currencyCode: "THB",
        currencyName: "Thai baht",
        flagUrl: "https://flagcdn.com/16x12/th.png",
    },
    {
        currencyCode: "TJS",
        currencyName: "Tajikistani somoni",
        flagUrl: "https://flagcdn.com/16x12/tj.png",
    },
    {
        currencyCode: "TMT",
        currencyName: "Turkmenistani manat",
        flagUrl: "https://flagcdn.com/16x12/tm.png",
    },
    {
        currencyCode: "TND",
        currencyName: "Tunisian dinar",
        flagUrl: "https://flagcdn.com/16x12/tn.png",
    },
    {
        currencyCode: "TOP",
        currencyName: "Tongan paʻanga",
        flagUrl: "https://flagcdn.com/16x12/to.png",
    },
    {
        currencyCode: "TRY",
        currencyName: "Turkish lira",
        flagUrl: "https://flagcdn.com/16x12/tr.png",
    },
    {
        currencyCode: "TTD",
        currencyName: "Trinidad and Tobago dollar",
        flagUrl: "https://flagcdn.com/16x12/tt.png",
    },
    {
        currencyCode: "TWD",
        currencyName: "New Taiwan dollar",
        flagUrl: "https://flagcdn.com/16x12/tw.png",
    },
    {
        currencyCode: "TZS",
        currencyName: "Tanzanian shilling",
        flagUrl: "https://flagcdn.com/16x12/tz.png",
    },
    {
        currencyCode: "UAH",
        currencyName: "Ukrainian hryvnia",
        flagUrl: "https://flagcdn.com/16x12/ua.png",
    },
    {
        currencyCode: "UGX",
        currencyName: "Ugandan shilling",
        flagUrl: "https://flagcdn.com/16x12/ug.png",
    },
    {
        currencyCode: "USD",
        currencyName: "United States dollar",
        flagUrl: "https://flagcdn.com/16x12/us.png",
    },
    {
        currencyCode: "UYU",
        currencyName: "Uruguayan peso",
        flagUrl: "https://flagcdn.com/16x12/uy.png",
    },
    {
        currencyCode: "UZS",
        currencyName: "Uzbekistan som",
        flagUrl: "https://flagcdn.com/16x12/uz.png",
    },
    {
        currencyCode: "VND",
        currencyName: "Vietnamese dong",
        flagUrl: "https://flagcdn.com/16x12/vn.png",
    },
    {
        currencyCode: "VUV",
        currencyName: "Vanuatu vatu",
        flagUrl: "https://flagcdn.com/16x12/vu.png",
    },
    {
        currencyCode: "WST",
        currencyName: "Samoan tala",
        flagUrl: "https://flagcdn.com/16x12/ws.png",
    },
    {
        currencyCode: "YER",
        currencyName: "Yemeni rial",
        flagUrl: "https://flagcdn.com/16x12/ye.png",
    },
    {
        currencyCode: "ZAR",
        currencyName: "South African rand",
        flagUrl: "https://flagcdn.com/16x12/za.png",
    },
    {
        currencyCode: "ZMW",
        currencyName: "Zambian kwacha",
        flagUrl: "https://flagcdn.com/16x12/zm.png",
    },
    {
        currencyCode: "1INCH",
        currencyName: "1inch Network",
        flagUrl: null,
    },
    {
        currencyCode: "AAVE",
        currencyName: "Aave",
        flagUrl: null,
    },
    {
        currencyCode: "ADA",
        currencyName: "Cardano",
        flagUrl: null,
    },
    {
        currencyCode: "ALGO",
        currencyName: "Algorand",
        flagUrl: null,
    },
    {
        currencyCode: "AMP",
        currencyName: "Synereo",
        flagUrl: null,
    },
    {
        currencyCode: "ANG",
        currencyName: "Netherlands Antillean Guilder",
        flagUrl: null,
    },
    {
        currencyCode: "AR",
        currencyName: "Arweave",
        flagUrl: null,
    },
    {
        currencyCode: "ATOM",
        currencyName: "Atomic Coin",
        flagUrl: null,
    },
    {
        currencyCode: "AVAX",
        currencyName: "Avalanche",
        flagUrl: null,
    },
    {
        currencyCode: "AXS",
        currencyName: "AXS",
        flagUrl: null,
    },
    {
        currencyCode: "BAT",
        currencyName: "Basic Attention Token",
        flagUrl: null,
    },
    {
        currencyCode: "BCH",
        currencyName: "Bitcoin Cash",
        flagUrl: null,
    },
    {
        currencyCode: "BNB",
        currencyName: "Binance Coin",
        flagUrl: null,
    },
    {
        currencyCode: "BSV",
        currencyName: "Bitcoin SV",
        flagUrl: null,
    },
    {
        currencyCode: "BTC",
        currencyName: "Bitcoin",
        flagUrl: null,
    },
    {
        currencyCode: "BTCB",
        currencyName: "Bitcoin BEP2",
        flagUrl: null,
    },
    {
        currencyCode: "BTG",
        currencyName: "Bitcoin Gold",
        flagUrl: null,
    },
    {
        currencyCode: "BUSD",
        currencyName: "Binance USD",
        flagUrl: null,
    },
    {
        currencyCode: "BYN",
        currencyName: "New Belarusian Ruble",
        flagUrl: null,
    },
    {
        currencyCode: "CAKE",
        currencyName: "PancakeSwap",
        flagUrl: null,
    },
    {
        currencyCode: "CELO",
        currencyName: "Celo",
        flagUrl: null,
    },
    {
        currencyCode: "CHZ",
        currencyName: "Chiliz",
        flagUrl: null,
    },
    {
        currencyCode: "COMP",
        currencyName: "Compound Coin",
        flagUrl: null,
    },
    {
        currencyCode: "CRO",
        currencyName: "Crypto.com Chain Token",
        flagUrl: null,
    },
    {
        currencyCode: "CRV",
        currencyName: "Cravy",
        flagUrl: null,
    },
    {
        currencyCode: "CVX",
        currencyName: "Convex Finance",
        flagUrl: null,
    },
    {
        currencyCode: "DAI",
        currencyName: "Dai",
        flagUrl: null,
    },
    {
        currencyCode: "DASH",
        currencyName: "Dash",
        flagUrl: null,
    },
    {
        currencyCode: "DCR",
        currencyName: "Decred",
        flagUrl: null,
    },
    {
        currencyCode: "DFI",
        currencyName: "DfiStarter",
        flagUrl: null,
    },
    {
        currencyCode: "DOGE",
        currencyName: "Dogecoin",
        flagUrl: null,
    },
    {
        currencyCode: "DOT",
        currencyName: "Dotcoin",
        flagUrl: null,
    },
    {
        currencyCode: "EGLD",
        currencyName: "Elrond",
        flagUrl: null,
    },
    {
        currencyCode: "ENJ",
        currencyName: "Enjin Coin",
        flagUrl: null,
    },
    {
        currencyCode: "EOS",
        currencyName: "EOS",
        flagUrl: null,
    },
    {
        currencyCode: "ETC",
        currencyName: "Ethereum Classic",
        flagUrl: null,
    },
    {
        currencyCode: "ETH",
        currencyName: "Ether",
        flagUrl: null,
    },
    {
        currencyCode: "FEI",
        currencyName: "Fei USD",
        flagUrl: null,
    },
    {
        currencyCode: "FIL",
        currencyName: "FileCoin",
        flagUrl: null,
    },
    {
        currencyCode: "FLOW",
        currencyName: "Flow",
        flagUrl: null,
    },
    {
        currencyCode: "FRAX",
        currencyName: "Frax",
        flagUrl: null,
    },
    {
        currencyCode: "FTM",
        currencyName: "Fantom",
        flagUrl: null,
    },
    {
        currencyCode: "FTT",
        currencyName: "FarmaTrust",
        flagUrl: null,
    },
    {
        currencyCode: "GALA",
        currencyName: "Gala",
        flagUrl: null,
    },
    {
        currencyCode: "GGP",
        currencyName: "GGPro",
        flagUrl: null,
    },
    {
        currencyCode: "GNO",
        currencyName: "Gnosis",
        flagUrl: null,
    },
    {
        currencyCode: "GRT",
        currencyName: "Golden Ratio Token",
        flagUrl: null,
    },
    {
        currencyCode: "GT",
        currencyName: "GateToken",
        flagUrl: null,
    },
    {
        currencyCode: "HBAR",
        currencyName: "Hedera",
        flagUrl: null,
    },
    {
        currencyCode: "HNT",
        currencyName: "Helium",
        flagUrl: null,
    },
    {
        currencyCode: "HOT",
        currencyName: "Hydro Protocol",
        flagUrl: null,
    },
    {
        currencyCode: "HT",
        currencyName: "Huobi Token",
        flagUrl: null,
    },
    {
        currencyCode: "ICP",
        currencyName: "Internet Computer",
        flagUrl: null,
    },
    {
        currencyCode: "IMP",
        currencyName: "CoinIMP",
        flagUrl: null,
    },
    {
        currencyCode: "INJ",
        currencyName: "Injective",
        flagUrl: null,
    },
    {
        currencyCode: "JEP",
        currencyName: "Jersey Pound",
        flagUrl: null,
    },
    {
        currencyCode: "KAVA",
        currencyName: "Kava",
        flagUrl: null,
    },
    {
        currencyCode: "KCS",
        currencyName: "Kucoin",
        flagUrl: null,
    },
    {
        currencyCode: "KDA",
        currencyName: "Kadena",
        flagUrl: null,
    },
    {
        currencyCode: "KLAY",
        currencyName: "Klaytn",
        flagUrl: null,
    },
    {
        currencyCode: "KNC",
        currencyName: "Kyber Network",
        flagUrl: null,
    },
    {
        currencyCode: "KSM",
        currencyName: "Kusama",
        flagUrl: null,
    },
    {
        currencyCode: "LEO",
        currencyName: "LEOcoin",
        flagUrl: null,
    },
    {
        currencyCode: "LINK",
        currencyName: "ChainLink",
        flagUrl: null,
    },
    {
        currencyCode: "LRC",
        currencyName: "Loopring",
        flagUrl: null,
    },
    {
        currencyCode: "LTC",
        currencyName: "Litecoin",
        flagUrl: null,
    },
    {
        currencyCode: "LUNA",
        currencyName: "Luna Coin",
        flagUrl: null,
    },
    {
        currencyCode: "MANA",
        currencyName: "Decentraland",
        flagUrl: null,
    },
    {
        currencyCode: "MATIC",
        currencyName: "Polygon",
        flagUrl: null,
    },
    {
        currencyCode: "MINA",
        currencyName: "Mina",
        flagUrl: null,
    },
    {
        currencyCode: "MIOTA",
        currencyName: "IOTA",
        flagUrl: null,
    },
    {
        currencyCode: "MKR",
        currencyName: "Maker",
        flagUrl: null,
    },
    {
        currencyCode: "NEAR",
        currencyName: "NEAR Protocol",
        flagUrl: null,
    },
    {
        currencyCode: "NEO",
        currencyName: "NEO",
        flagUrl: null,
    },
    {
        currencyCode: "NEXO",
        currencyName: "NEXO",
        flagUrl: null,
    },
    {
        currencyCode: "OKB",
        currencyName: "Okex",
        flagUrl: null,
    },
    {
        currencyCode: "ONE",
        currencyName: "Menlo One",
        flagUrl: null,
    },
    {
        currencyCode: "PAXG",
        currencyName: "PAX Gold",
        flagUrl: null,
    },
    {
        currencyCode: "QNT",
        currencyName: "Quant",
        flagUrl: null,
    },
    {
        currencyCode: "QTUM",
        currencyName: "QTUM",
        flagUrl: null,
    },
    {
        currencyCode: "RUNE",
        currencyName: "THORChain (ERC20)",
        flagUrl: null,
    },
    {
        currencyCode: "SAND",
        currencyName: "BeachCoin",
        flagUrl: null,
    },
    {
        currencyCode: "SHIB",
        currencyName: "Shiba Inu",
        flagUrl: null,
    },
    {
        currencyCode: "SOL",
        currencyName: "Sola",
        flagUrl: null,
    },
    {
        currencyCode: "STX",
        currencyName: "Stox",
        flagUrl: null,
    },
    {
        currencyCode: "SVC",
        currencyName: "Salvadoran Colón",
        flagUrl: null,
    },
    {
        currencyCode: "THETA",
        currencyName: "Theta",
        flagUrl: null,
    },
    {
        currencyCode: "TRX",
        currencyName: "TRON",
        flagUrl: null,
    },
    {
        currencyCode: "TTT",
        currencyName: "Tap Project",
        flagUrl: null,
    },
    {
        currencyCode: "TUSD",
        currencyName: "True USD",
        flagUrl: null,
    },
    {
        currencyCode: "UNI",
        currencyName: "Universe",
        flagUrl: null,
    },
    {
        currencyCode: "USDC",
        currencyName: "USD Coin",
        flagUrl: null,
    },
    {
        currencyCode: "USDP",
        currencyName: "USDP Stablecoin",
        flagUrl: null,
    },
    {
        currencyCode: "USDT",
        currencyName: "Tether",
        flagUrl: null,
    },
    {
        currencyCode: "VET",
        currencyName: "Vechain",
        flagUrl: null,
    },
    {
        currencyCode: "WAVES",
        currencyName: "Waves",
        flagUrl: null,
    },
    {
        currencyCode: "WBTC",
        currencyName: "Wrapped Bitcoin",
        flagUrl: null,
    },
    {
        currencyCode: "WEMIX",
        currencyName: "WEMIX",
        flagUrl: null,
    },
    {
        currencyCode: "XAF",
        currencyName: "Central African CFA franc",
        flagUrl: null,
    },
    {
        currencyCode: "XAG",
        currencyName: "Silver Ounce",
        flagUrl: null,
    },
    {
        currencyCode: "XAU",
        currencyName: "XauCoin",
        flagUrl: null,
    },
    {
        currencyCode: "XCD",
        currencyName: "East Caribbean dollar",
        flagUrl: null,
    },
    {
        currencyCode: "XDC",
        currencyName: "XDC Network",
        flagUrl: null,
    },
    {
        currencyCode: "XDR",
        currencyName: "Special Drawing Rights",
        flagUrl: null,
    },
    {
        currencyCode: "XEC",
        currencyName: "Eternal Coin",
        flagUrl: null,
    },
    {
        currencyCode: "XEM",
        currencyName: "NEM",
        flagUrl: null,
    },
    {
        currencyCode: "XLM",
        currencyName: "Stellar",
        flagUrl: null,
    },
    {
        currencyCode: "XMR",
        currencyName: "Monero",
        flagUrl: null,
    },
    {
        currencyCode: "XOF",
        currencyName: "West African CFA franc",
        flagUrl: null,
    },
    {
        currencyCode: "XPF",
        currencyName: "CFP franc",
        flagUrl: null,
    },
    {
        currencyCode: "XRP",
        currencyName: "XRP",
        flagUrl: null,
    },
    {
        currencyCode: "XTZ",
        currencyName: "Tezos",
        flagUrl: null,
    },
    {
        currencyCode: "ZEC",
        currencyName: "ZCash",
        flagUrl: null,
    },
    {
        currencyCode: "ZIL",
        currencyName: "Zilliqa",
        flagUrl: null,
    },
    {
        currencyCode: "ZMK",
        currencyName: "Zambian kwacha",
        flagUrl: null,
    },
    {
        currencyCode: "ZWL",
        currencyName: "Zimbabwean Dollar",
        flagUrl: null,
    },
];
