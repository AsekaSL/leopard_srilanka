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

export interface JourneyStep {
    icon: string;
    title: string;
    description: string;
}
