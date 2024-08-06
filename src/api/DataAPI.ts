export abstract class DataAPI {
  protected get<T>(url: string): Promise<T> {
    return new Promise(async (resolve, _) => {
      const response = await fetch(url);
      const data = await response.json();
      resolve(data);
    });
  }
}
