function createWallet(){
    let balance = 0;
    return {
        addmoney(amount){
            balance += amount;
        },
        checkBalance(){
            console.log(balance);
        }
    };
}

let myWallet = createWallet();
myWallet.addmoney(500);
myWallet.addmoney(200);
myWallet.checkBalance();