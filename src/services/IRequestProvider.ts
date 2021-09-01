export interface IRequestProvider {
  get(url:string): Promise<void>;
}
