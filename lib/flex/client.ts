import {
  FlexAvailabilityResponse,
  FlexItemDetails,
  FlexDateRange,
  FlexApiError,
} from "./types";

const FLEX_API_URL = process.env.FLEX_API_URL!;
const FLEX_API_KEY = process.env.FLEX_API_KEY!;

class FlexApiClient {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = FLEX_API_URL;
    this.apiKey = FLEX_API_KEY;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        // Cache for 5 minutes
        next: { revalidate: 300 },
      });

      if (!response.ok) {
        const error: FlexApiError = {
          message: `Flex API Error: ${response.statusText}`,
          statusCode: response.status,
        };
        throw error;
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Flex API request failed:", error.message);
      }
      throw error;
    }
  }

  /**
   * Check equipment availability for a specific date range
   */
  async getEquipmentAvailability(
    itemId: string,
    dateRange: FlexDateRange
  ): Promise<FlexAvailabilityResponse> {
    try {
      return await this.request<FlexAvailabilityResponse>(
        `/items/${itemId}/availability?start=${dateRange.start}&end=${dateRange.end}`
      );
    } catch (error) {
      // Return fallback data if API fails
      console.error("Failed to fetch availability from Flex API:", error);
      return {
        itemId,
        available: false,
        quantity: 0,
        reserved: 0,
      };
    }
  }

  /**
   * Get item details from Flex
   */
  async getItemDetails(itemId: string): Promise<FlexItemDetails | null> {
    try {
      return await this.request<FlexItemDetails>(`/items/${itemId}`);
    } catch (error) {
      console.error("Failed to fetch item details from Flex API:", error);
      return null;
    }
  }

  /**
   * Sync multiple items availability (for catalog pages)
   */
  async getBulkAvailability(
    itemIds: string[],
    dateRange: FlexDateRange
  ): Promise<FlexAvailabilityResponse[]> {
    try {
      const promises = itemIds.map((id) =>
        this.getEquipmentAvailability(id, dateRange)
      );
      return await Promise.all(promises);
    } catch (error) {
      console.error("Failed to fetch bulk availability:", error);
      return [];
    }
  }
}

// Export singleton instance
export const flexClient = new FlexApiClient();

// Export helper function for server components
export async function checkAvailability(
  itemId: string,
  dateRange: FlexDateRange
): Promise<FlexAvailabilityResponse> {
  return flexClient.getEquipmentAvailability(itemId, dateRange);
}

export async function getFlexItemDetails(
  itemId: string
): Promise<FlexItemDetails | null> {
  return flexClient.getItemDetails(itemId);
}

