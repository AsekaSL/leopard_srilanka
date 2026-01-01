
export interface PackageItineraryItem {
    time: string;
    title: string;
    description: string;
    icon: string;
}

export interface PackageDetail {
    id: string;
    title: string;
    subtitle: string;
    heroImage: string;
    description: string;
    duration: string;
    jeepType: string;
    capacity: string;
    meals: string;
    itinerary: PackageItineraryItem[];
    inclusions: string[];
    exclusions: string[];
    price: {
        jeep: number;
        serviceFee: number;
        tax: number;
        total: number;
        parkFeeNote: string;
    };
    gallery: string[];
}

export const packagesData: Record<string, PackageDetail> = {
    "luxury-safari": {
        id: "luxury-safari",
        title: "The Golden Shadow Expedition",
        subtitle: "A premium full-day safari experience dedicated to tracking the elusive Sri Lankan Leopard.",
        heroImage: "/package_details_hero.png",
        description: "Embark on an unforgettable journey through the heart of Yala Block 1, renowned for having the highest density of leopards in the world. This expedition is designed for serious wildlife enthusiasts and photographers. You will be accompanied by an expert naturalist who knows the terrain and animal behaviors intimately.",
        duration: "Full Day (12 Hours)",
        jeepType: "Luxury 4x4 Land Cruiser",
        capacity: "Max 6 Guests",
        meals: "Breakfast & Lunch Picnic",
        itinerary: [
            {
                time: "05:00 AM",
                title: "Hotel Pickup",
                description: "Private transfer from your hotel in Tissamaharama or Yala area.",
                icon: "directions_car"
            },
            {
                time: "06:00 AM",
                title: "Park Gate Entry",
                description: "Early entry to beat the crowd and catch the morning golden hour.",
                icon: "confirmation_number"
            },
            {
                time: "09:00 AM",
                title: "Jungle Breakfast",
                description: "Enjoy a premium picnic breakfast at a designated scenic location within the park.",
                icon: "bakery_dining"
            },
            {
                time: "12:00 PM",
                title: "Lunch Break",
                description: "Relaxing lunch by the river or beach within the park.",
                icon: "restaurant"
            },
            {
                time: "06:00 PM",
                title: "Safari Ends",
                description: "Return transfer to your hotel after a full day of adventure.",
                icon: "flag"
            }
        ],
        inclusions: [
            "Private Luxury Safari Jeep",
            "Expert Driver & Naturalist Guide",
            "Picnic Breakfast, Lunch & Refreshments",
            "Binoculars & Photography Bean Bags",
            "All Taxes & Service Charges"
        ],
        exclusions: [
            "Park Entrance Fees (Paid at gate)",
            "Hotel Accommodation",
            "Tips & Gratuities"
        ],
        price: {
            jeep: 250.00,
            serviceFee: 25.00,
            tax: 20.00,
            total: 295.00,
            parkFeeNote: "~$35 / person"
        },
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCkRaGpdRUZDZmeVdjnY-LXUGPaLI6m10B-8Z1ZCYb6qlIlae--orkW5Sj5uidJqdFQiP19hvqVGMJ2w2KR8KyZGNzvAj49CTLkNGaUI3CEN8h-c8vA94zD0mWiYFL7XQpqnHLyZIk63R-C3jtVo-Q41m22SeAjnmZ6nkR2Czh7sgzary8MAygFCUxu_9QO-XINRceaP1lgnnFVaXXVKJV17SAj1lX550w7bvl2GojBBo-YgqzyZvjzM4ULAwwy9eCsJ7i3T3MIFvJZ",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCYZWmPd7gLUmam_PaUKMIyZGUc1Zmt0K5uFOgqEtavGRuOrDDe2ybYyOyYDHl8Pjf157wQ6IO5QBd3FSZmHdJlwE1NWE68sg4aR3tPDPfwC5d2FluHi9Ty5u9jDoLSqDEpFngUAKLG0lrf0esN7CO60tlBf1pO-DQaFgY_7zRVt7byq2ognUMfD2XYm46EJ5HqUlX8Yxot1Ml_XjkZj0n5-h4yV95NyYqpN-ZVFMBB3pEVVtaBpL2bjLxgwgeFo7WCiHUt5Ds_58Sf",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBcSSVyrux9zqpLxcX20NBcMlqlYoPERlb2uebaDaD0uvn7_aGWQey410zuUZT6a9xhbfMn1-eR_UTbME5RKZ2w-xFsqXLdUxifYXjZjDg1OoGs2Qf2HFeNb9cHk4zatk_ULfnBs7OJsQRarbDKnZhzqrNsMKdcQJBxtir-nF5RYaxfiqAq8v2evQU_NzPK2anZcJ1xYNRaIpXzKPkUDUuO8EWQmhWL5nP7DRZXfUHTC_w9rv0YW0oDd8jVO_PwHPpkP2FSvi9qKJjO"
        ]
    },
    "morning-safari": {
        id: "morning-safari",
        title: "Morning Golden Hour Safari",
        subtitle: "Witness the jungle come alive as the sun rises over Yala.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIE-zc_aV0U0lmAmLrsHx6P2yX524Zf2WQ6Jn8Tix093E0P9EjdEi3gykij-ggdqWDLTxJSANjpri8Qk0zQOTZicw4ugQpSawxQWY7cG7vo7Fj-trY3733gwudS6TAi2SYTnHsL3ZhWXMJUzsoCk8RQKgX_szL5GfwOl3L0sgH8C3tb7tvcAN-PtP6EjLfgXrpmaQSzVuP9OHJkdpfqJdnrbmoAQJ9Yqylil3zf1gxwZUVNyjMGOcgFiJiBKckRsMGle-miwm6Fo7b",
        description: "The morning safari offers the best chance to see leopards and bears as they are most active during the cooler early hours. Start your day with the sounds of the jungle.",
        duration: "5 Hours (5am - 10am)",
        jeepType: "Standard Safari Jeep",
        capacity: "Max 6 Guests",
        meals: "Not Included (Available on request)",
        itinerary: [
            {
                time: "05:00 AM",
                title: "Hotel Pickup",
                description: "Pickup from Tissamaharama/Yala hotels.",
                icon: "directions_car"
            },
            {
                time: "06:00 AM",
                title: "Gate Entry",
                description: "Enter the park at opening time.",
                icon: "gate"
            },
            {
                time: "10:00 AM",
                title: "Safari Ends",
                description: "Drop off back at your hotel.",
                icon: "flag"
            }
        ],
        inclusions: [
            "Private Safari Jeep",
            "Experienced Driver/Tracker",
            "Water Bottles"
        ],
        exclusions: [
            "Park Entrance Fees",
            "Meals"
        ],
        price: {
            jeep: 45.00,
            serviceFee: 5.00,
            tax: 0.00,
            total: 50.00,
            parkFeeNote: "~$35 / person"
        },
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBcSSVyrux9zqpLxcX20NBcMlqlYoPERlb2uebaDaD0uvn7_aGWQey410zuUZT6a9xhbfMn1-eR_UTbME5RKZ2w-xFsqXLdUxifYXjZjDg1OoGs2Qf2HFeNb9cHk4zatk_ULfnBs7OJsQRarbDKnZhzqrNsMKdcQJBxtir-nF5RYaxfiqAq8v2evQU_NzPK2anZcJ1xYNRaIpXzKPkUDUuO8EWQmhWL5nP7DRZXfUHTC_w9rv0YW0oDd8jVO_PwHPpkP2FSvi9qKJjO"
        ]
    },
    // Add default data for others to prevent crashes, can be refined later
    "afternoon-safari": {
        id: "afternoon-safari",
        title: "Afternoon Safari",
        subtitle: "Catch the golden light and evening wildlife activity.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuATxZ5tkzTtgSGaxPpd1StmIopwhsKH3VXkFxt93zsWG_p5BhhSR-RH-LTP41AL7MUkqLN5HZXvsh3kbSRasE2MHK8PwUcwW9XY_CL4JXZ3MYHk8wYcYrGz-920CCb07M4_jVGv-RaoVMU7e9H6cr_KjqAQK335Irmhtw0z8TuW5awsPgUwYdTGpe3kzD4tDvTgj6k7L1-ldaPkH1gKb9h3giLM_B1SDlBAiFKSjqXOi7AezS-jsX_dYD9-d6V_HfFijuj3KmT2NFMq",
        description: "As the day cools down, animals come out to drink. Perfect for seeing elephants and scenic sunsets.",
        duration: "4.5 Hours (2pm - 6:30pm)",
        jeepType: "Standard Safari Jeep",
        capacity: "Max 6 Guests",
        meals: "Water provided",
        itinerary: [
            { time: "02:00 PM", title: "Pickup", description: "Hotel pickup.", icon: "directions_car" },
            { time: "06:30 PM", title: "Dropoff", description: "Return to hotel.", icon: "flag" }
        ],
        inclusions: ["Jeep", "Driver", "Water"],
        exclusions: ["Park Fees", "Meals"],
        price: { jeep: 45.00, serviceFee: 5.00, tax: 0, total: 50.00, parkFeeNote: "~$35 / person" },
        gallery: []
    },
    "full-day-safari": {
        id: "full-day-safari",
        title: "Full Day Safari",
        subtitle: "The complete dawn-to-dusk Yala experience.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0q13f-PHx5NADQjFD7MIeLChdEl2kGpagF01FwUfDplzyWbpzSORWQLcdbbzRvCt7UHzg4BObUtiXoJL5aTcnHC_KX33hBGT_RfOffZDBsBh2pQoigk5MHP31F2EnruxJ_7zXeE703w2sF_GE7_Pf99g2MlCIX7ViHfst7WIFtOULiI-unL23gKfxRlil9ZCFIr1fN3GiuNgA3Hc6WVOJnI5OzZpRHciVgw2NZV_RPC6fDb3XNFFmCHelSm2gJfwMOFkqHIrBVK6",
        description: "Maximize your chances of sightings with a full day in the park.",
        duration: "12 Hours",
        jeepType: "Standard Safari Jeep",
        capacity: "Max 6 Guests",
        meals: "Not included",
        itinerary: [],
        inclusions: ["Jeep", "Driver"],
        exclusions: ["Fees"],
        price: { jeep: 85.00, serviceFee: 10.00, tax: 5.00, total: 100.00, parkFeeNote: "~$35 / person" },
        gallery: []
    },
    "private-safari": {
        id: "private-safari",
        title: "Private Jeep Safari",
        subtitle: "Your own jeep, your own pace.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUQBSOzWF9hniLPg6OCt8h-zcfUHdLKSftEnjMLCHncNMTkpitraefnLxFIu3_t3uAlbvKvXQMmM7bKZSSCwFcM2QuSoIwdN4-Cuwt86iCW8AgfplaCfJunH5nM6QBtBsjvW9YWJOgkNfxVhGZSQn6xOKFkSUoVOGU13U4yckFhfw0t8ss69rixx2c4QB1haXwqu3a_WTU23xaqhXf8yaCmLSI5osBOsstKtQ2XES3kjSnnx5w28GQ-rOvZ93ep3ttRjfSZN_s3vbp",
        description: "Exclusive use of a jeep for you and your group.",
        duration: "Flexible",
        jeepType: "Private Jeep",
        capacity: "Max 6 Guests",
        meals: "None",
        itinerary: [],
        inclusions: ["Private Jeep"],
        exclusions: ["Fees"],
        price: { jeep: 45.00, serviceFee: 5.00, tax: 0, total: 50.00, parkFeeNote: "~$35 / person" },
        gallery: []
    },
    "bird-watching": {
        id: "bird-watching",
        title: "Bird Watching Safari",
        subtitle: "Focus on the avian wonders of Yala.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYZWmPd7gLUmam_PaUKMIyZGUc1Zmt0K5uFOgqEtavGRuOrDDe2ybYyOyYDHl8Pjf157wQ6IO5QBd3FSZmHdJlwE1NWE68sg4aR3tPDPfwC5d2FluHi9Ty5u9jDoLSqDEpFngUAKLG0lrf0esN7CO60tlBf1pO-DQaFgY_7zRVt7byq2ognUMfD2XYm46EJ5HqUlX8Yxot1Ml_XjkZj0n5-h4yV95NyYqpN-ZVFMBB3pEVVtaBpL2bjLxgwgeFo7WCiHUt5Ds_58Sf",
        description: "Specialized tour for bird enthusiasts.",
        duration: "4 Hours",
        jeepType: "Standard Jeep",
        capacity: "Max 6 Guests",
        meals: "None",
        itinerary: [],
        inclusions: ["Jeep", "Bird Guide"],
        exclusions: ["Fees"],
        price: { jeep: 60.00, serviceFee: 5.00, tax: 0, total: 65.00, parkFeeNote: "~$35 / person" },
        gallery: []
    }
};
