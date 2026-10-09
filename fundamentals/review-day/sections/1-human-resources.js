function removeAgents(employees) {
    return employees.filter(employees =>employees.profession !== "mole")
        
}

function makeNameTags(guests) {
    return guests.map(guestTag => {
        return guestTag.title +" "+ guestTag.forename +" "+ guestTag.surname + ", " + guestTag.company;
    })
}

function createPoll(strings) {
    pollCount={};
    for(let string of strings) {
        if(pollCount[string]) {
            pollCount[string]++
        } else {
            pollCount[string] = 1;
        }
    }
    return pollCount
}
module.exports = { removeAgents, makeNameTags, createPoll };
