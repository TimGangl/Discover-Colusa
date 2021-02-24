import React from 'react';
import '../Newsletter/Newsletter.css';
import Mailchimp from 'react-mailchimp-form';

function Newsletter() {
  return (
    <>
      <div class="row justify-content-center">
        <h2 className="text-center subscribe">Subscribe to our Newsletter!</h2>
      </div>

      <div className="row justify-content-center">
        <Mailchimp

          className="email-form m-3"
          action='https://discovercolusa.us7.list-manage.com/subscribe/post?u=b6a1bb00bfc6da7f443f94f35&amp;id=229af0f4e4'
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Enter Email',
              type: 'email',
              required: true
            },
            {
              name: 'FNAME',
              placeholder: 'Enter Name',
              type: 'text',
              required: true
            }
          ]}
          // Change predetermined language
          messages={
            {
              sending: "Sending...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred.",
              empty: "You must write an e-mail.",
              duplicate: "Too many subscribe attempts for this email address",
              button: "Subscribe!"
            }
          }
        // Add a personalized class
        />


      </div>
    </>
  )
}

export default Newsletter;

