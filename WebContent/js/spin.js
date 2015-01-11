define(function(spin) {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            sOut[y][x] = sIn[Math.floor(Math.random() * 8)];
        }
    }
);