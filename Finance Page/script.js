// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded

    // Get the button elements
    var addSavingsButton = document.getElementById("addSavingsButton");
    var addSpendingButton = document.getElementById("addSpendingButton");

    // Attach the addSavings and addSpending functions to the buttons' click events
    if (addSavingsButton) {
        addSavingsButton.addEventListener("click", function() {
            calculateTotal('table1', 'totalSavings');
        });
    }

    if (addSpendingButton) {
        addSpendingButton.addEventListener("click", function() {
            calculateTotal('table3', 'totalSpending');
        });
    }
});

function calculateTotal(tableId, totalId) {
    var table = document.getElementById(tableId);
    var totalCell = document.querySelector(`#${totalId}`);

    if (table && totalCell) {
        var rowCount = table.rows.length;
        var total = 0;

        for (var i = 1; i < rowCount; i++) {
            var row = table.rows[i];
            var amount = parseFloat(row.cells[1].querySelector('input').value) || 0;
            total += amount;
        }

        totalCell.textContent = total.toFixed(2);
    }
}
