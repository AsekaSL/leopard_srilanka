import { Badge, Blog, Destination, Duration, Feature, NavLink, PackageCategory, PackageDetail, PriceRange, Service, Tab } from "@/types";
import sithulpawwa from '@/public/assests/sithulpawwa.jpg'
import magul_viharaya from '@/public/assests/Magul_viharaya.jpg'
import patanangala_Beach from '@/public/assests/Patanangala Beach.jpg'
import yala_beach from '@/public/assests/yala_beach.jpg'
import thissa_lake from '@/public/assests/thissa_lake.jpg'
import Sanctuary from '@/public/assests/Sanctuary.jpg'
import kirinda_rajamaha_viharaya from '@/public/assests/kirinda_rajamaha_viharaya.jpg'

export const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    
    { label: "Wildlife", href: "/wildlife" },
    //{ label: "Discover", href: "/discover" },
    { label: "Packages", href: "/packages" },
    //{ label: "Visitor Guide", href: "/visitor-guide" },
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    //{ label: "Destinations", href: "/#destinations" },
];

export const services: Service[] = [
    {label: 'Private Morning Safari', href: '/packages/private-inclusive-morning-safari'},
    {label: 'Private afternoon Safari', href: '/packages/private-inclusive-afternoon-safari'},
    {label: 'Private halfday Safari', href: '/packages/private-inclusive-7hour-halfday-safari'},
    {label: 'Private full-day Safari', href: '/packages/private-inclusive-full-day-safari'},
    {label: 'Shared Morning Safari', href: '/packages/shared-inclusive-morning-safari'},
    {label: 'Shared afternoon Safari', href: '/packages/shared-inclusive-afternoon-safari'},
    {label: 'Shared halfday Safari', href: '/packages/shared-inclusive-7hour-halfday-safari'},
    {label: 'Shared full-day Safari', href: '/packages/shared-inclusive-full-day-safari'},
    {label: 'Jeep only Morning Safari', href: '/packages/private-jeep-only-morning-safari'},
    {label: 'Jeep only full-day Safari', href: '/packages/private-jeep-only-full-day-safari'},
]

export const blogs: Blog[] = [
    {label: 'Yala Safari Sri Lanka', href: '/blog'},
    {label: 'The History of Yala National', href: '/blog'},
    {label: 'Park Sri Lanka', href: '/blog'},
    {label: 'The Leopard Yala Promise', href: '/blog'},
    {label: 'Yala Safari', href: '/blog'},
    {label: 'Yala National Park Animals', href: '/blog'},
    {label: 'Yala Safari Blocks', href: '/blog'},
    {label: 'Yala Safari Seasons', href: '/blog'},
    {label: 'Yala Safari Jeep', href: '/blog'},
]

export const expertiseFeatures: Feature[] = [
    {
        icon: "school",
        title: "Expert Guides",
        description: "Trained naturalists with deep knowledge.",
    },
    {
        icon: "camera_alt",
        title: "Photography Ready",
        description: "Bean bags and optimal positioning provided.",
    },
];

