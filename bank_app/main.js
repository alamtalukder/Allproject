
class BankAccount{
    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber; 
        this.ownerName = ownerName; 
        this.balance = balance; 
    }
     

    deposit(amount){
        this.balance += amount; 
        console.log('Amount $${amount} deposited into account ${this.accountNumber}.'); 
    }
    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount; 
            console.log('Amount $${amount}withdrawn from account ${this.accountNumber}.');  
        }else{
            console.log(`Insufficient balance in account ${this.accountNumber}.`);
        }
    }
    getBalance(){
       return this.balance; 
    }
    displayAccountInfo() {
        console.log(`Account ${this.accountNumber} information:`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
      }
    }

    const account1 = new BankAccount('SB-012', 'Karishma Hedy', 2000);
    const account2 = new BankAccount('sp-014', 'AlamHossain', 3500); 
    
    account1.displayAccountInfo();
    account1.deposit(500);
    account2.displayAccountInfo();
    account2.deposit(1200);
    account1.displayAccountInfo();
    account1.withdraw(200);
    account2.displayAccountInfo();
    account2.withdraw(500);
    account1.displayAccountInfo(); 
    account2.displayAccountInfo(); 
