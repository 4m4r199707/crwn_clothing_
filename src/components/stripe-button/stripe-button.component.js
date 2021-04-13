import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ifj2dSCI4IzHKrkTmPQD9ptl2ks9Z4AHm1AIektZ0RBodgyqsmYS81GB0wNxtc7zOqer9FcrXkvXAUQoKK5ZiCf00lknaGzrV';

    const onToken = token => {
        console.group(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>
    )
}

export default StripeCheckoutButton;