export const packagesData: Record<string, PackageDetail> = {

    // Private Inclusive Packages
    "private-inclusive-morning-safari": {
        id: "private-inclusive-morning-safari",
        title: "Private All-Inclusive Morning Safari",
        subtitle: "The Golden Hour Predator Quest",
        heroImage: "https://leopardyala.com/wp-content/uploads/2025/10/pexels-hsapir-1109898.jpg",
        description: "A dawn expedition designed to maximize leopard and sloth bear sightings during Yala’s most active hours. Ideal for photographers and serious wildlife enthusiasts.",
        duration: "5 Hours (05:00 AM – 11:00 AM)",
        durationCategory: Duration.MORNING,
        priceRange: PriceRange.PRICE_RANGE_100,
        jeepType: "Private 4x4 Safari Jeep",
        packageCategory: PackageCategory.PRIVATE_INCLUSIVE,
        capacity: "Max 6 Guests",
        meals: "Breakfast & Lunch Picnic",
        itinerary: [
            {
                time: "05:00 AM",
                title: "Hotel Pickup",
                description: "Pickup from nearby hotels.",
                icon: "directions_car"
            },
            {
                time: "06:00 AM",
                title: "Gate Entry",
                description: "Enter Yala at gate opening.",
                icon: "confirmation_number"
            },
            {
                time: "08:30 AM",
                title: "Breakfast Stop",
                description: "Breakfast by river or beach.",
                icon: "bakery_dining"
            },
            {
                time: "11:00 AM",
                title: "Return",
                description: "Drop-off at hotel.",
                icon: "flag"
            }
        ],
        inclusions: [
            "Private Safari Jeep",
            "Experienced Driver/Tracker",
            "Unlimited Water",
            "Breakfast"
        ],
        exclusions: [
            "Park Entrance Fees",
            "Meals",
            "Personal Expenses"
        ],
        price: {
            jeep: 100.00,
            serviceFee: 0.00,
            tax: 0.00,
            total: 100.00,
            parkFeeNote: "Included"
        },
        pricingPerPerson: [
            { label: "1 person", price: 100 },
            { label: "2 persons", price: 142 },
            { label: "3 persons", price: 192 },
            { label: "4 persons", price: 242 },
            { label: "5 persons", price: 292 },
            { label: "6 persons", price: 342 },
            { label: "children age 5 to 11", price: 26 },
            { label: "infants under 5", price: 0 },
        ],
        gallery: [
            "https://leopardyala.com/wp-content/uploads/2025/10/pexels-hsapir-1109898.jpg"
        ]
    },
    "private-inclusive-afternoon-safari": {
        id: "private-inclusive-afternoon-safari",
        title: "Private All-Inclusive Afternoon Safari",
        subtitle: "Giants of the Wild & Golden Light",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuATxZ5tkzTtgSGaxPpd1StmIopwhsKH3VXkFxt93zsWG_p5BhhSR-RH-LTP41AL7MUkqLN5HZXvsh3kbSRasE2MHK8PwUcwW9XY_CL4JXZ3MYHk8wYcYrGz-920CCb07M4_jVGv-RaoVMU7e9H6cr_KjqAQK335Irmhtw0z8TuW5awsPgUwYdTGpe3kzD4tDvTgj6k7L1-ldaPkH1gKb9h3giLM_B1SDlBAiFKSjqXOi7AezS-jsX_dYD9-d6V_HfFijuj3KmT2NFMq",
        description: "A relaxed yet thrilling afternoon safari focused on Yala’s giants and golden-hour predators. Witness majestic elephant herds at waterholes, crocodiles basking in the sun, and leopards awakening for their evening patrol. Perfect for photographers and travelers who value comfort, exclusivity, and unforgettable sunset light.",
        duration: "4.5 Hours (01:30 PM – 06:00 PM)",
        durationCategory: Duration.AFTERNOON,
        priceRange: PriceRange.PRICE_RANGE_100,
        jeepType: "Private Open-Air 4x4 Safari Jeep",
        packageCategory: PackageCategory.PRIVATE_INCLUSIVE,
        badge: Badge.POPULAR,
        capacity: "Max 6 Guests",
        meals: "Afternoon Snacks & Refreshments",
        itinerary:[
            {
            time: "01:30 PM",
            title: "Hotel Pickup",
            description:
                "Pickup from hotels in Tissamaharama, Kirinda, or Kataragama after a relaxed lunch.",
            icon: "directions_car"
            },
            {
            time: "02:15 PM",
            title: "Arrive at Park Gate",
            description:
                "Arrival at the Palatupana (Block 1) entrance while scanning shaded forest edges.",
            icon: "confirmation_number"
            },
            {
            time: "02:30 PM",
            title: "Park Entry & Waterhole Circuit",
            description:
                "Explore large tanks such as Maha Seelawawa as elephants emerge to drink and bathe.",
            icon: "water"
            },
            {
            time: "04:00 PM",
            title: "Golden Hour Safari",
            description:
                "Perfect sunset lighting for photographing elephants, leopards, and birdlife.",
            icon: "photo_camera"
            },
            {
            time: "05:00 PM",
            title: "Late Predator Activity",
            description:
                "Leopards become active, often descending from trees to patrol jeep tracks.",
            icon: "pets"
            },
            {
            time: "06:00 PM",
            title: "Sunset Exit & Return",
            description:
                "Exit the park at sunset and return to your hotel by approximately 06:30 PM.",
            icon: "flag"
            }
        ],
        inclusions: [
            "Private 4x4 Safari Jeep",
            "Professional Driver-Tracker",
            "DWC Park Entrance Fees",
            "Afternoon Snacks & Refreshments",
            "Chilled Bottled Water",
            "Ice Box Onboard"
        ],
        exclusions: [
            "Personal Expenses",
            "Tips & Gratuities"
        ],
        price: {
            jeep: 100.0,
            serviceFee: 0.0,
            tax: 0.0,
            total: 100.0,
            parkFeeNote: "All park entrance fees included"
        },
        pricingPerPerson: [
            { label: "1 person", price: 100 },
            { label: "2 persons", price: 142 },
            { label: "3 persons", price: 192 },
            { label: "4 persons", price: 242 },
            { label: "5 persons", price: 292 },
            { label: "6 persons", price: 342 },
            { label: "children age 5 to 11", price: 26 },
            { label: "infants under 5", price: 0 }
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuATxZ5tkzTtgSGaxPpd1StmIopwhsKH3VXkFxt93zsWG_p5BhhSR-RH-LTP41AL7MUkqLN5HZXvsh3kbSRasE2MHK8PwUcwW9XY_CL4JXZ3MYHk8wYcYrGz-920CCb07M4_jVGv-RaoVMU7e9H6cr_KjqAQK335Irmhtw0z8TuW5awsPgUwYdTGpe3kzD4tDvTgj6k7L1-ldaPkH1gKb9h3giLM_B1SDlBAiFKSjqXOi7AezS-jsX_dYD9-d6V_HfFijuj3KmT2NFMq"
        ]
    },
    "private-inclusive-7hour-halfday-safari": {
        id: "private-inclusive-7hour-halfday-safari",
        title: "Private All-Inclusive 7-Hour Half-Day Safari",
        subtitle: "The Predator Quest: Extended Morning & Midday Expedition",
        heroImage: "https://leopardyala.com/wp-content/uploads/2025/10/pexels-aabrewerphoto-13046138-2.webp",
        description: "Engineered for serious wildlife enthusiasts and photographers, this extended 7-hour safari covers Yala’s peak predator hours and the quiet mid-morning window. As most jeeps exit the park, you gain rare access to peaceful tracking conditions—ideal for witnessing elusive sloth bears, leopard behavior, and undisturbed wildlife interactions.",
        duration: "7 Hours (05:00 AM – 12:30 PM)",
        durationCategory: Duration.HALFDAY,
        priceRange: PriceRange.PRICE_RANGE_150,
        jeepType: "Private Premium 4x4 Safari Jeep",
        packageCategory: PackageCategory.PRIVATE_INCLUSIVE,
        capacity: "Max 6 Guests",
        meals: "Extended Picnic Breakfast",

        itinerary: [
            {
                time: "05:00 AM",
                title: "Early Hotel Pickup",
                description:
                    "Early pickup to secure a leading position at the park gate and track fresh predator signs.",
                icon: "directions_car"
            },
            {
                time: "06:00 AM – 09:30 AM",
                title: "High-Intensity Predator Tracking",
                description:
                    "Focused leopard and sloth bear tracking across the core areas of Block 1.",
                icon: "pets"
            },
            {
                time: "09:30 AM – 10:15 AM",
                title: "Beach / River Breakfast",
                description:
                    "Relaxed gourmet picnic breakfast at Patanangala Beach or Manik River.",
                icon: "bakery_dining"
            },
            {
                time: "10:15 AM – 12:00 PM",
                title: "Exclusive Midday Window",
                description:
                    "Explore deeper forest loops and Block 5 corridors as the park empties.",
                icon: "forest"
            },
            {
                time: "12:00 PM – 12:30 PM",
                title: "Return & Drop-Off",
                description:
                    "Exit the park before peak heat and return to your hotel.",
                icon: "flag"
            }
            ],

            inclusions: [
                "Private 4x4 Safari Jeep (7 Hours)",
                "Naturalist Driver-Tracker",
                "DWC Park Entrance Fees",
                "Extended Picnic Breakfast",
                "Unlimited Bottled Water",
                "Chilled Refreshments"
            ],

            exclusions: [
                "Personal Expenses",
                "Tips & Gratuities"
            ],

            price: {
                jeep: 140.0,
                serviceFee: 0.0,
                tax: 0.0,
                total: 140.0,
                parkFeeNote: "All park entrance fees included"
            },

            pricingPerPerson: [
                { label: "1 person", price: 140 },
                { label: "2 persons", price: 175 },
                { label: "3 persons", price: 225 },
                { label: "4 persons", price: 275 },
                { label: "5 persons", price: 325 },
                { label: "6 persons", price: 375 },
                { label: "children age 5 to 11", price: 26 },
                { label: "infants under 5", price: 0 }
            ],

            gallery: [
                "https://leopardyala.com/wp-content/uploads/2025/10/pexels-aabrewerphoto-13046138-2.webp"
            ]
    },
    "private-inclusive-full-day-safari": {
    id: "private-inclusive-full-day-safari",
    title: "Private All-Inclusive Full-Day Safari",
    subtitle: "The Ultimate Dawn-to-Dusk Expedition: 13 Hours in the Wild",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq3awyX_tXw1z-IS3cCe1rDSGXTn-GOCn5MbpvuVGCrX8zPu7y6HjocOqKkqnNVol837eKWPZ6ngh3JlkkmPysx4dj_gVQSD0f-e36snrKBHBQufUfS4YaZpbL0q5a6qLK6teDMT8z7eLXdjWeQCGI225oVnqdKpIVuWDPIEqzVEuhfyQQOHRX7bwYMYYHibXYhj-0oJcBlM2Sb7u9cUE66EZvL5QTNrdLWQX7lYWvscrH0Vz1M-coKzUk1_u8SYZsANjkGny77S9K",

    description:
        "Our most prestigious and immersive safari experience, designed for wilderness connoisseurs and professional photographers. This 13-hour expedition follows the full ecological rhythm of Yala National Park—from dawn predator hunts to golden-hour leopard patrols—allowing deep exploration of Block 1, Block 5, and the borders of Lunugamvehera (Block 6).",

    duration: "13 Hours (05:00 AM – 06:30 PM)",
    jeepType: "Private Premium 4x4 Safari Jeep",
    packageCategory: PackageCategory.PRIVATE_INCLUSIVE,
    priceRange: PriceRange.PRICE_RANGE_200,
    durationCategory: Duration.FULLDAY,
    badge: Badge.TOP_SELLER,
    capacity: "Max 6 Guests",
    meals: "Picnic Breakfast, Hot Picnic Lunch & Afternoon Fruits",

    itinerary: [
        {
        time: "05:00 AM",
        title: "Pre-Dawn Hotel Pickup",
        description:
            "Early pickup to secure a leading position at the park gate for fresh predator tracking.",
        icon: "directions_car"
        },
        {
        time: "06:00 AM – 09:30 AM",
        title: "Morning Predator Hunt",
        description:
            "Focused tracking near Leopard Rock and Kotabandiwewa—prime leopard territory.",
        icon: "pets"
        },
        {
        time: "09:30 AM",
        title: "Riverside Picnic Breakfast",
        description:
            "Enjoy a restorative breakfast at a scenic and safe riverside location.",
        icon: "bakery_dining"
        },
        {
        time: "10:30 AM – 12:30 PM",
        title: "Deep Jungle Exploration",
        description:
            "Explore interior tracks in search of Sloth Bears, Sambar Deer, and rare birdlife.",
        icon: "forest"
        },
        {
        time: "12:30 PM – 02:00 PM",
        title: "Full Picnic Lunch",
        description:
            "Hot Sri Lankan or Western lunch served inside the park at a designated rest area.",
        icon: "restaurant"
        },
        {
        time: "02:00 PM – 04:30 PM",
        title: "Wetland & Lagoon Circuit",
        description:
            "Observe elephant herds, crocodiles, and vibrant birdlife around waterholes.",
        icon: "water"
        },
        {
        time: "04:30 PM – 06:00 PM",
        title: "Golden Hour Finale",
        description:
            "Final focused leopard tracking in soft sunset light.",
        icon: "photo_camera"
        },
        {
        time: "06:30 PM",
        title: "Hotel Drop-Off",
        description:
            "Return to your hotel after a full day immersed in the wild.",
        icon: "flag"
        }
    ],

    inclusions: [
        "Private 4x4 Safari Jeep (13 Hours)",
        "Expert Driver-Tracker",
        "All DWC Entrance Fees & Service Charges",
        "Picnic Breakfast",
        "Fresh Hot Picnic Lunch",
        "Afternoon Fruits",
        "Unlimited Bottled Water",
        "Ice Box & Refreshments",
        "Binoculars & Field Guides",
        "USB Charging Ports"
    ],

    exclusions: [
        "Personal Expenses",
        "Tips & Gratuities"
    ],

    price: {
        jeep: 190.0,
        serviceFee: 0.0,
        tax: 0.0,
        total: 190.0,
        parkFeeNote: "Fees and taxes included"
    },

    pricingPerPerson: [
        { label: "1 person", price: 190 },
        { label: "2 persons", price: 230 },
        { label: "3 persons", price: 280 },
        { label: "4 persons", price: 330 },
        { label: "5 persons", price: 380 },
        { label: "6 persons", price: 430 },
        { label: "Children age 5 to 11", price: 26 },
        { label: "Infants under 5", price: 0 }
    ],

    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDzU8vcK5ng-o8ZuzmebE2_mT7DBsaRe-PjzagroWLN5Tq8Ocu29RL8zI0y8uVGLt3RrMXeMcB9xbJYkK6egZvcgIKGreGukYx2PWgU47oJ5MUT70VjZOWUjzXsC1la31JcpCshyHj793nMd6pjMoAVYZyfV2j0X6FUjOmFd7CjWhCGXeEowdx5aZwqvF-WW3fCwmrIgmZEUCn-C9MjxAPTwvUSTExqxKiZD48b5S7eQ8ej9UT-y0SLmGi98PpcseKm92qVXfurO3fz",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJW3N5GTfg-aJs_w0plAA78lDIf55P4FIYwy0XE7ZMRf8oca60ilR2E8z0IIpakuQf5Vh5HyV23VDTHWlxg5vWH1SaKWe6si8Pl4bc84ooE1ve0f3GqvgP6MEpZDv1UgD75EqIJirsPYnVpSriYGD0R3Ry0uuVY5PRYo5Hxo4K1WTrT4INR5xVNtWcpeT6zqzrj6j6jSqHFIm0OW4InnBKvdpQSqkti28ImnroS8OZqNxpdK19by7FfRE0-lS167YATVcB5FJzHADY"
    ]
    },

    // Shared All Inclusive Packages
    "shared-inclusive-morning-safari": {
        id: "shared-inclusive-morning-safari",
        title: "Shared All-Inclusive Morning Safari",
        subtitle: "Social Wildlife Exploration: The Budget-Friendly Dawn Hunt",
        heroImage: "https://leopardyala.com/wp-content/uploads/2025/10/pexels-sachin-nihcas-1318516-7594669.jpg",

        description:
            "Designed for solo travelers, couples, and small groups, the Shared All-Inclusive Morning Safari delivers a premium Yala experience at an affordable rate. By sharing a 4x4 jeep with fellow wildlife enthusiasts, you enjoy the same expert tracking, entrance tickets, and picnic breakfast as our private tours—while benefiting from a significantly reduced cost.",

        duration: "6 Hours (05:00 AM – 11:00 AM)",
        jeepType: "Shared Open-Air 4x4 Safari Jeep",
        packageCategory: PackageCategory.SHARED_INCLUSIVE,
        durationCategory: Duration.MORNING,
        priceRange: PriceRange.PRICE_RANGE_100,
        capacity: "Max 6 Guests",
        meals: "Picnic Breakfast",

        itinerary: [
            {
            time: "05:00 AM",
            title: "Group Hotel Pickup",
            description:
                "Pickup from hotels in Tissamaharama or Kirinda. Meet your fellow safari companions.",
            icon: "directions_car"
            },
            {
            time: "05:45 AM",
            title: "Arrival at Park Gate",
            description:
                "Join the morning queue at the Palatupana (Block 1) entrance.",
            icon: "confirmation_number"
            },
            {
            time: "06:00 AM",
            title: "Morning Wildlife Hunt",
            description:
                "Track leopards, sloth bears, and elephants during peak early-morning activity.",
            icon: "pets"
            },
            {
            time: "08:30 AM",
            title: "Social Picnic Breakfast",
            description:
                "Breakfast at Patanangala Beach or the Manik River while sharing stories and photos.",
            icon: "bakery_dining"
            },
            {
            time: "09:30 AM – 10:30 AM",
            title: "Lagoon & Waterhole Exploration",
            description:
                "Spot crocodiles, deer, and vibrant birdlife around lagoons.",
            icon: "water"
            },
            {
            time: "11:00 AM",
            title: "Hotel Drop-Off",
            description:
                "Return to your hotel after a memorable morning safari.",
            icon: "flag"
            }
        ],

        inclusions: [
            "Seat in a Shared 4x4 Safari Jeep",
            "Professional Driver-Tracker",
            "All DWC Entrance Fees & Taxes",
            "Picnic Breakfast",
            "Bottled Water",
            "Comprehensive Passenger Insurance"
        ],

        exclusions: [
            "Personal Expenses",
            "Tips & Gratuities"
        ],

        price: {
            jeep: 190.0,
            serviceFee: 0.0,
            tax: 0.0,
            total: 190.0,
            parkFeeNote: "All Included"
        },

        pricingPerPerson: [
            { label: "Adult", price: 55 },
            { label: "Children age 5 to 11", price: 26 },
            { label: "Infants under 5", price: 0 }
        ],

        gallery: [
            "https://leopardyala.com/wp-content/uploads/2025/10/pexels-sachin-nihcas-1318516-7594669.jpg",
            sithulpawwa.src
        ]
    },
    "shared-inclusive-afternoon-safari": {
    id: "shared-inclusive-afternoon-safari",
    title: "Shared All-Inclusive Afternoon Safari",
    subtitle: "Sunset Serenity & Shared Discovery: The Best Value Afternoon Tour",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4hCsbqfpG_2gWOvxfxTVY0-g46rna3vqj0wo5h7mijntACFLe524Cr-gvQL8YCwRPW430U3KK2oo6HqusFp_qSusc9OTOQuT5W6fa9l8IUma4RzMrtPWvOSNK_7veK667N3F20iqBHK-CR6scAWlHxToGHGCiN-c-qcPJeDqH30hyChmY6ilSYLsI-_wujJYFi8kXU5wPj4o4NfMfji9mgyspxYJpMW5h7zATk-LYHG4FqOdM1hwgMFt79OnA-K2x5QB8SCucEQ37",

    description:
        "The Shared All-Inclusive Afternoon Safari offers the perfect balance of affordability, comfort, and world-class wildlife viewing. Timed to coincide with peak elephant activity and Yala’s legendary golden-hour light, this tour allows you to share unforgettable sightings with fellow travelers—without sacrificing service quality or inclusions.",

    duration: "4.5 Hours (01:30 PM – 06:00 PM)",
    jeepType: "Shared Open-Air 4x4 Safari Jeep",
    packageCategory: PackageCategory.SHARED_INCLUSIVE,
    priceRange: PriceRange.PRICE_RANGE_100,
    durationCategory: Duration.AFTERNOON,
    badge: Badge.BEST_VALUE,
    capacity: "Max 6 Guests",
    meals: "Afternoon Snacks & Fruits",

    itinerary: [
        {
        time: "01:30 PM",
        title: "Group Hotel Pickup",
        description:
            "Pickup from hotels in Tissamaharama or Kirinda and meet your fellow safari companions.",
        icon: "directions_car"
        },
        {
        time: "02:15 PM",
        title: "Park Entry – Block 1",
        description:
            "Enter Yala National Park via the Palatupana gate, focusing on shaded riverine tracks.",
        icon: "confirmation_number"
        },
        {
        time: "03:30 PM",
        title: "Elephant Gathering",
        description:
            "Visit major waterholes such as Buthawa Tank where elephant herds congregate.",
        icon: "water"
        },
        {
        time: "04:30 PM – 05:30 PM",
        title: "Golden Hour Wildlife Search",
        description:
            "Intensified tracking for leopards and sloth bears as evening activity begins.",
        icon: "photo_camera"
        },
        {
        time: "06:00 PM",
        title: "Sunset Exit & Drop-Off",
        description:
            "Exit the park at sunset and return to your hotel by approximately 06:30 PM.",
        icon: "flag"
        }
    ],

    inclusions: [
        "Guaranteed Window Seat in Shared 4x4 Safari Jeep",
        "Professional Naturalist Driver-Tracker",
        "All DWC Entrance Fees & Taxes",
        "Chilled Bottled Water",
        "Afternoon Snacks & Fruits",
        "Hotel Pickup & Drop-off",
        "Comprehensive Passenger Insurance"
    ],

    exclusions: [
        "Personal Expenses",
        "Tips & Gratuities"
    ],

    price: {
        adult: 55.0,
        child: 26.0,
        infant: 0.0,
        parkFeeNote: "All Included"
    },

    pricingPerPerson: [
        { label: "Adult", price: 55 },
        { label: "Children age 5 to 11", price: 26 },
        { label: "Infants under 5", price: 0 }
    ],

    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA4hCsbqfpG_2gWOvxfxTVY0-g46rna3vqj0wo5h7mijntACFLe524Cr-gvQL8YCwRPW430U3KK2oo6HqusFp_qSusc9OTOQuT5W6fa9l8IUma4RzMrtPWvOSNK_7veK667N3F20iqBHK-CR6scAWlHxToGHGCiN-c-qcPJeDqH30hyChmY6ilSYLsI-_wujJYFi8kXU5wPj4o4NfMfji9mgyspxYJpMW5h7zATk-LYHG4FqOdM1hwgMFt79OnA-K2x5QB8SCucEQ37",
        magul_viharaya.src
    ]
    },
    "shared-half-day-safari": {
    id: "shared-half-day-safari",
    title: "Shared All-Inclusive Half-Day Safari",
    subtitle: "The Predator Pursuit: 7-Hour Extended Shared Experience",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuATxZ5tkzTtgSGaxPpd1StmIopwhsKH3VXkFxt93zsWG_p5BhhSR-RH-LTP41AL7MUkqLN5HZXvsh3kbSRasE2MHK8PwUcwW9XY_CL4JXZ3MYHk8wYcYrGz-920CCb07M4_jVGv-RaoVMU7e9H6cr_KjqAQK335Irmhtw0z8TuW5awsPgUwYdTGpe3kzD4tDvTgj6k7L1-ldaPkH1gKb9h3giLM_B1SDlBAiFKSjqXOi7AezS-jsX_dYD9-d6V_HfFijuj3KmT2NFMq",

    description:
        "The Shared All-Inclusive 7-Hour Half-Day Safari is our most popular mid-range option for travelers seeking extended wildlife encounters. This experience covers the intense early-morning leopard rush and the quieter mid-morning hours when the park becomes less crowded. With a maximum of 6 guests per jeep, you enjoy premium tracking, relaxed sightings, and a full picnic breakfast — all at exceptional value.",

    duration: "7 Hours (05:00 AM – 12:30 PM)",
    jeepType: "Shared Open 4x4 Safari Jeep (TATA / Mahindra)",
    packageCategory: PackageCategory.SHARED_INCLUSIVE,
    durationCategory: Duration.HALFDAY,
    priceRange: PriceRange.PRICE_RANGE_100,
    capacity: "Maximum 6 Guests",
    meals: "Picnic Breakfast & Unlimited Bottled Water",

    itinerary: [
        {
        time: "05:00 AM",
        title: "Group Pickup",
        description:
            "Prompt pickup from your hotel in Tissamaharama or Kirinda. Meet your fellow travelers and head directly to Yala National Park.",
        icon: "directions_car"
        },
        {
        time: "06:00 AM",
        title: "Sunrise Park Entry",
        description:
            "Enter Yala Block 1 as the gates open. Focus on intensive leopard and sloth bear tracking during the prime early-morning hours.",
        icon: "wb_sunny"
        },
        {
        time: "09:00 AM",
        title: "Picnic Breakfast Stop",
        description:
            "Enjoy a relaxed 30-minute picnic breakfast at Patanangala Beach or along the Manik River with scenic views.",
        icon: "bakery_dining"
        },
        {
        time: "09:30 AM – 12:00 PM",
        title: "Quiet Window Exploration",
        description:
            "As most vehicles exit the park, explore deeper interior loops where sloth bears, elephants, and reptiles are commonly spotted.",
        icon: "visibility"
        },
        {
        time: "12:30 PM",
        title: "Return to Hotel",
        description:
            "Exit the park and return to your hotel for a well-earned midday rest.",
        icon: "reply"
        }
    ],

    inclusions: [
        "7 Hours of Safari Experience",
        "Shared 4x4 Safari Jeep (Max 6 Guests)",
        "Professional Naturalist Driver / Tracker",
        "All DWC Entrance Fees & Government Taxes",
        "Picnic Breakfast",
        "Unlimited Bottled Water",
        "Hotel Pickup & Drop-off"
    ],

    exclusions: [
        "Personal expenses",
        "Tips & gratuities",
        "Camera equipment",
        "Travel insurance"
    ],

    price: {
        adult: 60,
        child: 26,
        serviceFee: 0,
        tax: 0,
        total: 60,
        parkFeeNote: "All Included"
    },

    pricingPerPerson: [
        {
            label: "Adult",
            price: 60
        },
        {
            label: "Child age 5 to 11",
            price: 26
        },
        {
            label: "Infant under 5",
            price: 0
        }

    ],

    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDzU8vcK5ng-o8ZuzmebE2_mT7DBsaRe-PjzagroWLN5Tq8Ocu29RL8zI0y8uVGLt3RrMXeMcB9xbJYkK6egZvcgIKGreGukYx2PWgU47oJ5MUT70VjZOWUjzXsC1la31JcpCshyHj793nMd6pjMoAVYZyfV2j0X6FUjOmFd7CjWhCGXeEowdx5aZwqvF-WW3fCwmrIgmZEUCn-C9MjxAPTwvUSTExqxKiZD48b5S7eQ8ej9UT-y0SLmGi98PpcseKm92qVXfurO3fz",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJW3N5GTfg-aJs_w0plAA78lDIf55P4FIYwy0XE7ZMRf8oca60ilR2E8z0IIpakuQf5Vh5HyV23VDTHWlxg5vWH1SaKWe6si8Pl4bc84ooE1ve0f3GqvgP6MEpZDv1UgD75EqIJirsPYnVpSriYGD0R3Ry0uuVY5PRYo5Hxo4K1WTrT4INR5xVNtWcpeT6zqzrj6j6jSqHFIm0OW4InnBKvdpQSqkti28ImnroS8OZqNxpdK19by7FfRE0-lS167YATVcB5FJzHADY",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuATxZ5tkzTtgSGaxPpd1StmIopwhsKH3VXkFxt93zsWG_p5BhhSR-RH-LTP41AL7MUkqLN5HZXvsh3kbSRasE2MHK8PwUcwW9XY_CL4JXZ3MYHk8wYcYrGz-920CCb07M4_jVGv-RaoVMU7e9H6cr_KjqAQK335Irmhtw0z8TuW5awsPgUwYdTGpe3kzD4tDvTgj6k7L1-ldaPkH1gKb9h3giLM_B1SDlBAiFKSjqXOi7AezS-jsX_dYD9-d6V_HfFijuj3KmT2NFMq",
        patanangala_Beach.src
    ]
    },
    "shared-full-day-safari": {
    id: "shared-full-day-safari",
    title: "Shared All-Inclusive Full-Day Safari",
    subtitle: "The Complete Yala Expedition: 13-Hour Immersive Shared Journey",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb7P_JoomDKCzH0nnjkFpbJXkQ4qqKVi7nHaA9o-qsRkKDvVdstHq8iA9-FiI0CfHDz5JkGLmOdqjWGIMyLpcj4BuijcVxtsgA2U82zt16-5HUXvmcDajO9_zpO-qV7b3jjYVwmvrqj3TSl40v4MCeDOzvN-NQoLHGFbrqkBmwEfKrHebiO_EZrMi5KBkb3UitBdpE8sVzaCOSCjo8SJ_DWFei4_Pwt80EaKnn0TPW945PHSPu-QBn8NDsBejrJ3JGHpn-zvMleKEZ",

    description:
        "The Shared All-Inclusive Full-Day Safari is the most comprehensive shared wildlife experience in Yala National Park. Spanning a full 13 hours from dawn to dusk, this immersive journey allows guests to experience the complete daily rhythm of the jungle. By sharing a premium safari jeep with a small group of nature lovers, you enjoy expert tracking, deep-park exploration, and inclusive meals—maximizing wildlife sightings at exceptional value.",

    duration: "13 Hours (05:00 AM – 06:30 PM)",
    jeepType: "Shared Open 4x4 Safari Jeep (TATA / Mahindra)",
    packageCategory: PackageCategory.SHARED_INCLUSIVE,
    durationCategory: Duration.FULLDAY,
    priceRange: PriceRange.PRICE_RANGE_100,
    capacity: "Maximum 6 Guests",
    meals: "Picnic Breakfast, Hot Picnic Lunch, Fruits & Unlimited Bottled Water",
    badge: Badge.TOP_SELLER,

    itinerary: [
        {
        time: "05:00 AM",
        title: "Group Pickup",
        description:
            "Early morning pickup from your hotel in Tissamaharama or Kirinda to reach the park gates before opening.",
        icon: "directions_car"
        },
        {
        time: "06:00 AM – 09:30 AM",
        title: "The Morning Rush",
        description:
            "Enter Yala Block 1 at opening time and focus on leopard and sloth bear tracking while conditions are optimal.",
        icon: "wb_sunny"
        },
        {
        time: "09:30 AM",
        title: "Picnic Breakfast",
        description:
            "Enjoy a hearty picnic breakfast at Patanangala Beach overlooking the Indian Ocean.",
        icon: "bakery_dining"
        },
        {
        time: "10:30 AM – 12:30 PM",
        title: "Quiet Window Hunt",
        description:
            "Explore interior loops as most jeeps exit the park—prime time for sloth bears and relaxed wildlife sightings.",
        icon: "visibility"
        },
        {
        time: "12:30 PM – 02:00 PM",
        title: "Riverside Picnic Lunch",
        description:
            "Stop at a designated safe zone along the Manik River for a fresh hot picnic lunch and rest break.",
        icon: "restaurant"
        },
        {
        time: "02:00 PM – 04:30 PM",
        title: "Wetland Exploration",
        description:
            "Visit lagoons and tanks to observe elephants bathing, crocodiles basking, and abundant birdlife.",
        icon: "pets"
        },
        {
        time: "04:30 PM – 06:00 PM",
        title: "Golden Hour Finale",
        description:
            "Final safari drive during sunset hours, increasing chances of leopard sightings and dramatic photography.",
        icon: "photo_camera"
        },
        {
        time: "06:30 PM",
        title: "Hotel Drop-off",
        description:
            "Exit the park and return to your hotel after a full day of exploration.",
        icon: "reply"
        }
    ],

    inclusions: [
        "13 Hours of Safari Experience",
        "Seat in a Shared 4x4 Safari Jeep (Max 6 Guests)",
        "Professional Naturalist Driver / Tracker",
        "All DWC Entrance Fees & Government Taxes",
        "Picnic Breakfast",
        "Fresh Hot Picnic Lunch",
        "Afternoon Fruits",
        "Unlimited Bottled Water",
        "Hotel Pickup & Drop-off"
    ],

    exclusions: [
        "Personal expenses",
        "Tips & gratuities",
        "Camera equipment",
        "Travel insurance"
    ],

    price: {
        adult: 85,
        child: 26,
        serviceFee: 0,
        tax: 0,
        total: 85,
        parkFeeNote: "All Included"
    },
    pricingPerPerson: [
        {
            label: "Adult",
            price: 85
        },
        {
            label: "Child age 5 to 11",
            price: 26
        },
        {
            label: "Infant under 5",
            price: 0
        }

    ],

    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDb7P_JoomDKCzH0nnjkFpbJXkQ4qqKVi7nHaA9o-qsRkKDvVdstHq8iA9-FiI0CfHDz5JkGLmOdqjWGIMyLpcj4BuijcVxtsgA2U82zt16-5HUXvmcDajO9_zpO-qV7b3jjYVwmvrqj3TSl40v4MCeDOzvN-NQoLHGFbrqkBmwEfKrHebiO_EZrMi5KBkb3UitBdpE8sVzaCOSCjo8SJ_DWFei4_Pwt80EaKnn0TPW945PHSPu-QBn8NDsBejrJ3JGHpn-zvMleKEZ",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuATxZ5tkzTtgSGaxPpd1StmIopwhsKH3VXkFxt93zsWG_p5BhhSR-RH-LTP41AL7MUkqLN5HZXvsh3kbSRasE2MHK8PwUcwW9XY_CL4JXZ3MYHk8wYcYrGz-920CCb07M4_jVGv-RaoVMU7e9H6cr_KjqAQK335Irmhtw0z8TuW5awsPgUwYdTGpe3kzD4tDvTgj6k7L1-ldaPkH1gKb9h3giLM_B1SDlBAiFKSjqXOi7AezS-jsX_dYD9-d6V_HfFijuj3KmT2NFMq",
        patanangala_Beach.src,
        yala_beach.src,
        Sanctuary.src
    ]
    },


    // Private Jeep-Only Packages
    "private-jeep-only-morning-safari":  {
    id: "private-jeep-only-morning-safari",
    title: "Private Jeep-Only Morning Safari",
    subtitle: "Exclusive Vehicle Hire: Your Private 4x4 Morning Expedition",
    heroImage: "https://leopardyala.com/wp-content/uploads/2025/10/pexels-sachin-nihcas-1318516-7594669.jpg",

    description:
        "The Private Jeep-Only Morning Safari is designed for travelers who prefer to manage their own park entrance tickets while enjoying the flexibility of a private safari vehicle and an expert driver-tracker. Ideal for guests staying at high-end lodges, this experience provides a dedicated 4x4 jeep and deep local knowledge to maximize leopard and sloth bear sightings during Yala’s prime morning hours.",

    duration: "5 Hours (05:00 AM – 10:30 AM)",
    jeepType: "Private Open 4x4 Safari Jeep (TATA / Mahindra)",
    packageCategory: PackageCategory.PRIVATE_JEEP_ONLY,
    durationCategory: Duration.MORNING,
    priceRange: PriceRange.PRICE_RANGE_50,
    capacity: "Up to 6 Passengers",
    meals: "Not Included",

    itinerary: [
        {
        time: "05:00 AM",
        title: "Private Hotel Pickup",
        description:
            "Your dedicated driver-tracker meets you at your hotel lobby. As this is a private jeep, there are no other pickups.",
        icon: "directions_car"
        },
        {
        time: "05:45 AM",
        title: "Gate Arrival & Ticket Assistance",
        description:
            "Arrive at the Palatupana (Block 1) gate. Your driver assists with ticketing if required.",
        icon: "gate"
        },
        {
        time: "06:00 AM – 10:00 AM",
        title: "Morning Safari Exploration",
        description:
            "Five hours of private wildlife tracking. Control the pace—linger at sightings or explore deeper routes as you wish.",
        icon: "visibility"
        },
        {
        time: "10:30 AM",
        title: "Exit & Drop-off",
        description:
            "Exit the park as temperatures rise and return comfortably to your hotel.",
        icon: "reply"
        }
    ],

    inclusions: [
        "Private 4x4 Safari Jeep (Up to 6 Guests)",
        "Professional Driver-Tracker",
        "Fuel Charges",
        "Hotel Pickup & Drop-off (Tissamaharama / Kirinda area)",
        "Flexible Safari Pace"
    ],

    exclusions: [
        "National Park Entrance Tickets",
        "Government Taxes at the Gate",
        "Meals & Bottled Water",
        "Personal expenses",
        "Tips & gratuities"
    ],

    price: {
        jeep: 50,
        serviceFee: 25,
        tax: 0,
        total: 75,
        parkFeeNote:
        "Tickets must be purchased"
    },

    gallery: [
        "https://leopardyala.com/wp-content/uploads/2025/10/pexels-sachin-nihcas-1318516-7594669.jpg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDzU8vcK5ng-o8ZuzmebE2_mT7DBsaRe-PjzagroWLN5Tq8Ocu29RL8zI0y8uVGLt3RrMXeMcB9xbJYkK6egZvcgIKGreGukYx2PWgU47oJ5MUT70VjZOWUjzXsC1la31JcpCshyHj793nMd6pjMoAVYZyfV2j0X6FUjOmFd7CjWhCGXeEowdx5aZwqvF-WW3fCwmrIgmZEUCn-C9MjxAPTwvUSTExqxKiZD48b5S7eQ8ej9UT-y0SLmGi98PpcseKm92qVXfurO3fz",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJW3N5GTfg-aJs_w0plAA78lDIf55P4FIYwy0XE7ZMRf8oca60ilR2E8z0IIpakuQf5Vh5HyV23VDTHWlxg5vWH1SaKWe6si8Pl4bc84ooE1ve0f3GqvgP6MEpZDv1UgD75EqIJirsPYnVpSriYGD0R3Ry0uuVY5PRYo5Hxo4K1WTrT4INR5xVNtWcpeT6zqzrj6j6jSqHFIm0OW4InnBKvdpQSqkti28ImnroS8OZqNxpdK19by7FfRE0-lS167YATVcB5FJzHADY",
        kirinda_rajamaha_viharaya.src
    ]
    },
    "private-jeep-only-afternoon-safari": {
    id: "private-jeep-only-afternoon-safari",
    title: "Private Jeep-Only Afternoon Safari",
    subtitle: "The Elephant Gathering & Sunset Trail: 5-Hour Exclusive Hire",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIE-zc_aV0U0lmAmLrsHx6P2yX524Zf2WQ6Jn8Tix093E0P9EjdEi3gykij-ggdqWDLTxJSANjpri8Qk0zQOTZicw4ugQpSawxQWY7cG7vo7Fj-trY3733gwudS6TAi2SYTnHsL3ZhWXMJUzsoCk8RQKgX_szL5GfwOl3L0sgH8C3tb7tvcAN-PtP6EjLfgXrpmaQSzVuP9OHJkdpfqJdnrbmoAQJ9Yqylil3zf1gxwZUVNyjMGOcgFiJiBKckRsMGle-miwm6Fo7b",

    description:
        "The Private Jeep-Only Afternoon Safari is ideal for travelers who want the exclusivity of a private safari vehicle without bundled tickets or meals. Timed perfectly to witness elephant gatherings and golden-hour predator activity, this experience offers complete flexibility with a dedicated driver-tracker focused entirely on your group’s interests.",

    duration: "5 Hours (01:30 PM – 06:30 PM)",
    jeepType: "Private Open 4x4 Safari Jeep (TATA / Mahindra)",
    packageCategory: PackageCategory.PRIVATE_JEEP_ONLY,
    durationCategory: Duration.AFTERNOON,
    badge: Badge.POPULAR,
    priceRange: PriceRange.PRICE_RANGE_50,
    capacity: "Up to 6 Passengers",
    meals: "Not Included",

    itinerary: [
        {
        time: "01:30 PM",
        title: "Private Hotel Pickup",
        description:
            "Your exclusive driver-tracker meets you at your hotel. No shared pickups—head directly to the park.",
        icon: "directions_car"
        },
        {
        time: "02:15 PM",
        title: "Gate Arrival & Ticket Assistance",
        description:
            "Arrival at the Palatupana (Block 1) entrance. The driver assists with ticketing if required.",
        icon: "gate"
        },
        {
        time: "02:30 PM – 03:45 PM",
        title: "Shaded Canopy Exploration",
        description:
            "Explore cooler, shaded areas where wildlife retreats during the afternoon heat.",
        icon: "park"
        },
        {
        time: "04:00 PM – 04:45 PM",
        title: "Waterhole Watch",
        description:
            "Focus on major tanks and lagoons to observe elephant herds bathing and crocodiles basking.",
        icon: "pets"
        },
        {
        time: "05:00 PM – 06:00 PM",
        title: "Golden Hour Predator Search",
        description:
            "An intensified search for leopards and sloth bears as temperatures drop and activity increases.",
        icon: "wb_sunny"
        },
        {
        time: "06:30 PM",
        title: "Sunset Exit & Drop-off",
        description:
            "Exit the park at sunset and return comfortably to your hotel.",
        icon: "reply"
        }
    ],

    inclusions: [
        "Private 4x4 Safari Jeep (Up to 6 Guests)",
        "Expert Driver-Tracker",
        "Fuel Charges",
        "Hotel Pickup & Drop-off (Tissamaharama / Kirinda)",
        "Flexible Safari Schedule"
    ],

    exclusions: [
        "National Park Entrance Tickets",
        "Food & Beverages",
        "Bottled Water",
        "Personal expenses",
        "Tips & gratuities"
    ],

    price: {
        jeep: 50,
        serviceFee: 30,
        tax: 0,
        total: 50,
        parkFeeNote:
        "Tickets must be purchased"
    },

    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBIE-zc_aV0U0lmAmLrsHx6P2yX524Zf2WQ6Jn8Tix093E0P9EjdEi3gykij-ggdqWDLTxJSANjpri8Qk0zQOTZicw4ugQpSawxQWY7cG7vo7Fj-trY3733gwudS6TAi2SYTnHsL3ZhWXMJUzsoCk8RQKgX_szL5GfwOl3L0sgH8C3tb7tvcAN-PtP6EjLfgXrpmaQSzVuP9OHJkdpfqJdnrbmoAQJ9Yqylil3zf1gxwZUVNyjMGOcgFiJiBKckRsMGle-miwm6Fo7b",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDzU8vcK5ng-o8ZuzmebE2_mT7DBsaRe-PjzagroWLN5Tq8Ocu29RL8zI0y8uVGLt3RrMXeMcB9xbJYkK6egZvcgIKGreGukYx2PWgU47oJ5MUT70VjZOWUjzXsC1la31JcpCshyHj793nMd6pjMoAVYZyfV2j0X6FUjOmFd7CjWhCGXeEowdx5aZwqvF-WW3fCwmrIgmZEUCn-C9MjxAPTwvUSTExqxKiZD48b5S7eQ8ej9UT-y0SLmGi98PpcseKm92qVXfurO3fz",
        thissa_lake.src,
    ]
    },
    "private-jeep-only-7hr-safari": {
    id: "private-jeep-only-7hr-safari",
    title: "Private Jeep-Only 7-Hour Half-Day Safari",
    subtitle: "The Exclusive Predator Pursuit: Extended Vehicle Hire for Wildlife Specialists",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0q13f-PHx5NADQjFD7MIeLChdEl2kGpagF01FwUfDplzyWbpzSORWQLcdbbzRvCt7UHzg4BObUtiXoJL5aTcnHC_KX33hBGT_RfOffZDBsBh2pQoigk5MHP31F2EnruxJ_7zXeE703w2sF_GE7_Pf99g2MlCIX7ViHfst7WIFtOULiI-unL23gKfxRlil9ZCFIr1fN3GiuNgA3Hc6WVOJnI5OzZpRHciVgw2NZV_RPC6fDb3XNFFmCHelSm2gJfwMOFkqHIrBVK6",

    description:
        "The Private Jeep-Only 7-Hour Half-Day Safari is designed for wildlife enthusiasts, professional photographers, and birdwatchers seeking extra time in Yala. With a dedicated 4x4 jeep and expert driver-tracker, you control your own entrance and catering, while enjoying undisturbed encounters in the quieter mid-morning hours of the park.",

    duration: "7 Hours (05:00 AM – 12:00 PM)",
    jeepType: "Private Open 4x4 Safari Jeep (TATA / Mahindra)",
    packageCategory: PackageCategory.PRIVATE_JEEP_ONLY,
    durationCategory: Duration.HALFDAY,
    priceRange: PriceRange.PRICE_RANGE_100,
    capacity: "Up to 6 Passengers",
    meals: "Not Included",

    itinerary: [
        {
        time: "05:00 AM",
        title: "Priority Hotel Pickup",
        description:
            "Your private jeep arrives at your hotel with no shared stops. Early access ensures a head start at the gate.",
        icon: "directions_car"
        },
        {
        time: "06:00 AM – 09:00 AM",
        title: "Sunrise Hunt",
        description:
            "High-intensity tracking near 'Leopard Rocks' and sandy crossings during the cool early hours.",
        icon: "wb_sunny"
        },
        {
        time: "09:30 AM – 11:00 AM",
        title: "The 'Quiet Window' Advantage",
        description:
            "With fewer vehicles in the park, explore interior loops to find Sloth Bears, large elephants, and other wildlife in peaceful conditions.",
        icon: "park"
        },
        {
        time: "11:00 AM – 12:00 PM",
        title: "Birding & Reptile Observation",
        description:
            "Late-morning exploration for rare birds like Black-necked Stork, Crested Serpent Eagle, and Mugger Crocodiles in the lagoons.",
        icon: "eco"
        },
        {
        time: "12:00 PM",
        title: "Exit & Return",
        description:
            "Conclude your safari as the midday sun peaks, returning to your hotel by 12:30 PM.",
        icon: "reply"
        }
    ],

    inclusions: [
        "Private 4x4 Safari Jeep (Up to 6 Guests)",
        "Expert Driver-Tracker",
        "Hotel Pickup & Drop-off (Tissamaharama / Kirinda)",
        "Fuel for the Safari",
        "Flexible Itinerary within 7-Hour Block"
    ],

    exclusions: [
        "National Park Entrance Tickets (pay at gate)",
        "Meals & Beverages",
        "Personal Snacks & Water",
        "Tips & gratuities"
    ],

    price: {
        jeep: 55,
        serviceFee: 0,
        tax: 0,
        total: 55,
        parkFeeNote:
        "Tickets must be purchased"
    },

    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0q13f-PHx5NADQjFD7MIeLChdEl2kGpagF01FwUfDplzyWbpzSORWQLcdbbzRvCt7UHzg4BObUtiXoJL5aTcnHC_KX33hBGT_RfOffZDBsBh2pQoigk5MHP31F2EnruxJ_7zXeE703w2sF_GE7_Pf99g2MlCIX7ViHfst7WIFtOULiI-unL23gKfxRlil9ZCFIr1fN3GiuNgA3Hc6WVOJnI5OzZpRHciVgw2NZV_RPC6fDb3XNFFmCHelSm2gJfwMOFkqHIrBVK6",
        patanangala_Beach.src,
        thissa_lake.src,
    ]
    },
    "private-jeep-only-full-day": {
        id: "private-jeep-only-full-day",
        title: "Private Jeep-Only Full-Day Safari",
        subtitle: "The 14-Hour Wildlife Marathon: Exclusive Vehicle Hire for Ultimate Tracking",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb7P_JoomDKCzH0nnjkFpbJXkQ4qqKVi7nHaA9o-qsRkKDvVdstHq8iA9-FiI0CfHDz5JkGLmOdqjWGIMyLpcj4BuijcVxtsgA2U82zt16-5HUXvmcDajO9_zpO-qV7b3jjYVwmvrqj3TSl40v4MCeDOzvN-NQoLHGFbrqkBmwEfKrHebiO_EZrMi5KBkb3UitBdpE8sVzaCOSCjo8SJ_DWFei4_Pwt80EaKnn0TPW945PHSPu-QBn8NDsBejrJ3JGHpn-zvMleKEZ",

        description:
            "The Private Jeep-Only Full-Day Safari is designed for wildlife photographers, filmmakers, and hardcore safari enthusiasts. With a dedicated 4x4 jeep and veteran driver-tracker, you remain inside Yala National Park from dawn to dusk, witnessing predator patrols, elephant gatherings, and the full cycle of jungle activity while controlling your own entrance and catering.",

        duration: "14 Hours (05:00 AM – 07:00 PM)",
        jeepType: "Private Open 4x4 Safari Jeep (TATA / Mahindra)",
        packageCategory: PackageCategory.PRIVATE_JEEP_ONLY,
        durationCategory: Duration.FULLDAY,
        priceRange: PriceRange.PRICE_RANGE_100,
        capacity: "Up to 6 Passengers",
        meals: "Not Included",

        itinerary: [
            {
            time: "05:00 AM",
            title: "Exclusive Hotel Pickup",
            description:
                "Your private jeep picks you up from the hotel. No shared stops—priority access at the gate.",
            icon: "directions_car"
            },
            {
            time: "06:00 AM – 10:00 AM",
            title: "Morning Intensity",
            description:
                "High-speed tracking for Leopards and Sloth Bears during the cool, early hours.",
            icon: "wb_sunny"
            },
            {
            time: "10:00 AM – 01:00 PM",
            title: "Midday Ghost Hours",
            description:
                "Explore the quiet interior loops of Block 1 and Block 5, ideal for undisturbed Sloth Bear sightings.",
            icon: "park"
            },
            {
            time: "01:00 PM – 02:00 PM",
            title: "Riverside Lunch Break",
            description:
                "Rest at a safe zone by the Manik River, enjoy your packed lunch while observing crocodiles and monkeys.",
            icon: "lunch_dining"
            },
            {
            time: "02:00 PM – 05:00 PM",
            title: "The Giant Gathering",
            description:
                "Observe Asian Elephant herds at lagoons and waterholes during the afternoon emergence.",
            icon: "pets"
            },
            {
            time: "05:00 PM – 06:30 PM",
            title: "The Final Hunt",
            description:
                "Track predators during the golden evening light as they start their nightly patrols.",
            icon: "wb_sunny"
            },
            {
            time: "07:00 PM",
            title: "Return to Hotel",
            description:
                "Conclude your 14-hour expedition and drop off at your hotel.",
            icon: "reply"
            }
        ],
        badge: Badge.TOP_SELLER,

        inclusions: [
            "Private 4x4 Safari Jeep (Full Day, Up to 6 Guests)",
            "Veteran Driver-Tracker",
            "Hotel Pickup & Drop-off (Tissamaharama / Kirinda)",
            "Fuel for the Full-Day Safari",
            "Flexible Itinerary within 14-Hour Block"
        ],

        exclusions: [
            "National Park Entrance Tickets (pay at gate)",
            "Meals & Beverages",
            "Packed Food & Personal Water",
            "Tips & gratuities"
        ],

        price: {
            jeep: 100,
            serviceFee: 0,
            tax: 0,
            total: 100,
            parkFeeNote:
            "Tickets must be purchased"
        },

    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDb7P_JoomDKCzH0nnjkFpbJXkQ4qqKVi7nHaA9o-qsRkKDvVdstHq8iA9-FiI0CfHDz5JkGLmOdqjWGIMyLpcj4BuijcVxtsgA2U82zt16-5HUXvmcDajO9_zpO-qV7b3jjYVwmvrqj3TSl40v4MCeDOzvN-NQoLHGFbrqkBmwEfKrHebiO_EZrMi5KBkb3UitBdpE8sVzaCOSCjo8SJ_DWFei4_Pwt80EaKnn0TPW945PHSPu-QBn8NDsBejrJ3JGHpn-zvMleKEZ",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0q13f-PHx5NADQjFD7MIeLChdEl2kGpagF01FwUfDplzyWbpzSORWQLcdbbzRvCt7UHzg4BObUtiXoJL5aTcnHC_KX33hBGT_RfOffZDBsBh2pQoigk5MHP31F2EnruxJ_7zXeE703w2sF_GE7_Pf99g2MlCIX7ViHfst7WIFtOULiI-unL23gKfxRlil9ZCFIr1fN3GiuNgA3Hc6WVOJnI5OzZpRHciVgw2NZV_RPC6fDb3XNFFmCHelSm2gJfwMOFkqHIrBVK6",
    ]
    },

    // Shared Jeep-Only packages
    "shared-jeep-only-morning": {
    id: "shared-jeep-only-morning",
    title: "Shared Jeep-Only Morning Safari",
    subtitle: "The Budget Dawn Patrol: Expert Tracking at the Best Price",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIE-zc_aV0U0lmAmLrsHx6P2yX524Zf2WQ6Jn8Tix093E0P9EjdEi3gykij-ggdqWDLTxJSANjpri8Qk0zQOTZicw4ugQpSawxQWY7cG7vo7Fj-trY3733gwudS6TAi2SYTnHsL3ZhWXMJUzsoCk8RQKgX_szL5GfwOl3L0sgH8C3tb7tvcAN-PtP6EjLfgXrpmaQSzVuP9OHJkdpfqJdnrbmoAQJ9Yqylil3zf1gxwZUVNyjMGOcgFiJiBKckRsMGle-miwm6Fo7b",

    description:
        "The Shared Jeep-Only Morning Safari is the most affordable way to experience Yala National Park. Perfect for solo travelers and budget-conscious adventurers, this package gives you a seat in a professional 4x4 jeep with an expert driver-tracker. You manage your own entrance tickets and meals while enjoying elite tracking at a fraction of the cost.",

    duration: "5 Hours (05:00 AM – 11:00 AM)",
    jeepType: "Shared Open 4x4 Safari Jeep (TATA / Mahindra)",
    packageCategory: PackageCategory.SHARED_JEEP_ONLY,
    durationCategory: Duration.MORNING,
    capacity: "Up to 6 Passengers",
    priceRange: PriceRange.PRICE_RANGE_50,
    meals: "Not Included",

    itinerary: [
        {
        time: "05:00 AM",
        title: "Group Pickup",
        description:
            "Driver collects you from your hostel or hotel. Promptness is essential to join fellow travelers.",
        icon: "directions_car"
        },
        {
        time: "05:45 AM",
        title: "Arrival at the Gate",
        description:
            "Join the morning queue at Palatupana (Block 1). Driver manages vehicle positioning while you handle ticketing.",
        icon: "gate"
        },
        {
        time: "06:00 AM",
        title: "Grand Entry",
        description:
            "Enter the park at sunrise. This 5-hour window offers prime leopard and sloth bear sightings.",
        icon: "wb_sunny"
        },
        {
        time: "08:30 AM",
        title: "Breakfast Break",
        description:
            "Stop at a safe zone (e.g., Patanangala Beach). Bring your own breakfast or snacks for the Jeep-Only tour.",
        icon: "breakfast_dining"
        },
        {
        time: "10:30 AM",
        title: "Final Tracking",
        description:
            "Loop through lagoons to spot crocodiles and elephants before the heat rises.",
        icon: "forest"
        },
        {
        time: "11:00 AM",
        title: "Drop-off",
        description: "Return to your accommodation for a midday rest or local lunch.",
        icon: "reply"
        }
    ],

    inclusions: [
        "One Seat in a Shared 4x4 Safari Jeep",
        "Professional Driver-Tracker",
        "Hotel/Hostel Pickup & Drop-off (Tissamaharama/Kirinda)"
    ],

    exclusions: [
        "National Park Entrance Ticket (pay at gate)",
        "Breakfast/Food & Bottled Water",
        "Personal Expenses & Tips"
    ],

    price: {
        jeep: 15,
        serviceFee: 0,
        tax: 0,
        total: 15,
        parkFeeNote:
        "Tickets must be purchased"
    },

    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBIE-zc_aV0U0lmAmLrsHx6P2yX524Zf2WQ6Jn8Tix093E0P9EjdEi3gykij-ggdqWDLTxJSANjpri8Qk0zQOTZicw4ugQpSawxQWY7cG7vo7Fj-trY3733gwudS6TAi2SYTnHsL3ZhWXMJUzsoCk8RQKgX_szL5GfwOl3L0sgH8C3tb7tvcAN-PtP6EjLfgXrpmaQSzVuP9OHJkdpfqJdnrbmoAQJ9Yqylil3zf1gxwZUVNyjMGOcgFiJiBKckRsMGle-miwm6Fo7b",
        sithulpawwa.src,
        magul_viharaya.src
    ]
    },
    "shared-jeep-only-afternoon": {
    id: "shared-jeep-only-afternoon",
    title: "Shared Jeep-Only Afternoon Safari",
    subtitle: "The Golden Hour Group: Expert Afternoon Tracking for Less",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuATxZ5tkzTtgSGaxPpd1StmIopwhsKH3VXkFxt93zsWG_p5BhhSR-RH-LTP41AL7MUkqLN5HZXvsh3kbSRasE2MHK8PwUcwW9XY_CL4JXZ3MYHk8wYcYrGz-920CCb07M4_jVGv-RaoVMU7e9H6cr_KjqAQK335Irmhtw0z8TuW5awsPgUwYdTGpe3kzD4tDvTgj6k7L1-ldaPkH1gKb9h3giLM_B1SDlBAiFKSjqXOi7AezS-jsX_dYD9-d6V_HfFijuj3KmT2NFMq",

    description:
        "The Shared Jeep-Only Afternoon Safari is perfect for solo travelers and couples who want to experience Yala's 'peak elephant hours' without hiring a private vehicle. Pay for your seat only and enjoy expert tracking with our veteran drivers while managing your own tickets and refreshments.",

    duration: "5 Hours (02:00 PM – 06:30 PM)",
    jeepType: "Shared Open 4x4 Safari Jeep (TATA / Mahindra)",
    packageCategory: PackageCategory.SHARED_JEEP_ONLY,
    durationCategory: Duration.AFTERNOON,
    badge: Badge.BEST_VALUE,
    priceRange: PriceRange.PRICE_RANGE_50,
    capacity: "Up to 6 Passengers",
    meals: "Not Included",

    itinerary: [
        {
        time: "01:30 PM",
        title: "Group Pickup",
        description:
            "Driver collects you from your accommodation. Promptness is essential to join fellow travelers for the afternoon safari.",
        icon: "directions_car"
        },
        {
        time: "02:15 PM",
        title: "Gate Transaction",
        description:
            "Arrive at Palatupana (Block 1) entrance. Handle your tickets while the driver ensures jeep positioning for a fast entry.",
        icon: "gate"
        },
        {
        time: "02:30 PM",
        title: "Entering the Wild",
        description:
            "Begin the safari with exploration of shaded riverine loops where wildlife hides from the midday sun.",
        icon: "park"
        },
        {
        time: "04:00 PM",
        title: "Waterhole Circuit",
        description:
            "Visit major tanks like Maha Seelawawa to watch Asian Elephant herds gather to drink and socialize.",
        icon: "pets"
        },
        {
        time: "05:00 PM",
        title: "Golden Hour Search",
        description:
            "Trackers use animal alarm calls to locate leopards and sloth bears waking up for their evening patrols.",
        icon: "wb_sunny"
        },
        {
        time: "06:30 PM",
        title: "Sunset Return",
        description: "Exit the park as light fades and return to your hotel in time for dinner.",
        icon: "home"
        }
    ],

    inclusions: [
        "One Seat in a Shared 4x4 Safari Jeep (Max 6 pax)",
        "Professional Driver-Tracker",
        "Hotel Pickup & Drop-off (Tissamaharama/Kirinda)"
    ],

    exclusions: [
        "National Park Entrance Ticket (pay at gate)",
        "Afternoon Snacks & Bottled Water",
        "Personal Expenses & Tips"
    ],

    price: {
        jeep: 15,
        serviceFee: 0,
        tax: 0,
        total: 15,
        parkFeeNote:
        "Tickets must be purchased"
    },

    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuATxZ5tkzTtgSGaxPpd1StmIopwhsKH3VXkFxt93zsWG_p5BhhSR-RH-LTP41AL7MUkqLN5HZXvsh3kbSRasE2MHK8PwUcwW9XY_CL4JXZ3MYHk8wYcYrGz-920CCb07M4_jVGv-RaoVMU7e9H6cr_KjqAQK335Irmhtw0z8TuW5awsPgUwYdTGpe3kzD4tDvTgj6k7L1-ldaPkH1gKb9h3giLM_B1SDlBAiFKSjqXOi7AezS-jsX_dYD9-d6V_HfFijuj3KmT2NFMq",
        magul_viharaya.src
    ]
    },
    "shared-jeep-only-half-day": {
        id: "shared-jeep-only-half-day",
        title: "Shared Jeep-Only Half-Day Safari",
        subtitle: "The 7-Hour Value Expedition: Extended Tracking for Independent Travelers",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYZWmPd7gLUmam_PaUKMIyZGUc1Zmt0K5uFOgqEtavGRuOrDDe2ybYyOyYDHl8Pjf157wQ6IO5QBd3FSZmHdJlwE1NWE68sg4aR3tPDPfwC5d2FluHi9Ty5u9jDoLSqDEpFngUAKLG0lrf0esN7CO60tlBf1pO-DQaFgY_7zRVt7byq2ognUMfD2XYm46EJ5HqUlX8Yxot1Ml_XjkZj0n5-h4yV95NyYqpN-ZVFMBB3pEVVtaBpL2bjLxgwgeFo7WCiHUt5Ds_58Sf",

        description:
            "The Shared Jeep-Only Half-Day Safari is ideal for budget-conscious travelers who want more time in Yala’s deep interior. Share a premium 4x4 and an expert tracker with other explorers, while managing your own tickets and meals, maximizing your chance to spot leopards, sloth bears, and elephants.",

        duration: "7 Hours (05:00 AM – 12:00 PM)",
        jeepType: "Shared Open 4x4 Safari Jeep (TATA / Mahindra)",
        packageCategory: PackageCategory.SHARED_JEEP_ONLY,
        durationCategory: Duration.HALFDAY,
        priceRange: PriceRange.PRICE_RANGE_100,
        capacity: "Up to 6 Passengers",
        meals: "Not Included",

        itinerary: [
            {
            time: "05:00 AM",
            title: "Group Pickup",
            description:
                "Driver collects you from your accommodation. Quick assembly ensures you’re among the first jeeps in the morning queue.",
            icon: "directions_car"
            },
            {
            time: "06:00 AM",
            title: "Sunrise Entrance",
            description:
                "Enter Block 1 to track fresh leopard pugmarks and explore high-intensity morning loops.",
            icon: "gate"
            },
            {
            time: "09:00 AM",
            title: "Social Breakfast Break",
            description:
                "Stop at Patanangala Beach or the Manik River. Enjoy your breakfast box and swap sightings with fellow travelers.",
            icon: "restaurant"
            },
            {
            time: "09:30 AM",
            title: "The Quiet Window",
            description:
                "Explore interior loops with fewer jeeps around. Prime time for Sloth Bear sightings and observing large elephants.",
            icon: "park"
            },
            {
            time: "12:00 PM",
            title: "Exit & Return",
            description: "Conclude the safari as midday heat peaks and return to your hotel for a rest.",
            icon: "home"
            }
        ],

        inclusions: [
            "One Seat in a Shared 4x4 Safari Jeep (7-Hour Session)",
            "Professional Driver-Tracker",
            "Hotel Pickup & Drop-off (Tissamaharama/Kirinda)"
        ],

        exclusions: [
            "National Park Entrance Ticket (pay at gate)",
            "Breakfast & Bottled Water",
            "Personal Expenses & Tips"
        ],

        price: {
            jeep: 20,
            serviceFee: 0,
            tax: 0,
            total: 20,
            parkFeeNote:
            "Tickets must be purchased"
        },

        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCYZWmPd7gLUmam_PaUKMIyZGUc1Zmt0K5uFOgqEtavGRuOrDDe2ybYyOyYDHl8Pjf157wQ6IO5QBd3FSZmHdJlwE1NWE68sg4aR3tPDPfwC5d2FluHi9Ty5u9jDoLSqDEpFngUAKLG0lrf0esN7CO60tlBf1pO-DQaFgY_7zRVt7byq2ognUMfD2XYm46EJ5HqUlX8Yxot1Ml_XjkZj0n5-h4yV95NyYqpN-ZVFMBB3pEVVtaBpL2bjLxgwgeFo7WCiHUt5Ds_58Sf",
            patanangala_Beach.src
        ]
    },
    "shared-jeep-only-full-day": {
    id: "shared-jeep-only-full-day",
    title: "Shared Jeep-Only Full-Day Safari",
    subtitle: "The Ultimate Budget Marathon: 14 Hours of Professional Tracking",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq3awyX_tXw1z-IS3cCe1rDSGXTn-GOCn5MbpvuVGCrX8zPu7y6HjocOqKkqnNVol837eKWPZ6ngh3JlkkmPysx4dj_gVQSD0f-e36snrKBHBQufUfS4YaZpbL0q5a6qLK6teDMT8z7eLXdjWeQCGI225oVnqdKpIVuWDPIEqzVEuhfyQQOHRX7bwYMYYHibXYhj-0oJcBlM2Sb7u9cUE66EZvL5QTNrdLWQX7lYWvscrH0Vz1M-coKzUk1_u8SYZsANjkGny77S9K",

    description:
        "The Shared Jeep-Only Full-Day Safari is the premier choice for budget-conscious wildlife enthusiasts seeking maximum time in Yala National Park. Share a high-clearance 4x4 and a veteran tracker with other travelers while managing your own tickets and meals. Cover the park’s entire wildlife cycle for the best chance to see leopards, sloth bears, elephants, and rare birds.",

    duration: "14 Hours (05:00 AM – 07:00 PM)",
    jeepType: "Shared Open 4x4 Safari Jeep (TATA / Mahindra)",
    packageCategory: PackageCategory.SHARED_JEEP_ONLY,
    durationCategory: Duration.FULLDAY,
    priceRange: PriceRange.PRICE_RANGE_100,
    capacity: "Up to 6 Passengers",
    meals: "Not Included",
    badge: Badge.TOP_SELLER,

    itinerary: [
        {
        time: "05:00 AM",
        title: "Group Pickup",
        description:
            "Early morning pickup to ensure your group is at the gate before sunrise.",
        icon: "directions_car"
        },
        {
        time: "06:00 AM – 10:00 AM",
        title: "Morning Intensity",
        description:
            "Track predators during their peak activity hours, including leopards and jackals.",
        icon: "visibility"
        },
        {
        time: "10:00 AM – 01:00 PM",
        title: "The Midday Secret",
        description:
            "Explore deep interior loops while most 5-hour jeeps have exited. Prime time for Sloth Bear sightings.",
        icon: "park"
        },
        {
        time: "01:00 PM",
        title: "Riverside Break",
        description:
            "Stop at Manik River or Patanangala Beach. Enjoy the breakfast/lunch you’ve packed while observing wildlife along the river.",
        icon: "restaurant"
        },
        {
        time: "02:00 PM – 05:00 PM",
        title: "Afternoon Surge",
        description:
            "Focus on waterholes to witness elephant herds and crocodiles in action.",
        icon: "eco"
        },
        {
        time: "05:00 PM – 06:30 PM",
        title: "Golden Hour",
        description:
            "Final push for leopard and predator sightings in the amber evening light.",
        icon: "wb_sunny"
        },
        {
        time: "07:00 PM",
        title: "Return",
        description: "Drop-off at your hotel after a full day of wildlife exploration.",
        icon: "home"
        }
    ],

    inclusions: [
        "One Seat in a Shared 4x4 Safari Jeep (14-Hour Session)",
        "Veteran Driver-Tracker",
        "Hotel Pickup & Drop-off (Tissamaharama/Kirinda)"
    ],

    exclusions: [
        "National Park Entrance Ticket (pay at gate)",
        "All Meals and Bottled Water",
        "Personal Expenses & Tips"
    ],

    price: {
        jeep: 26,
        serviceFee: 0,
        tax: 0,
        total: 26,
        parkFeeNote:
        "Ticket is included in the price"
    },

    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAq3awyX_tXw1z-IS3cCe1rDSGXTn-GOCn5MbpvuVGCrX8zPu7y6HjocOqKkqnNVol837eKWPZ6ngh3JlkkmPysx4dj_gVQSD0f-e36snrKBHBQufUfS4YaZpbL0q5a6qLK6teDMT8z7eLXdjWeQCGI225oVnqdKpIVuWDPIEqzVEuhfyQQOHRX7bwYMYYHibXYhj-0oJcBlM2Sb7u9cUE66EZvL5QTNrdLWQX7lYWvscrH0Vz1M-coKzUk1_u8SYZsANjkGny77S9K",
        Sanctuary.src,
    ]
    },

    // // default package
    // "luxury-safari": {
    //     id: "luxury-safari",
    //     title: "The Golden Shadow Expedition",
    //     subtitle: "A premium full-day safari experience dedicated to tracking the elusive Sri Lankan Leopard.",
    //     heroImage: "/package_details_hero.png",
    //     description: "Embark on an unforgettable journey through the heart of Yala Block 1, renowned for having the highest density of leopards in the world. This expedition is designed for serious wildlife enthusiasts and photographers. You will be accompanied by an expert naturalist who knows the terrain and animal behaviors intimately.",
    //     duration: "Full Day (12 Hours)",
    //     jeepType: "Luxury 4x4 Land Cruiser",
    //     capacity: "Max 6 Guests",
    //     meals: "Breakfast & Lunch Picnic",
    //     itinerary: [
    //         {
    //             time: "05:00 AM",
    //             title: "Hotel Pickup",
    //             description: "Private transfer from your hotel in Tissamaharama or Yala area.",
    //             icon: "directions_car"
    //         },
    //         {
    //             time: "06:00 AM",
    //             title: "Park Gate Entry",
    //             description: "Early entry to beat the crowd and catch the morning golden hour.",
    //             icon: "confirmation_number"
    //         },
    //         {
    //             time: "09:00 AM",
    //             title: "Jungle Breakfast",
    //             description: "Enjoy a premium picnic breakfast at a designated scenic location within the park.",
    //             icon: "bakery_dining"
    //         },
    //         {
    //             time: "12:00 PM",
    //             title: "Lunch Break",
    //             description: "Relaxing lunch by the river or beach within the park.",
    //             icon: "restaurant"
    //         },
    //         {
    //             time: "06:00 PM",
    //             title: "Safari Ends",
    //             description: "Return transfer to your hotel after a full day of adventure.",
    //             icon: "flag"
    //         }
    //     ],
    //     inclusions: [
    //         "Private Luxury Safari Jeep",
    //         "Expert Driver & Naturalist Guide",
    //         "Picnic Breakfast, Lunch & Refreshments",
    //         "Binoculars & Photography Bean Bags",
    //         "All Taxes & Service Charges"
    //     ],
    //     exclusions: [
    //         "Park Entrance Fees (Paid at gate)",
    //         "Hotel Accommodation",
    //         "Tips & Gratuities"
    //     ],
    //     price: {
    //         jeep: 250.00,
    //         serviceFee: 25.00,
    //         tax: 20.00,
    //         total: 295.00,
    //         parkFeeNote: "~$35 / person"
    //     },
    //     gallery: [
    //         "https://lh3.googleusercontent.com/aida-public/AB6AXuCkRaGpdRUZDZmeVdjnY-LXUGPaLI6m10B-8Z1ZCYb6qlIlae--orkW5Sj5uidJqdFQiP19hvqVGMJ2w2KR8KyZGNzvAj49CTLkNGaUI3CEN8h-c8vA94zD0mWiYFL7XQpqnHLyZIk63R-C3jtVo-Q41m22SeAjnmZ6nkR2Czh7sgzary8MAygFCUxu_9QO-XINRceaP1lgnnFVaXXVKJV17SAj1lX550w7bvl2GojBBo-YgqzyZvjzM4ULAwwy9eCsJ7i3T3MIFvJZ",
    //         "https://lh3.googleusercontent.com/aida-public/AB6AXuCYZWmPd7gLUmam_PaUKMIyZGUc1Zmt0K5uFOgqEtavGRuOrDDe2ybYyOyYDHl8Pjf157wQ6IO5QBd3FSZmHdJlwE1NWE68sg4aR3tPDPfwC5d2FluHi9Ty5u9jDoLSqDEpFngUAKLG0lrf0esN7CO60tlBf1pO-DQaFgY_7zRVt7byq2ognUMfD2XYm46EJ5HqUlX8Yxot1Ml_XjkZj0n5-h4yV95NyYqpN-ZVFMBB3pEVVtaBpL2bjLxgwgeFo7WCiHUt5Ds_58Sf",
    //         "https://lh3.googleusercontent.com/aida-public/AB6AXuBcSSVyrux9zqpLxcX20NBcMlqlYoPERlb2uebaDaD0uvn7_aGWQey410zuUZT6a9xhbfMn1-eR_UTbME5RKZ2w-xFsqXLdUxifYXjZjDg1OoGs2Qf2HFeNb9cHk4zatk_ULfnBs7OJsQRarbDKnZhzqrNsMKdcQJBxtir-nF5RYaxfiqAq8v2evQU_NzPK2anZcJ1xYNRaIpXzKPkUDUuO8EWQmhWL5nP7DRZXfUHTC_w9rv0YW0oDd8jVO_PwHPpkP2FSvi9qKJjO"
    //     ]
    // },
    // "morning-safari": {
    //     id: "morning-safari",
    //     title: "Morning Golden Hour Safari",
    //     subtitle: "Witness the jungle come alive as the sun rises over Yala.",
    //     heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIE-zc_aV0U0lmAmLrsHx6P2yX524Zf2WQ6Jn8Tix093E0P9EjdEi3gykij-ggdqWDLTxJSANjpri8Qk0zQOTZicw4ugQpSawxQWY7cG7vo7Fj-trY3733gwudS6TAi2SYTnHsL3ZhWXMJUzsoCk8RQKgX_szL5GfwOl3L0sgH8C3tb7tvcAN-PtP6EjLfgXrpmaQSzVuP9OHJkdpfqJdnrbmoAQJ9Yqylil3zf1gxwZUVNyjMGOcgFiJiBKckRsMGle-miwm6Fo7b",
    //     description: "The morning safari offers the best chance to see leopards and bears as they are most active during the cooler early hours. Start your day with the sounds of the jungle.",
    //     duration: "5 Hours (5am - 10am)",
    //     jeepType: "Standard Safari Jeep",
    //     capacity: "Max 6 Guests",
    //     meals: "Not Included (Available on request)",
    //     itinerary: [
    //         {
    //             time: "05:00 AM",
    //             title: "Hotel Pickup",
    //             description: "Pickup from Tissamaharama/Yala hotels.",
    //             icon: "directions_car"
    //         },
    //         {
    //             time: "06:00 AM",
    //             title: "Gate Entry",
    //             description: "Enter the park at opening time.",
    //             icon: "gate"
    //         },
    //         {
    //             time: "10:00 AM",
    //             title: "Safari Ends",
    //             description: "Drop off back at your hotel.",
    //             icon: "flag"
    //         }
    //     ],
    //     inclusions: [
    //         "Private Safari Jeep",
    //         "Experienced Driver/Tracker",
    //         "Water Bottles"
    //     ],
    //     exclusions: [
    //         "Park Entrance Fees",
    //         "Meals"
    //     ],
    //     price: {
    //         jeep: 45.00,
    //         serviceFee: 5.00,
    //         tax: 0.00,
    //         total: 50.00,
    //         parkFeeNote: "~$35 / person"
    //     },
    //     gallery: [
    //         "https://lh3.googleusercontent.com/aida-public/AB6AXuBcSSVyrux9zqpLxcX20NBcMlqlYoPERlb2uebaDaD0uvn7_aGWQey410zuUZT6a9xhbfMn1-eR_UTbME5RKZ2w-xFsqXLdUxifYXjZjDg1OoGs2Qf2HFeNb9cHk4zatk_ULfnBs7OJsQRarbDKnZhzqrNsMKdcQJBxtir-nF5RYaxfiqAq8v2evQU_NzPK2anZcJ1xYNRaIpXzKPkUDUuO8EWQmhWL5nP7DRZXfUHTC_w9rv0YW0oDd8jVO_PwHPpkP2FSvi9qKJjO"
    //     ]
    // },
    // // Add default data for others to prevent crashes, can be refined later
    // "afternoon-safari": {
    //     id: "afternoon-safari",
    //     title: "Afternoon Safari",
    //     subtitle: "Catch the golden light and evening wildlife activity.",
    //     heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuATxZ5tkzTtgSGaxPpd1StmIopwhsKH3VXkFxt93zsWG_p5BhhSR-RH-LTP41AL7MUkqLN5HZXvsh3kbSRasE2MHK8PwUcwW9XY_CL4JXZ3MYHk8wYcYrGz-920CCb07M4_jVGv-RaoVMU7e9H6cr_KjqAQK335Irmhtw0z8TuW5awsPgUwYdTGpe3kzD4tDvTgj6k7L1-ldaPkH1gKb9h3giLM_B1SDlBAiFKSjqXOi7AezS-jsX_dYD9-d6V_HfFijuj3KmT2NFMq",
    //     description: "As the day cools down, animals come out to drink. Perfect for seeing elephants and scenic sunsets.",
    //     duration: "4.5 Hours (2pm - 6:30pm)",
    //     jeepType: "Standard Safari Jeep",
    //     capacity: "Max 6 Guests",
    //     meals: "Water provided",
    //     itinerary: [
    //         { time: "02:00 PM", title: "Pickup", description: "Hotel pickup.", icon: "directions_car" },
    //         { time: "06:30 PM", title: "Dropoff", description: "Return to hotel.", icon: "flag" }
    //     ],
    //     inclusions: ["Jeep", "Driver", "Water"],
    //     exclusions: ["Park Fees", "Meals"],
    //     price: { jeep: 45.00, serviceFee: 5.00, tax: 0, total: 50.00, parkFeeNote: "~$35 / person" },
    //     gallery: []
    // },
    // "full-day-safari": {
    //     id: "full-day-safari",
    //     title: "Full Day Safari",
    //     subtitle: "The complete dawn-to-dusk Yala experience.",
    //     heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0q13f-PHx5NADQjFD7MIeLChdEl2kGpagF01FwUfDplzyWbpzSORWQLcdbbzRvCt7UHzg4BObUtiXoJL5aTcnHC_KX33hBGT_RfOffZDBsBh2pQoigk5MHP31F2EnruxJ_7zXeE703w2sF_GE7_Pf99g2MlCIX7ViHfst7WIFtOULiI-unL23gKfxRlil9ZCFIr1fN3GiuNgA3Hc6WVOJnI5OzZpRHciVgw2NZV_RPC6fDb3XNFFmCHelSm2gJfwMOFkqHIrBVK6",
    //     description: "Maximize your chances of sightings with a full day in the park.",
    //     duration: "12 Hours",
    //     jeepType: "Standard Safari Jeep",
    //     capacity: "Max 6 Guests",
    //     meals: "Not included",
    //     itinerary: [],
    //     inclusions: ["Jeep", "Driver"],
    //     exclusions: ["Fees"],
    //     price: { jeep: 85.00, serviceFee: 10.00, tax: 5.00, total: 100.00, parkFeeNote: "~$35 / person" },
    //     gallery: []
    // },
    // "private-safari": {
    //     id: "private-safari",
    //     title: "Private Jeep Safari",
    //     subtitle: "Your own jeep, your own pace.",
    //     heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUQBSOzWF9hniLPg6OCt8h-zcfUHdLKSftEnjMLCHncNMTkpitraefnLxFIu3_t3uAlbvKvXQMmM7bKZSSCwFcM2QuSoIwdN4-Cuwt86iCW8AgfplaCfJunH5nM6QBtBsjvW9YWJOgkNfxVhGZSQn6xOKFkSUoVOGU13U4yckFhfw0t8ss69rixx2c4QB1haXwqu3a_WTU23xaqhXf8yaCmLSI5osBOsstKtQ2XES3kjSnnx5w28GQ-rOvZ93ep3ttRjfSZN_s3vbp",
    //     description: "Exclusive use of a jeep for you and your group.",
    //     duration: "Flexible",
    //     jeepType: "Private Jeep",
    //     capacity: "Max 6 Guests",
    //     meals: "None",
    //     itinerary: [],
    //     inclusions: ["Private Jeep"],
    //     exclusions: ["Fees"],
    //     price: { jeep: 45.00, serviceFee: 5.00, tax: 0, total: 50.00, parkFeeNote: "~$35 / person" },
    //     gallery: []
    // },
    // "bird-watching": {
    //     id: "bird-watching",
    //     title: "Bird Watching Safari",
    //     subtitle: "Focus on the avian wonders of Yala.",
    //     heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYZWmPd7gLUmam_PaUKMIyZGUc1Zmt0K5uFOgqEtavGRuOrDDe2ybYyOyYDHl8Pjf157wQ6IO5QBd3FSZmHdJlwE1NWE68sg4aR3tPDPfwC5d2FluHi9Ty5u9jDoLSqDEpFngUAKLG0lrf0esN7CO60tlBf1pO-DQaFgY_7zRVt7byq2ognUMfD2XYm46EJ5HqUlX8Yxot1Ml_XjkZj0n5-h4yV95NyYqpN-ZVFMBB3pEVVtaBpL2bjLxgwgeFo7WCiHUt5Ds_58Sf",
    //     description: "Specialized tour for bird enthusiasts.",
    //     duration: "4 Hours",
    //     jeepType: "Standard Jeep",
    //     capacity: "Max 6 Guests",
    //     meals: "None",
    //     itinerary: [],
    //     inclusions: ["Jeep", "Bird Guide"],
    //     exclusions: ["Fees"],
    //     price: { jeep: 60.00, serviceFee: 5.00, tax: 0, total: 65.00, parkFeeNote: "~$35 / person" },
    //     gallery: []
    // },

};

