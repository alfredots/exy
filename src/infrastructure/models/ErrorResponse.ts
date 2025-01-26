export interface ErrorDetail {
  code: string;
  message: string;
}

export interface ErrorResponse {
  errors: ErrorDetail[];
  success: boolean;
}

export interface BackendErrorResponse {
  errors:
    | { [key: string]: string[] } // Quando os erros são associados a campos específicos
    | ErrorDetail[]; // Quando os erros são gerais (como no segundo objeto)
  type?: string; // Campo opcional, já que o segundo objeto não tem esse campo
  title?: string; // Campo opcional
  status?: number; // Campo opcional
  traceId?: string; // Campo opcional
  success?: boolean; // Campo opcional, presente no segundo objeto
}
