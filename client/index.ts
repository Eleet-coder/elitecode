import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot, Root } from 'react-dom/client';
import App from './App';

// ReactDOM.render(<App />,document.getElementById('root'));


const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) throw new Error('Fail to get root element in index.ts');

const root: Root = createRoot(rootElement);

root.render(<App />);