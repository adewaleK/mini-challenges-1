/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    while(str.indexOf("()") !== -1 || 
    str.indexOf("[]") !== -1 || 
    str.indexOf("{}") !== -1){
        str = str.replace("()","").replace("[]","").replace("{}","");
    }

    let isValid = str.length === 0? "valid":"invalid";
    return isValid;
}

module.exports = isValid;
