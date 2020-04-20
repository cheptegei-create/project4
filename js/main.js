class Pizza {
    constructor(type, size, crust, toppings, quantity, delivery) {
        this.type = type;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity = quantity;
        this.delivery = delivery;
        this.basePrice = 500;
    }
    typePrice() {
        if (this.type == "GONZALEZ SPECIAL") {
            this.price = 700;
            return this.price;
        } else {
            return this.price;
        }
    }

    priceBySize() {
        if (this.size == "Large") {
            return 1200;
        } else if (this.size == "Medium") {
            return 800;
        } else {
            return 500;
        }
    }

    crustPrice() {
        if (this.crust == "Tripple Cheese Crust") {
            return 300;
        } else if (this.crust == "Double Cheese Crust") {
            return 200;
        } else if (this.crust == "Puff Pastry") {
            return 150;
        } else if (this.crust == "Cheesy Crust") {
            return 100;
        } else {
            return 0;
        }
    }

    toppingsPrice() {
        if (this.toppings == "Extra Chicken") {
            return 150;
        } else {
            return 0;
        }
    }

    deliveryPrice() {
        if (this.delivery == true) {
            return 150;
        } else {
            return 0;
        }
    }

    totalPriceNoDelivery() {
        let priceAtPointA = this.typePrice();
        let priceAtPointB = this.priceBySize();
        let priceAtPointC = this.toppingsPrice();
        let priceAtPointD = this.crustPrice();

        return priceAtPointA + priceAtPointB + priceAtPointC + priceAtPointD;
    }

    pricePerQuantity() {
        let grossPrice = this.totalPriceNoDelivery();
        return grossPrice * this.quantity;
    }

    totalPlusDelivery() {
        let withoutDelivery = this.pricePerQuantity();
        let deliveryFee = this.deliveryPrice();

        return withoutDelivery + deliveryFee;
    }

}


$(document).ready(() => {
    $("#pizza-form").submit((event) => {
        event.preventDefault();
        let pizzaName = $("#pizza-label").text();
        let pizzaSize = $("#size-selector").val();
        let toppingType = $("#topping-selector").val();
        let crustType = $("#crust-selector").val();
        let pizzaQuantity = Number($("#pizza-quantity").val());
        let chickenSupreme = new Pizza(pizzaName, pizzaSize, crustType, toppingType, pizzaQuantity, false);
        $("#size-price").text(chickenSupreme.size + " " + chickenSupreme.type + ": " + "Ksh. " + chickenSupreme.priceBySize());
        $("#crust-price").text(chickenSupreme.crust + ": " + "Ksh. " + chickenSupreme.crustPrice());
        $("#toppings-price").text(chickenSupreme.toppings + " Toppings" + ": " + "Ksh. " + chickenSupreme.toppingsPrice());
        $("#delivery-price").text("Delivery: " + chickenSupreme.deliveryPrice());
        $("#total").text("Total: " + "Ksh. " + chickenSupreme.totalPlusDelivery());
    });
});

$(document).ready(function() {
    $("#checkOut").onclick(function(event) {
        alert(name + ", Message received, thank you for reaching out to Speedy Gonzalez. Welcome again!");
    });
});