var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar"
};
function myFunction() {
    delete lion["roar"];
    return lion;
}
console.log(myFunction("roar"));
module.exports = myFunction;