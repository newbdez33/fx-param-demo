import * as React from 'react';
import * as style from './style.css';
import { TodoActions } from 'app/actions/todos';
import { TodoModel } from 'app/models/TodoModel';

export namespace TodoList {
    export interface Props {
        todos: TodoModel[];
        actions: TodoActions;
    }
}

export class TodoList extends React.Component<TodoList.Props> {
    renderList() {
        let list = [];
        for (let i = 0; i < this.props.todos.length; i++) {
            let l = this.props.todos[i];
            list.push(<div>{this.symbolGid(l.gid)} {l.lot} ✕ {l.price}</div>);
        }
        return list;
    }

    symbolGid(gid: number): string {
        switch (gid) {
            case 1:
                return '➀';
            case 2:
                return '➁';
            case 3:
                return '➂';
            case 4:
                return '➃';
            case 5:
                return '➄';
            case 6:
                return '➅';
            case 7:
                return '➆';
            case 8:
                return '➇';
            case 9:
                return '➈';
        }
        return '';
    }

    renderToggleAll(): JSX.Element | void {
        const { todos, actions } = this.props;
        if (todos.length > 0) {
            const hasIncompleted = todos.some((todo) => !todo.completed);
            return (
                <input
                    className={style.toggleAll}
                    type="checkbox"
                    checked={hasIncompleted}
                    onChange={actions.completeAll}
                />
            );
        }
    }

    render() {
        //const { todos, actions } = this.props;
        return (
            <section className={style.main}>
                <ul className={style.normal} style={{ marginLeft: '10px' }}>
                    {this.renderList()}
                </ul>
            </section>
        );
    }
}
