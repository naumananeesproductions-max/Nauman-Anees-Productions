export type SubmissionType =
  | 'service_booking'
  | 'talent_application'
  | 'event_booking'
  | 'general_contact';

export type DynamicFieldType = 'text' | 'email' | 'tel' | 'url' | 'date' | 'select' | 'textarea' | 'number';

export interface DynamicFieldConfig {
  name: string;
  label: string;
  type: DynamicFieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  helperText?: string;
  /** If provided, field only renders when selectedService matches one of these values */
  relevantServices?: string[];
}

export interface SubServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
}

export interface LegacyProfileData {
  slug: string;
  route: string;
  name: string;
  titleBadge: string;
  role: string;
  relationship: string;
  headline: string;
  positioningStatement: string;
  portrait: string;
  portraitAlt: string;
  era: string;
  summary: string;
  sections: {
    heading: string;
    body: string[];
    highlight?: string;
  }[];
  notableWorks?: string[];
  disciplines?: string[];
  historicalNote?: string;
}

export interface TalentCategoryCard {
  id: string;
  cardTitle: string;
  categoryValue: string;
  description: string;
}

export interface SubmissionPayload {
  type: SubmissionType;
  requestId: string;
  category: string;
  selectedService: string;
  sourcePage: string;
  honeypot?: string;
  data: Record<string, string | boolean | number | undefined>;
}

export interface SubmissionResult {
  success: boolean;
  requestId: string;
  message?: string;
  error?: string;
  code?: string;
}
