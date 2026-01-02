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

interface PricingPerPerson {
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
    PRIVATE_INCLUSIVE,
    SHARED_INCLUSIVE,
    PRIVATE_JEEP_ONLY,
    SHARED_JEEP_ONLY,
}

export enum Badge {
    RECOMMENDED,
    NEW,
    POPULAR,
}
