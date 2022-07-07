module.exports = function toReadable(number) {

    let result = "";
    let digit1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let digit2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numString = number.toString().split("");

    if (number === 0) return "zero";
    if (number <= 19) { result = digit1[number]; }

    else {
        if (numString.length < 3) {
            result = (numString[1] === "0") ? digit2[numString[0] - 2] : digit2[numString[0] - 2] + " " + digit1[numString[1]];
        } else {
            result = digit1[numString[0]] + " hundred";
            if (numString[2] === "0" && numString[1] === "0") return result;
            if (numString[2] === "0" && numString[1] !== "1") return result += " " + digit2[numString[1] - 2];
            if (numString[1] + numString[2] < 10) return result += " " + digit1[numString[2]];
            if (numString[1] + numString[2] <= 19) {
                return result += " " + digit1[numString[1] + numString[2]];
            } else {
                result += " " + digit2[numString[1] - 2];
                result += " " + digit1[numString[2]];
                return result;
            }
        }
    }
    return result;

}
