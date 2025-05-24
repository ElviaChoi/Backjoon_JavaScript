function solution(n, k) {
    const lambSkewerPrice = 12000;
    const drinkPrice = 2000;
    
    const serviceDrink = Math.floor(n / 10);
    const totalPayDrinks = k - serviceDrink;
    
    const result = (n * lambSkewerPrice) + (totalPayDrinks * drinkPrice);
    return result;
}