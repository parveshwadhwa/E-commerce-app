import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceforstripe = price *100;
    const publishablekey = 'pk_test_51JNCAuSErOfQpw9hJyBbhl5jDwGZHMgNiEY22vvM2HzKMzPRq91TR86azQqs2PIXanQmA8Ijxa0Lz2lSns6ikqMY00hExd2b1w';

    const onToken = token => {
        alert('Payment Succesfully');
    }

    return(
        <StripeCheckout
          label='Pay Now'
          name='MNC Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your Total Is $${price}`}
          amount={priceforstripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishablekey}
        />
    );
}

export default StripeCheckoutButton;