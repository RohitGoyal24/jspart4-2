function Airplane(model,seatingCapacity,maximumSpeed) {
    this.model = model;
    this.seatingCapacity = seatingCapacity;
    this.maximumSpeed=maximumSpeed;
    this.print=function print(){
        console.log("Model : " + this.model);
        console.log("Seating Capacity : " + this.seatingCapacity);
        console.log("Maximum Speed : " + this.maxSpeed);
    }
  };
var a= new Airplane('Airasia',200,900);
console.log(a.print());
var b=new Airplane('Indigo',300,1000);
console.log(b.print());
var c=new Airplane('Artica',100,2000);
console.log(c.print());
a.seatingCapacity += 10;
b.seatingCapacity += 10;
c.seatingCapacity += 10;
console.log('Seating capacity increased')
console.log(a.print())
console.log(b.print())
console.log(c.print())

delete a.maxSpeed;
delete b.maxSpeed;
delete c.maxSpeed;

console.log(a);
console.log(b);
console.log(c);

a.avgSpeed = 600;
b.avgSpeed = 600;
c.avgSpeed = 600;

console.log(a);
console.log(b);
console.log(c);