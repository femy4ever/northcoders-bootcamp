const createRef = (people) => {
    const peopleRef = people.reduce((reference, person)=>{
        reference[person.name] = person.phoneNumber;
        return reference
    }, {});
return [peopleRef]; 
};
module.exports = createRef;