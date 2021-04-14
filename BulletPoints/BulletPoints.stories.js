import React from 'react';
import { text } from '@storybook/addon-knobs';
import BulletPoints from './BulletPoints';

export default {
  title: 'Containers /Bullet Points',
  component: BulletPoints,
};

export const bulletPoints = () => (
  <BulletPoints
    firstTitle={text('firstTitle', 'first title')}
    secondTitle={text('secondTitle', 'second title')}
    thirdTitle={text('thirdTitle', 'third title')}
    firstLink={text('firsLink', 'first link')}
    secondLink={text('secondLink', 'second link')}
    thirdLink={text('thirdLink', 'third link')}
  />
);
