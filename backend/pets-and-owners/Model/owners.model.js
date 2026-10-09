const fs = require('fs/promises')

exports.selectOwnerById = (id) => {
    return fs.readFile(`${__dirname}/../data/owners/${id}.json`, "utf-8")
    .then((fileContents) => {
        return JSON.parse(fileContents);
    });
}

exports.fetchAllOwners = () => {
    return fs.readdir(`${__dirname}/../data/owners`)
        .then(filenames => {
            const ownerPromise = []
            for (let filename of filenames) {
                const owners = fs.readFile(`${__dirname}/../data/owners/${filename}`, "utf-8")
                ownerPromise.push(owners)
            }
            return Promise.all(ownerPromise)
        })
        .then((data) => {
            const owners = data.map((owner) => {
                return JSON.parse(owner)
            })
            return owners
            
    });
    
}

exports.updateOwnerById = (id) => {
    fs.readFile(`${__dirname}/../data/owners/${id}.json`, "utf-8")
    .then((fileContents) => {
        return JSON.parse(fileContents)
    })
    .then((owner) => {
        console.log(owner)
    })
}

