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
            if ( l.id == 1 ) {
                list.push(<div key={`${l.gid}-0`}>─────────────────</div>);
            }
            list.push(<div key={`${l.gid}-${l.id}`}>{this.symbolGid(l.id)} {l.lot} ✕ {l.price}</div>);
        }
        if ( list.length > 0 ) {
            list.push(<div key={`0-0`}>─────────────────</div>);
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
