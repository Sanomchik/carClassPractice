function Car(model, manufacturer, price) {
	this.model = model;
	this.manufacturer = manufacturer;
	this.price = price;
}
function AssembledCar(model, manufacturer, price, mileage, capacity, speed) {
	this.model = model;
	this.manufacturer = manufacturer;
	this.price = price;
	this.mileage = mileage; // mileage/1 km
	this.capacity = capacity;
	this.speed = speed;
	// CUSTOM PROP
	this.gas = capacity;
	this.distance = 0;
	this.used = false;


	console.log('mileage '+this.mileage);
	console.log('capacity '+this.capacity);
	console.log('speed '+this.speed);
}
AssembledCar.prototype = Object.create(Car.prototype);
AssembledCar.prototype.constructor = AssembledCar;
AssembledCar.prototype.drive = function(km) {
	if (km*this.mileage > this.gas) {
		var distanceLeft = this.gas/this.mileage;
		this.distance += distanceLeft;
		this.gas = 0; // km
		console.log('No fuel. You traveled '+distanceLeft+' with '+this.model);
	}
	else {
		this.distance +=km;
		this.gas -= km*this.mileage;
	}
}
function Garage() {
	this.cars = {};
	counter = 0;
	this.addCar = function(Car) {
		this.cars[counter+''] = Car;
		counter++;
    //принимает объект класса Car
}

Garage.prototype.getCar = function(i) {
	return this.cars[i+''];
    //принимает индекс машины и возвращает запрашиваемую машину
}

Garage.prototype.count = function(){
    //возвращает количество машин в гараже
    var size = 0;
    for (var key in this.cars) {
    	if (this.cars.hasOwnProperty(key)) size++;
    }
    return size;

}

}
function Buyer(garage, budget) {
	this.garage = garage;
	this.budget = budget;
	this.getBudget = function(){
		return this.budget;
    //возвращает текущее значение бюджета
}
Buyer.prototype.upgrade = function() {

	for (var key in this.garage.cars) {
		this.garage.cars[key] = new AssembledCar(this.garage.cars[key].model, this.garage.cars[key].manufacturer, this.garage.cars[key].price, Math.random()*100 | 1, Math.random()*1000 | 1, Math.random()*50 | 1)
	}

}
Buyer.prototype.buyCar = function(Car) {
	if (+this.budget > +Car.price) {
		garage.addCar(Car);
		this.budget -= Car.price;

	}
	else {
		return 'Your budget: '+this.budget+'.Its not enough';
	}
    //принимает объект класса Car,
    // смотрит, хватит ли бюджета на машину, если не хватает, бросает ошибку, если хватает,
    // списывает деньги с бюджета и добавляет машину в гараж.
}
}
var showRoom = function(buyer){
	for (var i = 0; i < 9; i++) {
		window['car'+i] = new Car('model','manufacturer', Math.random()*100 | 1);
		buyer.buyCar(window['car'+i]);
	}
	return buyer.garage.cars;
    //принимает объект buyer, и дальше в цикле 10 раз создает объект car
    // со случайным значением в price. Объект buyer пытается купить каждую созданную машину.
};
var useCars = function(buyer){
	for (var i = 1; i < 8; i++) {
		for (var j = 1; j < 4; j++) {
			(function(){
				var need = true;
				var distanceNeed = Math.random()*100 | 1;
				console.log('Task ('+j+'): '+distanceNeed+'. Day: '+i);
				for (var key in buyer.garage.cars) {
					if (buyer.garage.cars[key].gas/buyer.garage.cars[key].mileage > distanceNeed && need) {
						buyer.garage.cars[key].drive(distanceNeed);
						need = false;
						buyer.garage.cars[key].used = true;
						console.log('You traveled '+distanceNeed+' with '+ key);
					}
				}
				if (need) {
					console.log('No cars for this task');
				}
			})();
		}
	}
    //принимает объект buyer, и дальше в цикле 10 раз создает объект car
    // со случайным значением в price. Объект buyer пытается купить каждую созданную машину.
    for (var key in buyer.garage.cars) {
    	if (buyer.garage.cars[key].used) {
    		console.log('Used cars #'+key)
    		console.log(buyer.garage.cars[key]);
    	}
    }
};

var garage = new Garage();
var buy = new Buyer(garage,'200');
showRoom(buy);
buy.upgrade();
useCars(buy);