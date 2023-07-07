const woodCalculator = (chairQuantity, tableQuantity, bedQuantity) => {
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;
    
    let totalChairWood = chairWood * chairQuantity;
    let totalTableWood = tableWood * tableQuantity;
    let totalBedWood = bedWood * bedQuantity;

    let totalWood = totalBedWood + totalChairWood + totalTableWood;
    console.log(totalWood);

    console.log(chairQuantity, tableQuantity, bedQuantity);
}

const total = woodCalculator(2, 2, 5)