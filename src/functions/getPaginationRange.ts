export const getPaginationRange = (current_page: number, pages: number) =>
  pages < 5
    ? [1, pages + 1]
    : [
        current_page - 2 > 0 ? Math.min(current_page - 2, pages - 4) : 1,
        current_page + 3 > pages ? pages + 1 : Math.max(current_page + 3, 6),
      ];
