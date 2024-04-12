class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount} to account number ${this.accountNumber}. New balance is $${this.balance}.`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrew $${amount} from account number ${this.accountNumber}. New balance is $${this.balance}.  <br><br>`);
        }
    }

    getBalance() {
        console.log(`The balance of account number ${this.accountNumber} is $${this.balance}.`);
        return this.balance;
    }

    displayAccountInfo() {
        return `Account Number: ${this.accountNumber}<br>Owner Name: ${this.ownerName}<br>Balance: $${this.balance} <br><br>`;
    }
}


let account1 = new BankAccount(1001, "John Doe", 700);
let account2 = new BankAccount(1002, "Jane Doe", 800);


account1.deposit(300);
account1.withdraw(1000);  
account1.getBalance();

account2.deposit(200);
account2.withdraw(500);
account2.getBalance();


document.getElementById('accounts').innerHTML = `
    <div class="account">${account1.displayAccountInfo()}</div>
    <div class="account">${account2.displayAccountInfo()}</div>
`;