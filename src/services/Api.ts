import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosResponseHeaders,
} from "axios";

interface ApiResponse<T> {
  data: T;
  status: number;
  headers: AxiosResponseHeaders;
}
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
export class ApiService {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      timeout: 5000,
      withCredentials: true, // Permite o envio de cookies HTTP-only
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  // Interceptor para manipulação de requisição
  private initializeRequestInterceptor(): void {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        // Como estamos usando cookie HTTP-only, não precisamos setar o token manualmente
        return config;
      },
      (error: AxiosError): Promise<never> => {
        console.error("Erro ao configurar a requisição:", error.message);
        return Promise.reject(error);
      }
    );
  }

  // Interceptor para manipulação de resposta
  private initializeResponseInterceptor(): void {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => response,
      (error: AxiosError): Promise<never> => {
        if (error.response?.status === 401) {
          // Redireciona para login em caso de erro 401 (não autorizado)
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }
    );
  }

  // Método GET
  async get<T>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("GET", path, config);
  }

  // Método POST
  async post<T>(
    path: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("POST", path, { ...config, data });
  }

  // Método PUT
  async put<T>(
    path: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("PUT", path, { ...config, data });
  }

  // Método DELETE
  async delete<T>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("DELETE", path, config);
  }

  // Método PATCH
  async patch<T>(
    path: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("PATCH", path, { ...config, data });
  }

  // Método HEAD
  async head<T>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("HEAD", path, config);
  }

  // Método OPTIONS
  async options<T>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("OPTIONS", path, config);
  }

  // Método genérico para fazer requisições HTTP
  private async request<T>(
    method: AxiosRequestConfig["method"],
    path: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.request<T>({
        method,
        url: path,
        ...config,
      });
      return {
        data: response.data,
        status: response.status,
        headers: response.headers as AxiosResponseHeaders,
      };
    } catch (error: unknown) {
      if (this.isAxiosError(error)) {
        this.handleRequestError(error);
      } else {
        console.error("Erro desconhecido:", error);
      }
      throw error;
    }
  }

  // Método para tratar erros de requisição
  private handleRequestError(error: AxiosError): void {
    console.error("Erro na requisição:", error.message);
    // Pode adicionar notificação ao usuário aqui, como toast messages
  }

  // Verifica se o erro é do tipo AxiosError
  private isAxiosError(error: unknown): error is AxiosError {
    return axios.isAxiosError(error);
  }
}
