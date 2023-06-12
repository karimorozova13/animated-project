export const paginationCalulate = (activePage, pagesCount, currentPage) => {
  //   if activePage is less than 6
  if (activePage <= 5 && pagesCount > 7) {
    return {
      hasprevious: currentPage > 1,
      hasStartDots: activePage - 5 >= 1,
      shiftStartNumbers: 0,
      displayNumbers: 5,
      shiftEndNumbers: 7,
      hasEndDots: true,
      hasNext: currentPage !== pagesCount && pagesCount > 1 ? true : false,
    };
  }
  // middle pagination section
  else if (activePage >= 6 && activePage + 5 <= pagesCount) {
    return {
      hasprevious: currentPage > 1,
      hasStartDots: activePage - 5 >= 1,
      shiftStartNumbers: activePage - 2,
      displayNumbers: 3,
      shiftEndNumbers: activePage + 2,
      hasEndDots: activePage + 5 <= pagesCount,
      hasNext: currentPage !== pagesCount && pagesCount > 1 ? true : false,
    };
  }
  // last pagination section
  else if (activePage > 5 && activePage + 4 >= pagesCount && pagesCount > 6) {
    return {
      hasprevious: currentPage > 1,
      hasStartDots: activePage - 5 >= 1,
      shiftStartNumbers:
        pagesCount % 2 === 0 || pagesCount === 11
          ? pagesCount - 5
          : pagesCount - 6,
      displayNumbers: 5,
      shiftEndNumbers: 0,
      hasEndDots: activePage + 5 < pagesCount,
      hasNext: currentPage !== pagesCount && pagesCount > 1 ? true : false,
    };
  }
  // if number of pages are 7 or less
  return {
    hasprevious: currentPage > 1,
    hasStartDots: false,
    shiftStartNumbers: 0,
    displayNumbers: pagesCount,
    shiftEndNumbers: 0,
    hasEndDots: false,
    hasNext: currentPage !== pagesCount && pagesCount > 1 ? true : false,
  };
};
