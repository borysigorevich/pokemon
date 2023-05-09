'use client';
import { store } from '@/store';
import React from 'react';
import { Provider } from 'react-redux';

type ReduxProviderProps = {
	children: React.ReactNode;
};

export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
