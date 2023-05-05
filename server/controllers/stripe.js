import { Stripe } from 'stripe';
const stripe = new Stripe('sk_test_51N2ehTKyJJyI8xUVnXfSr68w6AD0isx9QDxyCvxopgIwn3e3WWicKghgB5VvhhOhbEwZzuRszes7stJf5hBTqQdF0040SYY7hT');

export const payment = (req, res) => {
    try {
        const { tokenId, amount } = req.body;
        stripe.charges.create({ source: tokenId, amount: amount, currency: 'usd' }, (error, response) => {
            if (error) return res.status(500).json({ error, message: 'error in payment', success: false });
            res.status(200).json({ result: response, message: 'payment succussful!', success: true });
        });
    }
    catch (error) {
        console.log(`error ----->\n`, error);
        res.status(404).json({ message: 'error in payment - controllers/stripe.js', error, success: false });
    }
}
