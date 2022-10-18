const house = require('./db.json')

let globalId = 4

module.exports = {
    getHouses:  (req, res) => {
        res.status(200).send(house)
        },
    deleteHouse: (req, res) => {
        const deleteId = req.params.id
        let index = house.findIndex(element => element.id === +deleteId)
        house.splice(index, 1)
        res.status(200).send(house)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
   
        
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        }
        newHouse.price += 1
        newHouse.price -= 1
        house.push(newHouse)
        res.status(200).send(house)
        globalId++
    },
    updateHouse: (req, res) => {
        let type = req.body.type
        let id = req.params.id

        let index = house.findIndex(element => element.id === +id )

        if (type === 'plus'){
            house[index].price += 10000
            res.status(200).send(house)
        }else if (type === 'minus'){
            house[index].price -= 10000
            res.status(200).send(house)
        } else {
            res.sendStatus(400)
        }
    }

}