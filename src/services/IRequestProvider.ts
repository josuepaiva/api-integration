export interface IRequestProvider {
  get(url:string): Promise<void>;
  post(url:string): Promise<void>;
}
