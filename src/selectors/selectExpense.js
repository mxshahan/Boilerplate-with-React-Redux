
//Get All Data Via ID
export default (expenses, id) => {
  return expenses.filter((expense) => {
    const matchExpense = expense.id === id ? expense : false;
    return matchExpense  
  })
}

