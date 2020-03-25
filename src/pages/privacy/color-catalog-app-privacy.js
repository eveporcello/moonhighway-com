import React from 'react';
import { css } from '@emotion/core';

export default () => (
  <div
    style={{
      margin: '2em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}
  >
    <h1>Color Catalog Privacy Policy</h1>
    <p>
      The Color Catalog App is the product of a online training activity.
      Students build this small applicaiton as a part of Moon Highway's Learning
      React Native Course.
    </p>
    <p>
      The Color Catalog does not collect any data from our users. It does not
      request or send any infomation to any web services, including third party
      services. All infomation that a user adds to this applicaion is saved
      locally on their device.
    </p>
  </div>
);
