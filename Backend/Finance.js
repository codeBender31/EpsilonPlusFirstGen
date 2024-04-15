class Finance {
  constructor() {
      this.amountSaved = 0.0;
      this.amountSpent = 0.0;
      this.total = 0.0;
  }

  // Getter methods for amountSaved, amountSpent, and total
  getAmountSaved() {
      return this.amountSaved;
  }

  getAmountSpent() {
      return this.amountSpent;
  }

  getTotal() {
      return this.total;
  }

  // Setter methods to update amountSaved and amountSpent
  addAmountSaved(amount) {
      this.amountSaved += amount;
      this.total += amount;
  }

  addAmountSpent(amount) {
      this.amountSpent += amount;
      this.total -= amount; // Subtract spent amount from the total
  }

  // Display financial summary as a formatted string
  displayFinancialSummary() {
      return `Amount Saved: $${this.amountSaved.toFixed(2)}\nAmount Spent: $${this.amountSpent.toFixed(2)}\nTotal: $${this.total.toFixed(2)}`;
  }
}

module.exports = Finance;
