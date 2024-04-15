class Reading {
  constructor() {
      this.readingProgress = new Map();
  }

  // Method to add a new reading entry for a book
  addReadingEntry(bookTitle, entry) {
      // If the book title is already in the map, add the new entry to the existing list
      if (this.readingProgress.has(bookTitle)) {
          this.readingProgress.get(bookTitle).push(entry);
      } else {
          // If it's a new book title, create a new array with the entry and put it in the map
          this.readingProgress.set(bookTitle, [entry]);
      }
  }

  // Method to get all reading entries for a book
  getReadingEntries(bookTitle) {
      return this.readingProgress.get(bookTitle) || [];
  }

  // Method to get all book titles
  getAllBookTitles() {
      return Array.from(this.readingProgress.keys());
  }
}

module.exports = Reading;
