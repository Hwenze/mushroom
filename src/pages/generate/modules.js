
export const btnList = [
    { name: 'Generate' },
    { name: 'Reset' },
    { name: 'Copy' },
    { name: 'Shuffle' },
    { name: 'Download' },
    { name: 'Clear list' }
];

export const treeData = [
    {
        title: "Asia",
        value: "2",
        key: "2",
        children: [
            { title: "Thailand", value: "th" },
            { title: "Taiwan", value: "tw" },
            { title: "Philippines", value: "ph" },
            { title: "India", value: "in" },
            { title: "South Korea", value: "kr" },
            { title: "Japan", value: "jp" },
            { title: "Malaysia", value: "my", },
            { title: "Vietnam", value: "vn" },
            { title: "Hong Kong", value: "hk" },
            { title: "Singapore", value: "sg" }
        ]
    },
    {
        title: "America",
        value: "3",
        key: "3",
        children: [
            { title: "United States", value: "us" },
            { title: "Canada", value: "ca" },
            { title: "Mexico", value: "mx" }
        ],
    },
    {
        title: "Europe",
        value: "4",
        key: "4",
        children: [
            { title: "Italy", value: "it" },
            { title: "Spain", value: "es" },
            { title: "Austria", value: "at" },
            { title: "Netherlands", value: "nl" },
            { title: "Portugal", value: "pt" },
            { title: "Russia", value: "ru" },
            { title: "Czech Republic", value: "cz" },
            { title: "France", value: "fr" },
            { title: "Luxembourg", value: "lu" },
            { title: "Poland", value: "pl" },
            { title: "Hungary", value: "hu" },
            { title: "Germany", value: "de" },
            { title: "Great Britain", value: "gb" },
            { title: "Sweden", value: "se" }
        ],
    },
    {
        title: "Oceania",
        value: "6",
        key: "6",
        children: [
            { title: "Australia", value: "au" },
            { title: "New Zealand", value: "nz" }
        ],
    },
];

export const siteData = [
    {
        title: 'YEEZY SUPPLY',
        value: 'YEEZY SUPPLY',
        key: '1'
    },
    {
        title: 'YEEZY SUPPLY Hybird',
        value: 'YEEZY SUPPLY Hybird',
        key: '23'
    },
    {
        title: 'Footsite/FLX RAFFLE',
        value: 'Footsite/FLX RAFFLE',
        key: '2'
    },
    {
        title: 'Footsite Hybird',
        value: 'Footsite Hybird',
        key: '24'
    },
    {
        title: 'Footlocker CA',
        value: 'Footlocker CA',
        key: '3'
    },
    {
        title: 'Hybrid US',
        value: 'Hybrid US',
        key: '4'
    },
    {
        title: 'Hybrid CA',
        value: 'Hybrid CA',
        key: '5'
    },
    {
        title: 'Hybrid EU',
        value: 'Hybrid EU',
        key: '6'
    },
    {
        title: 'MCT/Shopify restock',
        value: 'MCT/Shopify restock',
        key: '7'
    },
    {
        title: 'RETAIL US',
        value: 'RETAIL US',
        key: '8'
    },
    {
        title: 'RETAIL CA',
        value: 'RETAIL CA',
        key: '19'
    },
    {
        title: 'NB/DSG/PUMA/FNL',
        value: 'NB/DSG/PUMA/FNL',
        key: '9'
    },
    {
        title: 'MESH/Zalando/Courir EU',
        value: 'MESH/Zalando/Courir EU',
        key: '10'
    },
    {
        title: 'SUPREME US',
        value: 'SUPREME US',
        key: '11'
    },
    {
        title: 'SUPREME EU',
        value: 'SUPREME EU',
        key: '12'
    },
    {
        title: 'SUPREME JP',
        value: 'SUPREME JP',
        key: '13'
    },
    {
        title: 'NIKE US',
        value: 'NIKE US',
        key: '14'
    },
    {
        title: 'NIKE JP',
        value: 'NIKE JP',
        key: '15'
    },
    {
        title: 'NIKE MY',
        value: 'NIKE MY',
        key: '16'
    },
    {
        title: 'NIKE SG',
        value: 'NIKE SG',
        key: '17'
    },
    {
        title: 'NIKE PH',
        value: 'NIKE PH',
        key: '18'
    },
    {
        title: 'FOOTLOCKER AU',
        value: 'FOOTLOCKER AU',
        key: '20'
    },
    {
        title: 'FOOTLOCKER SG',
        value: 'FOOTLOCKER SG',
        key: '21'
    },
    {
        title: 'FOOTLOCKER HK',
        value: 'FOOTLOCKER HK',
        key: '22'
    }
];

