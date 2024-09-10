import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosHeaders,
  AxiosResponseHeaders,
} from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
  headers: AxiosResponseHeaders;
}

export class ApiService {
  private readonly axiosInstance: AxiosInstance;

  constructor(apiUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: apiUrl,
      timeout: 5000,
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  private initializeRequestInterceptor(): void {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const token = this.getAuthToken();
        if (token) {
          if (!config.headers) {
            config.headers = new AxiosHeaders();
          }
          config.headers.set('Authorization', `Bearer ${token}`);
        }
        return config;
      },
      (error: AxiosError): Promise<never> => {
        console.error('Erro ao configurar a requisição:', error.message);
        return Promise.reject(error);
      }
    );
  }

  private initializeResponseInterceptor(): void {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => response,
      (error: AxiosError): Promise<never> => {
        this.handleRequestError(error);
        return Promise.reject(error);
      }
    );
  }

  private getAuthToken(): string | null {
    const cookieString = document.cookie.split('; ').find(row => row.startsWith('token='));
    return cookieString ? cookieString.split('=')[1] : null;
  }

  async get<T>(path: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>('GET', path, config);
  }

  async post<T>(path: string, data: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>('POST', path, { ...config, data });
  }

  async put<T>(path: string, data: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>('PUT', path, { ...config, data });
  }

  async delete<T>(path: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>('DELETE', path, config);
  }

  private async request<T>(
    method: AxiosRequestConfig['method'],
    path: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.request<T>({ method, url: path, ...config });
      return {
        data: response.data,
        status: response.status,
        headers: response.headers as AxiosResponseHeaders,
      };
    } catch (error: unknown) {
      if (this.isAxiosError(error)) {
        this.handleRequestError(error);
      } else {
        console.error('Erro desconhecido:', error);
      }
      throw error;
    }
  }

  private handleRequestError(error: AxiosError): void {
    // Centraliza o tratamento de erros e fornece feedback apropriado
    console.error('Erro na requisição:', error.message);
    // Aqui, você pode adicionar notificações para o usuário, como toast messages
  }

  private isAxiosError(error: unknown): error is AxiosError {
    return axios.isAxiosError(error);
  }
}
