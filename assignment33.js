function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Chicago");
describe_city("Karachi", "Pakistan");
describe_city("Rome", "Italy");
