export class EchoResponse {
  path: string;
  headers: { [key: string]: string | string[] };
  method: string;
  body?: string;
}
