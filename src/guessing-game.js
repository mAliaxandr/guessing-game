class GuessingGame {
    constructor() {
        this.arr = [];
        this.guees = null;
    }
    

    setRange(min, max) {
        
        for (var i = min; i < max; i++ ){
            this.arr.push(i);
        }
        // console.log('m - m ', min, max);
        
    }

    guess() {
        this.guees = Math.ceil(this.arr.length / 2);
        // console.log('guees -- ', this.guees, this.arr[this.guees]);
        
        return this.arr[this.guees];
    }

    lower() {
        this.arr.splice(this.guees)
        // console.log('lower');
        
    }

    greater() {
        this.arr.splice(0, this.guees)
        // console.log('greater');
        
    }
}

module.exports = GuessingGame;
