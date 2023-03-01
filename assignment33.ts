
function describe_city(city: string, country: string = "USA") {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city("Chicago");
  describe_city("Karachi", "Pakistan");
  describe_city("Rome", "Italy");