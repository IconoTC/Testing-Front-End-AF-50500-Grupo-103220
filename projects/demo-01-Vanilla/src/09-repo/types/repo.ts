export interface Repo<T extends { id: string }> {
  getAll: () => Promise<T[]>;
  getById: (id: T['id']) => Promise<T>; // Throws an error if the item is not found
  create: (item: Omit<T, 'id'>) => Promise<T>;
  update: (id: T['id'], item: Partial<Omit<T, 'id'>>) => Promise<T>; // Throws an error if the item is not found
  delete: (id: T['id']) => Promise<void>; // Throws an error if the item is not found
}
