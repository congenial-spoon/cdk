import React from 'react';
import { LarkAuth } from '../src';
export default {
  title: 'Components / LarkAuth',
  component: LarkAuth,
};

export const Basic = () => (
  <LarkAuth
    onComplete={() => {
      console.log('123');
    }}
  />
);
