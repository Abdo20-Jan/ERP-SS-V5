export interface PageQuery {
  page?: number;
  limit?: number;
  search?: string;
}

export interface PageResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export function paginate<T>(
  items: T[],
  query: PageQuery,
  predicate?: (item: T, search: string) => boolean,
): PageResult<T> {
  const page = Math.max(1, query.page ?? 1);
  const limit = Math.min(200, Math.max(1, query.limit ?? 50));
  const search = (query.search ?? "").trim().toLowerCase();

  const filtered =
    search && predicate
      ? items.filter((item) => predicate(item, search))
      : items;

  const start = (page - 1) * limit;
  return {
    data: filtered.slice(start, start + limit),
    total: filtered.length,
    page,
    limit,
  };
}
