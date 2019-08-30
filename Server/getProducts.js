const products = require('../products');

// app.get('/api/products', (req, res) => {
//     res.status(200).send(products)
// })

module.exports = {
    getProducts:  (req, res) => {
        // Use Params if /api/products/:id
        // Use Query if /api/products?

        const price = parseInt(req.query.price);
        // Logged price, confirmed that it was registering as a number after implementing parseInt

        if (price){
            const priceMatches = products.filter(product => parseInt(product.price) >= price)
            res.status(200).send(priceMatches);
        }
        else {
            res.status(200).send(products);
        }
        

        // convert to number, since id will come in as a string.
        // const id = parseInt(req.params.id);
        
        //     const idMatch = products.filter(product => product.id === id)
        //     console.log(idMatch);
        //     if (idMatch.length > 0){
        //         res.status(200).send(idMatch);
        //     }
        //     else {
        //         res.status(500).send("Item not on list")
        //     }
            
        
    }
}