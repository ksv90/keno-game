export interface ConnectorOptions {
  readonly serverUrl: string;
  readonly token: string;
}

export class Connector {
  #serverUrl: string;

  #token: string;

  constructor(options: ConnectorOptions) {
    this.#serverUrl = options.serverUrl;
    this.#token = options.token;
  }

  async getSessionData(): Promise<Response> {
    const response = await this.#get(`${this.#serverUrl}/game/init`);
    return response;
  }

  async ticketCreate(bet: number, spots: readonly number[]): Promise<Response> {
    const response = await this.#post(`${this.#serverUrl}/ticket/create`, { bet, spots });
    return response;
  }

  async ticketCancel(ticketId: string): Promise<Response> {
    const response = await this.#post(`${this.#serverUrl}/ticket/cancel`, { ticketId });
    return response;
  }

  async #get(url: string): Promise<Response> {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.#token}`,
      },
    });

    if (!response.ok) {
      throw await this.#createError(response);
    }

    return response;
  }

  async #post(url: string, data?: unknown): Promise<Response> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.#token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw await this.#createError(response);
    }

    return response;
  }

  async #createError(response: Response): Promise<Error> {
    const { error, message } = (await response.json()) as { error: string; message: string; statusCode: number };
    return new Error(message, { cause: error });
  }
}
