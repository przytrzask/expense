export const getVisibleExpenses = (
    expences,
    { text, sortBy, startDate, endDate }
  ) => {
    return expences
      .filter(expence => {
        const startDateMatch =
          typeof startDate !== "number" || expence.createdAt >= startDate;
        const endDateMtach =
          typeof endDate !== "number" || expence.createdAt <= endDate;
        const textMatch = expence.description
          .toLowerCase()
          .includes(text.toLowerCase());
  
        return startDateMatch && endDateMtach && textMatch;
      })
      .sort((a, b) => {
        if (sortBy === "date") {
          return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === "amount") {
          return a.amount < b.amount ? 1 : -1;
        }
      });
  };