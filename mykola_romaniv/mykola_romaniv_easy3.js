function SimpleAdding(num) {
    if(num > 1) {
        num += SimpleAdding(num - 1);
    }
    return num;
}

console.log(SimpleAdding(4));