export const destinations: Destination[] = [
    {
        name: "Sithulpahuwa Rock Temple",
        description: "An ancient Buddhist monastery over 2000 years old, offering breathtaking views and spiritual tranquility within Yala Block 1.",
        image: sithulpawwa.src,
        season: "Feb - July",
        location: "Yala Block 1"
    },
    {
        name: "Magul Vihara",
        description: "Ancient temple ruins showcasing the rich heritage and royal connections of the region, located within Yala National Park.",
        image: magul_viharaya.src,
        season: "Feb - July",
        location: "Yala National Park"
    },
    {
        name: "Patanangala Beach",
        description: "A picturesque beach with iconic rock formations where crocodiles may be seen; swimming is not permitted.",
        image: patanangala_Beach.src,
        season: "Feb - July",
        location: "Yala National Park"
    },
    {
        name: "Yala Beach",
        description: "Pristine untouched coastal area near the park offering stunning ocean vistas.",
        image: yala_beach.src,
        season: "Feb - July",
        location: "Yala National Park"
    },
    {
        name: "Weheragala Reservoir & Manik River Natural Pool",
        description: "Serene water bodies that provide vital resources for wildlife and showcase natural beauty; Manik River flows through the revered Kataragama pilgrimage site.",
        image: "https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2014/02/DSC_1513.jpg?resize=640%2C384&ssl=1",
        season: "Feb - July",
        location: "Yala National Park"
    },
    {
        name: "Thissa Lake (Tissamaharama Lake)",
        description: "Large artificial lake just outside Yala offering beautiful sunsets, boat rides, and wildlife sightings like fruit bats and various birds.",
        image: thissa_lake.src,
        season: "All Year",
        location: "Tissamaharama"
    },
    {
        name: "Weerawila-Thissa Sanctuary",
        description: "Birding hotspot attracting numerous resident and migratory water birds, located near Yala.",
        image: Sanctuary.src,
        season: "Nov - April",
        location: "Near Yala"
    },
    {
        name: "Kirinda Rajamaha Viharaya",
        description: "Historic Buddhist temple perched on a rocky outcrop beside the beach in Kirinda, offering panoramic ocean views and peace.",
        image: kirinda_rajamaha_viharaya.src,
        season: "Feb - July",
        location: "Kirinda"
    },
];

