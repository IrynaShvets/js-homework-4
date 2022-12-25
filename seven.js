const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");

square1.addEventListener("click", changeSquare1);
square2.addEventListener("click", changeSquare1);

function changeSquare1() {
    square2.style.background = square2.style.background === "rgb(27, 141, 27)" ? "rgb(212, 21, 21)" : "rgb(27, 141, 27)";
    square1.style.background = square1.style.background === "rgb(212, 21, 21)" ? "rgb(27, 141, 27)" : "rgb(212, 21, 21)";
}

/* 
7. Создайте 2 квадрата (зеленый и красный). 
При клике на зеленый - цвет зеленого квадрата должен стать красным, красный - зеленым. И наоброт.
*/
