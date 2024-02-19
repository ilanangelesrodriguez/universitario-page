export interface IDAO<T> {
    getAll(): Promise<T[]>;
}