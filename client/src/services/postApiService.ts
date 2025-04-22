import axios, { AxiosError, AxiosHeaders, AxiosResponse } from "axios";

export async function postApiService<T, R = unknown>(
  data: T,
  url: string,
  headers?: AxiosHeaders
): Promise<R> {
  try {
    console.log("Sending data:", JSON.stringify(data));

    const response: AxiosResponse<R> = await axios.post(url, data, {
      headers: {
        ...headers,
      },
    });


    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Build a structured error object
      const structuredError = {
        message: error.response?.data?.message || error.message || "Request failed.",
        status: error.response?.status || 500,
        details: error.response?.data || null, // Include full server error data if available
      };

      console.error("API Error:", structuredError);
      throw structuredError; // Throw structured error for the caller
    }

    // Handle unexpected errors
    console.error("Unexpected Error:", error);
    throw {
      message: "An unexpected error occurred.",
      status: 500,
      details: null,
    };
  }
}