export const tabs: Tab[] = [
  { id: PackageCategory.PRIVATE_INCLUSIVE, label: "Private All-Inclusive" },
  { id: PackageCategory.SHARED_INCLUSIVE, label: "Shared All-Inclusive" },
  { id: PackageCategory.PRIVATE_JEEP_ONLY, label: "Private Jeep-Only" },
  { id: PackageCategory.SHARED_JEEP_ONLY, label: "Shared Jeep-Only" },
];

export const categories: PackageCategory[] = [
    PackageCategory.CATEGORY_ALL,
    PackageCategory.PRIVATE_INCLUSIVE,
    PackageCategory.SHARED_INCLUSIVE,
    PackageCategory.PRIVATE_JEEP_ONLY,
    PackageCategory.SHARED_JEEP_ONLY,
];

export const durations: Duration[] = [
    Duration.DURATION_ALL,
    Duration.MORNING,
    Duration.AFTERNOON,
    Duration.HALFDAY,
    Duration.FULLDAY
]

export const prices: PriceRange[] = [
    PriceRange.PRICE_RANGE_ALL,
    PriceRange.PRICE_RANGE_50,
    PriceRange.PRICE_RANGE_100,
    PriceRange.PRICE_RANGE_150,
    PriceRange.PRICE_RANGE_200
]

export const pakagesId: string[] = [
    "private-inclusive-morning-safari",
    "private-inclusive-afternoon-safari",
    "private-inclusive-halfday-safari",
    "private-inclusive-full-day-safari",
    "shared-inclusive-morning-safari",
    "shared-inclusive-afternoon-safari",
    "shared-inclusive-halfday-safari",
    "shared-inclusive-full-day-safari",
    "private-jeep-only-morning-safari",
    "private-jeep-only-full-day-safari",
    "shared-jeep-only-morning-safari",
    "shared-jeep-only-full-day-safari"
]