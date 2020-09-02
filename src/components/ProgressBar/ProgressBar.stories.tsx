import React from 'react';
import Component from '.';
import { ProgressStep } from './ProgressBar';

export default { title: 'components' };

export function ProgressBar() {
    return (
        <Component currentStep={2}>
            <ProgressStep />

            <ProgressStep />

            <ProgressStep />

            <ProgressStep />

            <ProgressStep />
        </Component>
    );
}
