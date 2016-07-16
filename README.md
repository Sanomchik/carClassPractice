# carClassPractice
// Покупка машины (часть 1)
// 1.Создайте класс Garage, который хранит список машин со следующим интерфейсом:
// addCar - принимает объект класса Car, и getCar - который принимает индекс машины и возвращает
// запрашиваемую машину, count - возвращает количество машин в гараже
// 2.Создайте класс Car, который инициализуруется значениями model, manufacturer и price.
// 3.Создайте класс Buyer, который иницализируется объектом garage и числовым значением budget,
// с методами: getBudget - возвращает текущее значение бюджета, buyCar - принимает объект класса Car,
// смотрит, хватит ли бюджета на машину, если не хватает, бросает ошибку, если хватает,
// списывает деньги с бюджета и добавляет машину в гараж.
// 4.Создайте функцию showRoom, которая принимает объект buyer, и дальше в цикле 10 раз создает объект car
// со случайным значением в price. Объект buyer пытается купить каждую созданную машину.
// 5.Создайте экземпляр класса Garage и Buyer. Вызовите функцию showRoom и передайте в нее buyer.
// 6.После выполнения функции выведите список всех машин, которые купил покупатель
// Покупка машины (часть 2) 
// 1.Создайте класс AssembledCar, который должен быть пронаследован от класса Car, 
// и расширен свойствам mileage (расход), capacity (размер бака), speed (скорость) и методом drive, 
// который принимает километраж и увеличивает пробег и сокращает количество бензина в баке 
// 2.Добавьте в объект Buyer метод upgrade, который для каждой машины в гараже, добавляет метод drive 
// и свойство mileage, которое опеределяет расход бензина литров/100 км. Метод drive при вызове 
// принимает целое число километров, которое проедет машина и обновляет свойства range и gas. 
// 3.Напишите функцию useCars, которая принимает объект buyer, в цикле на 7 дней на каждый генерирует по 3 задачи 
// и километраж для каждой задачи. Buyer должен выполнить все задачи как можно быстрее и при наименьших 
// затратах на бензин. Он может пользоваться любыми автомобилями 
// 4.Вывести список машин, использованных в течении недели, их пробег и остаток бензина в баке
