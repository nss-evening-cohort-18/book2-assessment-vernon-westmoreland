const flowers = [{
    id: 1,
    color: "white",
    species: "White Rose",
    price: .90
},
{
    id: 2,
    color: "red",
    species: "Red Tulip",
    price: 1.10
}

]

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id
    const idForNewFlower = maxId + 1

    flowerObject.id = idForNewFlower
    flowers.push(flowerObject)

}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []
    for (const flower of flowers) {
        if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)
        }
    }







    return expensiveFlowers
    // Do not change this code

}

// console.log(findExpensiveFlowers())




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