export const calculateList = [
    {
        title: 'YEEZY SUPPLY',
        value: [{ 'countries': ['us'], 'proxy1Num': 1, 'proxy2Num': 0 }]
    },
    {
        title: 'YEEZY SUPPLY Hybird',
        value: [{ 'countries': ['us'], 'proxy1Num': 0.5, 'proxy2Num': 0.5 }]
    },
    {
        title: 'Footsite/FLX RAFFLE',
        value: [{ 'countries': ['us'], 'proxy1Num': 1, 'proxy2Num': 0 }]
    },
    {
        title: 'Footsite Hybird',
        value: [{ 'countries': ['us'], 'proxy1Num': 0.5, 'proxy2Num': 0.5 }]
    },
    {
        title: 'Footlocker CA',
        value: [{ 'countries': ['ca'], 'proxy1Num': 1, 'proxy2Num': 0 }]
    },
    {
        title: 'Hybrid US',
        value: [{ "countries": ["us_domain"], "proxy1Num": 0.3, "proxy2Num": 0 }, { "countries": ["us"], "proxy1Num": 0.7, "proxy2Num": 0 }]
    },
    {
        title: 'Hybrid CA',
        value: [{ "countries": ["ca_domain"], "proxy1Num": 0.3, "proxy2Num": 0 }, { "countries": ["ca"], "proxy1Num": 0.7, "proxy2Num": 0 }]
    },
    {
        title: 'Hybrid EU',
        value: [{ "countries": ["gb_domain", "it_domain", "de_domain", "fr_domain", "nl_domain", "ru_domain", "at_domain", "nl_domain", "pt_domain", "hu_domain", "pl_domain", "es_domain", "cz_domain"], "proxy1Num": 0.3, "proxy2Num": 0 }, { "countries": ["gb", "it", "de", "fr", "ru", "at", "nl", "pt", "hu", "pl", "es", "cz"], "proxy1Num": 0.7, "proxy2Num": 0 }]
    },
    {
        title: 'MCT/Shopify restock',
        value: [{ "countries": ["us"], "proxy1Num": 1, "proxy2Num": 0 }]
    },
    {
        title: 'RETAIL US',
        value: [{ "countries": ["us"], "proxy1Num": 0, "proxy2Num": 1 }]
    },
    {
        title: 'RETAIL CA',
        value: [{ "countries": ["ca"], "proxy1Num": 0, "proxy2Num": 1 }]
    },
    {
        title: 'NB/DSG/PUMA/FNL',
        value: [{ "countries": ["us"], "proxy1Num": 0.5, "proxy2Num": 0.5 }]
    },
    {
        title: 'MESH/Zalando/Courir EU',
        value: [{ "countries": ["gb", "de", "fr", "nl", "se", "it", "dk", "ru"], "proxy1Num": 1, "proxy2Num": 0 }]
    },
    {
        title: 'SUPREME US',
        value: [{ "countries": ["us_domain"], "proxy1Num": 0.5, "proxy2Num": 0 }, { "countries": ["us"], "proxy1Num": 0, "proxy2Num": 0.5 }]
    },
    {
        title: 'SUPREME EU',
        value: [{ "countries": ["gb_domain"], "proxy1Num": 0.5, "proxy2Num": 0 }, { "countries": ["gb"], "proxy1Num": 0, "proxy2Num": 0.5 }]
    },
    {
        title: 'SUPREME JP',
        value: [{ "countries": ["jp_domain"], "proxy1Num": 0.5, "proxy2Num": 0 }, { "countries": ["jp"], "proxy1Num": 0, "proxy2Num": 0.5 }]
    },
    {
        title: 'NIKE US',
        value: [{ "countries": ["us"], "proxy1Num": 0.5, "proxy2Num": 0.5 }]
    },
    {
        title: 'NIKE JP',
        value: [{ "countries": ["jp"], "proxy1Num": 0.5, "proxy2Num": 0.5 }]
    },
    {
        title: 'NIKE MY',
        value: [{ "countries": ["my"], "proxy1Num": 0.5, "proxy2Num": 0.5 }]
    },
    {
        title: 'NIKE SG',
        value: [{ "countries": ["sg"], "proxy1Num": 0.5, "proxy2Num": 0.5 }]
    },
    {
        title: 'NIKE PH',
        value: [{ "countries": ["ph"], "proxy1Num": 0.5, "proxy2Num": 0.5 }]
    },
    {
        title: 'FOOTLOCKER AU',
        value: [{ "countries": ["au"], "proxy1Num": 1, "proxy2Num": 0 }]
    },
    {
        title: 'FOOTLOCKER SG',
        value: [{ "countries": ["sg", "hk", "my", "kr"], "proxy1Num": 1, "proxy2Num": 0 }]
    },
    {
        title: 'FOOTLOCKER HK',
        value: [{ "countries": ['hk'], "proxy1Num": 1, "proxy2Num": 0 }]
    }
];
