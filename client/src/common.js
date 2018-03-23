const l = {
    random(max, multiplier = 1) {
        return multiplier * Math.ceil(Math.random() * max)
    },
    
    // modern version of the Fisher–Yates shuffle algorithm:
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        console.info('SHUFFLE')
        return a;
    },
    
    log (message, priority) {
    
    },
    
    error (message, priority) {
    
    },

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

export { l }