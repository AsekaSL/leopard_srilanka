export interface Package {
    title: string;
    price: number;
    duration: string;
    description: string;
    features: PackageFeature[];
    image: string;
    badge?: string;
    featured?: boolean;
}

export interface PackageFeature {
    icon: string;
    text: string;
}

export interface Destination {
    name: string;
    description: string;
    image: string;
    season: string;
    location: string;
}

export interface Review {
    content: string;
    author: string;
    country: string;
    avatar: string;
    rating: number;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface Service {
    label: string;
    href: string;
}

export interface Blog {
    label: string;
    href: string;
}


export interface JourneyStep {
    icon: string;
    title: string;
    description: string;
}

export interface PackageItineraryItem {
    time: string;
    title: string;
    description: string;
    icon: string;
}

export interface PricingPerPerson {
    label: string;
    price: number;
}

export interface PackageDetail {
    id: string;
    title: string;
    subtitle: string;
    heroImage: string;
    description: string;
    duration: string;
    jeepType: string;
    packageCategory?: PackageCategory;
    durationCategory?: Duration;
    priceRange?: PriceRange;
    capacity: string;
    meals: string;
    itinerary: PackageItineraryItem[];
    inclusions: string[];
    exclusions: string[];
    badge?: Badge;
    price: {
        adult?: number;
        child?: number;
        infant?: number;
        jeep?: number;
        serviceFee?: number;
        tax?: number;
        total?: number;
        parkFeeNote?: string;
    };
    pricingPerPerson?: PricingPerPerson[];
    gallery: string[];
}

export interface Tab {
    id: PackageCategory;
    label: string;
}

export enum PackageCategory {
    CATEGORY_ALL = 'Category',
    PRIVATE_INCLUSIVE = 'Private Inclusive',
    SHARED_INCLUSIVE = 'Shared Inclusive',
    PRIVATE_JEEP_ONLY = 'Private Jeep Only',
    SHARED_JEEP_ONLY = 'Shared Jeep Only',
}

export enum Badge {
    RECOMMENDED = 'Recommended',
    NEW = 'New',
    POPULAR = 'MOST POPULAR',
    BEST_VALUE = 'BEST VALUE',
    TOP_SELLER = 'TOP SELLER'
}

export enum Duration {
    DURATION_ALL = 'Duration',
    MORNING = 'Morning - 5 Hours',
    AFTERNOON = 'Afternoon - 5 Hours',
    HALFDAY = 'Halfday - 7 Hours',
    FULLDAY = 'Fullday - 13 Hours',
}

export enum PriceRange {
    PRICE_RANGE_ALL = 'Price Range',
    PRICE_RANGE_50 = '0 - 50',
    PRICE_RANGE_100 = '51 - 100',
    PRICE_RANGE_150 = '101 - 150',
    PRICE_RANGE_200 = '151 - 200',
}