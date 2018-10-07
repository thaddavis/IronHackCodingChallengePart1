let assert = require('assert');
let sumIntervals = require('./sum_of_intervals')

describe('Sum of Intervals', function() {
    describe('Test', function() {
        let input = [
            [1,4],
            [7, 10],
            [3, 5]
        ]
        it(`should return 7 when passed 
            ` + JSON.stringify(input) + `
        `, function() {
            assert.equal(sumIntervals(input), 7);
        });
    });

    describe('Test', function() {
        let input = [
            [1,2],
            [6, 10],
            [11, 15]
        ]
        it(`should return 9 when passed 
            ` + JSON.stringify(input) + `
        `, function() {
            assert.equal(sumIntervals(input), 9);
        });
    });
    
    describe('Test', function() {
        let input = [
            [1,5],
            [10, 20],
            [1, 6],
            [16, 19],
            [5, 11]
        ]
        it(`should return 19 when passed 
            ` + JSON.stringify(input) + `
        `, function() {
            assert.equal(sumIntervals(input), 19);
        });
    });
});