const stripe = require("stripe")(process.env.STRIPE_SECRET);


router.post("/create-checkout-session", async(req,res) => {
    const {products} = re.body;

    const lineItems = products.map((product)=>({

        price_data:{
            currency:"usd",
            product_data:{
                name:itemname,
                images:[product.image]

            },
            unit_amount:Math.round(price*100),

        },

        quantity:quantity
    }));

    const session = await stripe.checkout.session.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:5173/success",
        cansel_url:"http://localhost:5173/cansel"
    })
    res.json({id:session_id})
})
