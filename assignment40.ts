function carInfo(manufacturer: string, model: string, ...args: any[]) {
    let car = {
      manufacturer,
      model,
    };
    for (let i = 0; i < args.length; i += 2) {
      car[args[i]] = args[i + 1];
    }
    console.log(car);
    return car;
  }
  
  carInfo("Toyota", "Corolla", "color", "blue", "optionalFeatures", "leather seats");
  