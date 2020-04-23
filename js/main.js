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
        if (this.delivery == "Normal") {
            return 150;
        } else if (this.delivery == "Emergency") {
            return 200;
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
        let delPrice = $("#delivery_type").val();
        let pizzaQuantity = Number($("#pizza-quantity").val());
        let gonzalezSpecial = new Pizza(pizzaName, pizzaSize, crustType, toppingType, pizzaQuantity, delPrice, false);
        $("#size-price").text(gonzalezSpecial.size + " " + gonzalezSpecial.type + ": " + "Ksh. " + gonzalezSpecial.priceBySize());
        $("#crust-price").text(gonzalezSpecial.crust + ": " + "Ksh. " + gonzalezSpecial.crustPrice());
        $("#toppings-price").text(gonzalezSpecial.toppings + " Toppings" + ": " + "Ksh. " + gonzalezSpecial.toppingsPrice());
        $("#delivery-price").text("Delivery: " + gonzalezSpecial.deliveryPrice());
        $("#total").text("Total: " + "Ksh. " + gonzalezSpecial.totalPlusDelivery());
    });
    $("#pizza-form2").submit((event) => {
        event.preventDefault();
        let pizzaName = $("#pizza-label2").text();
        let pizzaSize = $("#size-selector2").val();
        let toppingType = $("#topping-selector2").val();
        let crustType = $("#crust-selector2").val();
        let delPrice = $("#delivery_type2").val();
        let pizzaQuantity = Number($("#pizza-quantity").val());
        let beefBbq = new Pizza(pizzaName, pizzaSize, crustType, toppingType, pizzaQuantity, delPrice, false);
        $("#size-price").text(beefBbq.size + " " + beefBbq.type + ": " + "Ksh. " + beefBbq.priceBySize());
        $("#crust-price").text(beefBbq.crust + ": " + "Ksh. " + beefBbq.crustPrice());
        $("#toppings-price").text(beefBbq.toppings + " Toppings" + ": " + "Ksh. " + beefBbq.toppingsPrice());
        $("#delivery-price").text("Delivery: " + beefBbq.deliveryPrice());
        $("#total").text("Total: " + "Ksh. " + beefBbq.totalPlusDelivery());
    });
    $("#pizza-form3").submit((event) => {
        event.preventDefault();
        let pizzaName = $("#pizza-label3").text();
        let pizzaSize = $("#size-selector3").val();
        let toppingType = $("#topping-selector3").val();
        let crustType = $("#crust-selector3").val();
        let delPrice = $("#delivery_type3").val();
        let pizzaQuantity = Number($("#pizza-quantity").val());
        let fetaAndVeggie = new Pizza(pizzaName, pizzaSize, crustType, toppingType, pizzaQuantity, delPrice, false);
        $("#size-price").text(fetaAndVeggie.size + " " + fetaAndVeggie.type + ": " + "Ksh. " + fetaAndVeggie.priceBySize());
        $("#crust-price").text(fetaAndVeggie.crust + ": " + "Ksh. " + fetaAndVeggie.crustPrice());
        $("#toppings-price").text(fetaAndVeggie.toppings + " Toppings" + ": " + "Ksh. " + fetaAndVeggie.toppingsPrice());
        $("#delivery-price").text("Delivery: " + fetaAndVeggie.deliveryPrice());
        $("#total").text("Total: " + "Ksh. " + fetaAndVeggie.totalPlusDelivery());
    });
});

$(document).ready(function() {
    $("#checkOut").click(function(event) {
        alert(name + ", message received, thank you for reaching out to Speedy Gonzalez. Welcome again!");
    });
});