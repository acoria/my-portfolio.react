import { DataAPI } from "./DataAPI";

export abstract class Repository<T> extends DataAPI {
  constructor(private url: string) {
    super();
  }

  findAll(): Promise<T[]> {
    return this.get(this.url);
  }
}
