// =======================
// Access all DOM elements
// =======================

const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const saving = document.getElementById("saving");

const expenseForm = document.getElementById("expenseForm");

const transactionList = document.getElementById("transactionList");

const title = document.getElementById("title");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const category = document.getElementById("category");
const date = document.getElementById("date");

const test = document.getElementById("test");

// =======================
// Test Button
// =======================

test.addEventListener("click", function () {

    title.value = "Pizza";
    amount.value = 250;

});

// =======================
// Store Transactions
// =======================

const transactions = [];

// =======================
// Render One Transaction
// =======================

function addTransactionToDOM(transaction) {

    const li = document.createElement("li");

    li.dataset.id = transaction.id;

    li.innerHTML = `
        <div>
            <h3>${transaction.title}</h3>
            <p>${transaction.category}</p>
        </div>

        <div>
            <strong>₹${transaction.amount}</strong>

            <button class="delete-btn">
                Delete
            </button>
        </div>
    `;

    const deleteButton = li.querySelector(".delete-btn");

    deleteButton.addEventListener("click", function () {

        const id = Number(li.dataset.id);

        const index = transactions.findIndex(function (transaction) {

            return transaction.id === id;

        });

        if (index !== -1) {

            transactions.splice(index, 1);

            renderTransactions();

            updateSummary();

        }

    });

    transactionList.appendChild(li);

}

// =======================
// Render All Transactions
// =======================

function renderTransactions() {

    transactionList.innerHTML = "";

    for (const transaction of transactions) {

        addTransactionToDOM(transaction);

    }

}

// =======================
// Update Summary
// =======================

function updateSummary() {

    let totalIncome = 0;
    let totalExpense = 0;

    for (const transaction of transactions) {

        if (transaction.type === "income") {

            totalIncome += transaction.amount;

        } else {

            totalExpense += transaction.amount;

        }

    }

    const totalBalance = totalIncome - totalExpense;

    income.textContent = `₹${totalIncome}`;
    expense.textContent = `₹${totalExpense}`;
    balance.textContent = `₹${totalBalance}`;
    saving.textContent = `₹${totalBalance}`;

}

// =======================
// Submit Form
// =======================

expenseForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const titleValue = title.value;
    const amountValue = parseFloat(amount.value);
    const typeValue = type.value;
    const categoryValue = category.value;
    const dateValue = date.value;

    if (
        titleValue === "" ||
        typeValue === "" ||
        categoryValue === "" ||
        dateValue === "" ||
        isNaN(amountValue) ||
        amountValue <= 0
    ) {

        alert("Please enter valid details.");
        return;

    }

    const transaction = {

        id: Date.now(),

        title: titleValue,

        amount: amountValue,

        type: typeValue,

        category: categoryValue,

        date: dateValue

    };

    transactions.push(transaction);

    console.table(transactions);

    renderTransactions();

    updateSummary();

    expenseForm.reset();

});