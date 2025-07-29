for (let i = 0; i < 20; i++) {
    if (i === 3 || i === 5) {
        continue
    }
    if (i === 10) {
        break;
    }
    console.log(i);
}