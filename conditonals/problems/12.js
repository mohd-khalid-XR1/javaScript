let x, y, z;
x = 100 , y = 50, z = 30;

if (x > y) {
    if (x > z) {
        console.log("x is greater : ", x);
    } else {
        console.log("z is greater : ", z);
    }
} else if (x < y) {
    if (y > z) {
        console.log("y is greater : ", y);
    } else {
        console.log("z is greater :", z);
    }
}