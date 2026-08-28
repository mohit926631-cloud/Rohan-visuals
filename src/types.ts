export type ProjectCategory = 'all' | 'portraits' | 'weddings' | 'travel' | 'editorial' | 'events';

export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  caption?: string;
  location?: string;
  cameraInfo?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'portraits' | 'weddings' | 'travel' | 'editorial' | 'events';
  coverImage: string;
  location: string;
  year: string;
  clientOrContext: string;
  description: string;
  cameraSpecs: string;
  images: PhotoItem[];
  featured?: boolean;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  readTime: string;
  coverImage: string;
  summary: string;
  narrative: string[];
  quote?: string;
  gallery: PhotoItem[];
}

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  category: string;
  investment: string;
  duration: string;
  deliverables: string[];
  idealFor: string;
  image: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  preferredDate: string;
  location: string;
  budget: string;
  message: string;
}
