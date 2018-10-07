function sumIntervals(input) {
    let output = 0;
    
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (
                input[j][0] >= input[i][0] && 
                input[j][0] <= input[i][1] &&
                input[j][1] > input[i][1]
            ) {
                input[i][1] = input.splice(j,1)[0][1];
                i = -1;
                break;
            } else if (
                input[j][0] >= input[i][0] && 
                input[j][0] <= input[i][1] &&
                input[j][1] <= input[i][1]
            ) {
                input.splice(j,1)[0][1];
                i = -1;
                break;
            }
        }
    }

    for (let i = 0; i < input.length; i++) {
        output += (input[i][1] - input[i][0]);
    }

    return output;
}

module.exports = sumIntervals;
