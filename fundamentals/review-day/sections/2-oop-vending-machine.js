class VendingMachine {
    constructor(credit, stock) {
        this.credit = 0;
        this.stock = {
            A: {},
            B: {},
            C: {}
        }
    }

    addCredit(amount) {
        this.credit += amount;
    }
    addStock(item, position) {
        if (["A", "B", "C"].includes(position)) {
            this.stock[position] = item;
        } else{
            console.log("error, restock in right position please")
        }
    }
    purchaseItem(position) {
        const item = this.stock[position];
        
        if (item.price > this.credit) {
            return 'Insufficient credit!';
        }
        this.credit -= item.price;
        item.quantity -= 1;
        return item.name;
    }
}

module.exports = VendingMachine;
