export interface FleetsOfCars {
    id: number,
    brand: string,
    modelName: string,
    yearOfMake: number,
    imageSrc: string,
    engineType: string,
    range: string,
    passengerCapacity: number,
    description: string,
    comingSoon?: boolean
}

const ListOfCars: FleetsOfCars[] = [
    {
        brand: "Denza",
        modelName: "D9",
        yearOfMake: 2025,
        imageSrc: "/cars/denza_d9.png",
        engineType: "EV",
        id: 0,
        range: "600 km",
        passengerCapacity: 7,
        description: "MPV listrik premium dengan interior luas dan fitur keselamatan canggih. Sempurna untuk perjalanan keluarga maupun transportasi eksekutif."
    },
    {
        brand: "BYD",
        modelName: "Seal",
        yearOfMake: 2025,
        imageSrc: "/cars/byd_seal.png",
        engineType: "EV",
        id: 1,
        range: "580 km",
        passengerCapacity: 5,
        description: "DSedan listrik yang dinamis dengan suspensi sport-tuned dan teknologi Blade Battery mutakhir untuk efisiensi maksimal."
    },
    {
        brand: "BYD",
        modelName: "M6",
        yearOfMake: 2025,
        imageSrc: "/cars/byd_m6.png",
        engineType: "EV",
        id: 2,
        range: "500 km",
        passengerCapacity: 7,
        description: "MPV listrik serbaguna yang dirancang untuk kebutuhan harian, menghadirkan jangkauan andal dan performa tangguh tanpa kompromi."
    },
    {
        brand: "Aletra",
        modelName: "L8",
        yearOfMake: 2025,
        imageSrc: "/cars/aletra_l8.png",
        engineType: "EV",
        id: 3,
        range: "520 km",
        passengerCapacity: 7,
        description: "SUV listrik lokal modern dengan sentuhan premium, berfokus pada kenyamanan penumpang untuk perjalanan jarak jauh yang menyenangkan."
    },
    {
        brand: "Wuling",
        modelName: "Cloud",
        yearOfMake: 2025,
        imageSrc: "/cars/wuling_cloud.png",
        engineType: "EV",
        id: 4,
        range: "460 km",
        passengerCapacity: 5,
        description: "Hatchback listrik yang ringkas dan lincah, ideal untuk perjalanan di perkotaan dengan kenyamanan interior selembut awan."
    },
    {
        brand: "Wuling",
        modelName: "Binguo",
        yearOfMake: 2025,
        imageSrc: "/cars/wuling_binguo.png",
        engineType: "EV",
        id: 5,
        range: "410 km",
        passengerCapacity: 5,
        description: "Mobil kota yang bergaya dan efisien, memadukan estetika retro dengan performa listrik modern."
    },
    {
        brand: "VinFast",
        modelName: "Nerio Green",
        yearOfMake: 2026,
        imageSrc: "/cars/vinfast_nerio.png",
        engineType: "EV",
        id: 6,
        range: "N/A",
        passengerCapacity: 4,
        description: "Penerus yang layak dari e34, disempurnakan untuk layanan e-hailing dengan kenyamanan yang ditingkatkan."
    },
    {
        brand: "Jaeco",
        modelName: "JS",
        yearOfMake: 2026,
        imageSrc: "/cars/jaeco_js.png",
        engineType: "EV",
        id: 7,
        range: "N/A",
        passengerCapacity: 7,
        description: "Penerus yang layak dari e34, disempurnakan untuk layanan e-hailing dengan kenyamanan yang ditingkatkan.",
        comingSoon: true
    }
]

export default ListOfCars