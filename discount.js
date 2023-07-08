let ticketPrice = ticketQuantity =>{
    let first100Price = 100;
    let second100price = 90;
    let restPrice = 80 ;

    if (ticketQuantity <= 100) {
        let fTicketPrice = first100Price * ticketQuantity;
        return fTicketPrice;
    }
    else if(ticketQuantity <= 200 ){
        let f100TicketPrice = 100 * first100Price;
        let restTicketQuantity = ticketQuantity - 100;
        let restTicketPrice = restTicketQuantity * second100price
        let totalTicketPrice = f100TicketPrice + restTicketPrice;
        return totalTicketPrice;
    }
    else{
        let f100ticket = 100 * first100Price;
        let s100ticket = 100 * second100price;
        let restQuantity = ticketQuantity -200;
        let restAllPrice = restQuantity * restPrice;
        let totalPrice = f100ticket + s100ticket + restAllPrice;
        return totalPrice;
    }

}

let totalPriceOfTicket = ticketPrice(210);
console.log(totalPriceOfTicket);