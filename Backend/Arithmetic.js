// Arithmetic.js

class Arithmetic {
    constructor() {
        this.operationData = new Map();
    }

    addScore(operation, data) {
        const operationMap = this.operationData.get(operation) || new Map();
        const scores = operationMap.get("Scores") || [];
        scores.push(data);
        operationMap.set("Scores", scores);
        this.operationData.set(operation, operationMap);
    }

    appendScores(operation, newData) {
        const operationMap = this.operationData.get(operation) || new Map();
        const scores = operationMap.get("Scores") || [];
        scores.push(...newData);
        operationMap.set("Scores", scores);
        this.operationData.set(operation, operationMap);
    }

    getScores(operation) {
        const operationMap = this.operationData.get(operation);
        return operationMap ? operationMap.get("Scores") || [] : [];
    }

    displayAllScores() {
        let result = "";
        for (const [operation, operationMap] of this.operationData.entries()) {
            const scores = operationMap.get("Scores") || [];
            result += `Operation: ${operation}\n`;
            result += scores.join("\n") + "\n";
        }
        return result;
    }
}

module.exports = Arithmetic;
