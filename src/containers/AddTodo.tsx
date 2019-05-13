import * as React from 'react';
interface IAddTodoProps {
    dispatch: Function;
}

class AddTodoComponent extends React.Component<IAddTodoProps, {}> {
    render(): JSX.Element {
        /* tslint:disable */
        const styles: any = require("./AddTodo.css");
        /* tslint:enable */

        let input = React.createRef<HTMLInputElement>();

        return (
            <div className={styles.aaa}>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!input.current.value.trim()) {
                            return;
                        }
                        this.props.dispatch();
                        input.current.value = '';
                    }}>
                    <input ref={input} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}

const AddTodo = AddTodoComponent;

export default AddTodo;