const flavors = prompt("enter some flavors", "vanilla,vanilla,vanilla,strawberry,coffee,coffee")
console.log(flavors)

const flavorsArr = flavors.split (",");
console.log(flavorsArr)


const object = {}

function getObject(flavorsArr) {
    for(let i=0; i<flavorsArr.length; i++){
        const flavVar = flavorsArr[i]
    if(object[flavVar] === undefined){
        object[flavVar] = 0
    }
    object[flavVar]++
    }
    return object
}
console.log(getObject(flavorsArr))
