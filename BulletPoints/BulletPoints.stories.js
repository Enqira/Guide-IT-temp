import React from 'react';
import { text } from '@storybook/addon-knobs';
import BulletPoints from './BulletPoints';

export default {
  title: 'Containers /Bullet Points',
  component: BulletPoints,
};

export const bulletPoints = () => (
  <BulletPoints title={text('job title', 'Full stack development')} />
);
