function convert(number) {
    let english=""

    if (number>=1000) {
        english=ones(parseInt(number/1000)) + " Thousand"
        number%=1000
    }
    if(number>=100) {
        english+=ones(parseInt(number/100)) + " Hundred"
        number%=100
    }
    if(number>=20) {
        english += ty(parseInt(number/10)*10)
        number%=10
    }
    if(number>=1) {
        english += ones(number)
    }
    console.log(number);
    console.log(english);
}
function ty(num) {
    let result=""
    switch (num) {
        case 20: result="Twenty";break
        case 30: result="Thirty";break
        case 40: result="Forty";break
        case 50: result="Fifty";break
        case 60: result="Sixty";break
        case 70: result="Seventy";break
        case 80: result="Eighty";break
        case 90: result="Ninety";break
    }
    return result + " ";
}
function ones(num) {
    let result=""
    switch (num) {
        case 1: result="One"; break;
        case 2: result="Two"; break;
        case 3: result="Three"; break;
        case 4: result="Four"; break;
        case 5: result="Five"; break;
        case 6: result="Six"; break;
        case 7: result="Seven"; break;
        case 8: result="Eight"; break;
        case 9: result="Nine"; break;
        case 10: result="Ten"; break;
        case 11: result="Eleven"; break;
        case 12: result="Twelve"; break;
        case 13: result="Thirteen"; break;
        case 14: result="Fourteen"; break;
        case 15: result="Fifteen"; break;
        case 16: result="Sixteen"; break;
        case 17: result="Seventeen"; break;
        case 18: result="Eighteen"; break;
        case 19: result="Nineteen"; break;
            
    }
    return result
}
convert(3456)