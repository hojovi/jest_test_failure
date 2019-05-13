import * as React from 'react';
import * as ShallowRenderer from 'react-test-renderer';
import AddTodo from './AddTodo';
import * as Sum from './Sum';

jest.unmock('react');
jest.unmock('react-test-renderer');
jest.unmock("./AddTodo");
jest.deepUnmock("./Sum");
test("aaaa", () => {
    const componenet = ShallowRenderer.create(
        <AddTodo dispatch={() => {}} />
    );

    let tree = componenet.toJSON();
    expect(tree).toMatchSnapshot();
});

test("bbb", () => {
    expect(Sum.sum(1, 2)).toEqual(3);
})