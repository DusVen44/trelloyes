import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import List from './List'

describe('List Tests', () => {
    it('Renders to the DOM without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});