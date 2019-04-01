// str - string to search
// search - characters to find in str
function countingCharacters3(str, search){
    var count = 0; // number found
    var numChars = search.length;
    var lastIndex = str.length - numChars;
    for (var index = 0; index <= lastIndex; index++){
        var current = str.substring(index, index + numChars);
        if (current == search){
            count++;
        }
    }
    return count;
}
