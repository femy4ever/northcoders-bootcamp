function generateMultiples(multiple) {
    return function createMultipleOf(length){
        const result = []
        for (let i = 1; i <=length; i++) {
            result.push(multiple * i)
        }
        return result;
    }
}

function secureFunc(pwd, instruction) {
    return function(pwdTrial, ...args){
        if (pwdTrial === pwd) {
            return instruction(...args)
        
        }else {
            return "Sorry your password is incorrect!"
        }

    }
}

module.exports = { generateMultiples, secureFunc };
