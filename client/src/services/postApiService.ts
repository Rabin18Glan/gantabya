import { CORS_HEADERS } from "@/const/apiRoutes";
import axios, { AxiosHeaders, AxiosResponse } from "axios";

export async function postApiService<T, R = unknown>(
  data: T,
  url: string,
  headers?: AxiosHeaders
): Promise<R> {
  try {
    console.log("Sending data:", JSON.stringify(data));

    const response: AxiosResponse<R> = await axios.post(url, data, {
      headers: {
        ...CORS_HEADERS,
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error in postApiService:", error);
    throw error; // Rethrow error to let the caller handle it
  }
}
