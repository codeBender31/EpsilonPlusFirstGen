class Fitness {
  constructor() {
    // Default constructor with no fitness data
    this.steps = 0;
    this.runTimeMinutes = 0;
    this.reps = 0;
    this.crunches = 0;
    this.pushups = 0;
    this.pullups = 0;
    this.throwingDistanceYards = 0;
  }

  // Setter methods for fitness data
  setSteps(steps) {
    this.steps = steps;
  }

  setRunTimeMinutes(runTimeMinutes) {
    this.runTimeMinutes = runTimeMinutes;
  }

  setReps(reps) {
    this.reps = reps;
  }

  setCrunches(crunches) {
    this.crunches = crunches;
  }

  setPushups(pushups) {
    this.pushups = pushups;
  }

  setPullups(pullups) {
    this.pullups = pullups;
  }

  setThrowingDistanceYards(throwingDistanceYards) {
    this.throwingDistanceYards = throwingDistanceYards;
  }

  // Getter methods for fitness data
  getSteps() {
    return this.steps;
  }

  getRunTimeMinutes() {
    return this.runTimeMinutes;
  }

  getReps() {
    return this.reps;
  }

  getCrunches() {
    return this.crunches;
  }

  getPushups() {
    return this.pushups;
  }

  getPullups() {
    return this.pullups;
  }

  getThrowingDistanceYards() {
    return this.throwingDistanceYards;
  }

  // Method to check if any fitness data is recorded
  isFitnessDataRecorded() {
    return (
      this.steps > 0 ||
      this.runTimeMinutes > 0 ||
      this.reps > 0 ||
      this.crunches > 0 ||
      this.pushups > 0 ||
      this.pullups > 0 ||
      this.throwingDistanceYards > 0
    );
  }

  // Method to display fitness data
  displayFitnessData() {
    if (this.isFitnessDataRecorded()) {
      return `Fitness Data:\nSteps: ${this.steps}\nRun Time (Minutes): ${this.runTimeMinutes}\nReps: ${this.reps}\nCrunches: ${this.crunches}\nPushups: ${this.pushups}\nPullups: ${this.pullups}\nThrowing Distance (Yards): ${this.throwingDistanceYards}`;
    } else {
      return "No fitness data recorded yet.";
    }
  }
}

module.exports = Fitness;
