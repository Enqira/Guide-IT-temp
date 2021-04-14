import React from 'react';
import { text } from '@storybook/addon-knobs';

import JobCard from './JobCard';

export default {
  title: 'Containers /Job Card',
  component: JobCard,
};

export const jobCard = () => (
  <JobCard
    title={text('Title', 'Job title')}
    description={text('description', 'Job description')}
  />
);
