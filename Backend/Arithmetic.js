// Arithmetic.js
class Arithmetic {
    constructor() {
        this.operationData = new Map();
    }

    addScore(operation, data) {
        if (!this.operationData.has(operation)) {
            this.operationData.set(operation, []);
        }
        this.operationData.get(operation).push(data);
    }

    appendScores(operation, newData) {
        if (!this.operationData.has(operation)) {
            this.operationData.set(operation, []);
        }
        this.operationData.get(operation).push(...newData);
    }

    getScores(operation) {
        return this.operationData.get(operation) || [];
    }

    displayAllScores() {
        let result = "";
        for (const [operation, scores] of this.operationData) {
            result += `Operation: ${operation}\n`;
            for (const score of scores) {
                result += `${score}\n`;
            }
        }
        return result;
    }
}

module.exports = Arithmetic;