function woodcalculator(chair,table,bed){
    const needWoodForChair = chair*1;
    const needWoodForTable = table*3;
    const needWoodForBed = bed*5;
    const totalWoodNeed = needWoodForChair+needWoodForTable+needWoodForBed;
    return totalWoodNeed;
}

const numberOfChair = 10;
const numberOfTable =5;
const numberOfBed = 2;

console.log(woodcalculator(numberOfChair,numberOfTable,numberOfBed));