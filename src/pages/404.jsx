import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

function randomMessage() {
  const messages = [
    'This place is a message... and part of a system of messages... pay attention to it!',
    'Sending this message was important to us. We considered ourselves to be a powerful culture.',
    'This place is not a place of honor... no highly esteemed deed is commemorated here... nothing valued is here.',
    'What is here was dangerous and repulsive to us. This message is a warning about danger.',
    'The danger is in a particular location... it increases towards a center... the center of danger is here... of a particular size and shape, and below us.',
    'The danger is still present, in your time, as it was in ours.',
    'The danger is to the body, and it can kill.',
    'The form of the danger is an emanation of energy.',
    'The danger is unleashed only if you substantially disturb this place physically. This place is best shunned and left uninhabited.',
  ];

  const message = messages[Math.floor(Math.random() * messages.length)];

  return (<>{message}</>);
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{ textTransform: 'uppercase' }}>Not found</h1>
    <p>
      <a href="https://en.wikipedia.org/wiki/Long-time_nuclear_waste_warning_messages" target="_blank">
        &#9762;
        {randomMessage()}
        &#9762;
      </a>
    </p>
  </Layout>
);

export default NotFoundPage;
