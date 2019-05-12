import * as React from 'react';
import * as ShallowRenderer from 'react-test-renderer';
import AddTodo from './AddTodo';

test("aaaa", () => {
    const componenet = ShallowRenderer.create(
        <AddTodo dispatch={() => {}} />
    );

    let tree = componenet.toJSON();
    expect(tree).toMatchSnapshot();
})