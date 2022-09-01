function brickCalculator(totalfloor){
    const perFeet = 1000;
    const firstTenFloorHeight = 15;
    const AfterTenFloorHeight = 12;
    if (totalfloor<=10){
        const totalBrick = firstTenFloorHeight*perFeet;
        return totalBrick;
    }
    else {
        const extraFloor = totalfloor-10;
        const forFirstTenFloor = firstTenFloorHeight*perFeet*10;
        const afterFirsttenfloorFeet = extraFloor*AfterTenFloorHeight;
        const afterFirsttenfloor = afterFirsttenfloorFeet*perFeet;
        const needTotalBrick = forFirstTenFloor+afterFirsttenfloor;
        return needTotalBrick;
    }
}

console.log(brickCalculator(35));