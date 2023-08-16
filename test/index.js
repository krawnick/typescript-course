function calculateArea(a, b) {
    if (b) {
        var rect = {
            a: a,
            b: b,
            area: a * b,
        };
        return rect;
    }
    else {
        var square = {
            side: a,
            area: a * a,
        };
        return square;
    }
}
calculateArea(1);
