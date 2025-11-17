export interface FlexDateRange {
  start: string; // ISO date string
  end: string; // ISO date string
}

export interface FlexAvailabilityResponse {
  itemId: string;
  available: boolean;
  quantity: number;
  reserved: number;
}

export interface FlexItemDetails {
  id: string;
  name: string;
  description?: string;
  category?: string;
  price?: number;
  quantity?: number;
}

export interface FlexApiError {
  message: string;
  code?: string;
  statusCode: number;
}

