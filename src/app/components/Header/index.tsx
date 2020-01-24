import * as React from 'react';
import { TodoActions } from 'app/actions/todos';
import { TodoModel } from 'app/models';

export namespace Header {
  export interface Props {
    addTodo: typeof TodoActions.addTodo;
  }
}

export class Header extends React.Component<Header.Props> {
  startLotField: React.RefObject<HTMLInputElement>;
  constructor(props: Header.Props, context?: any) {
    super(props, context);
    this.handleSave = this.handleSave.bind(this);
    this.startLotField = React.createRef();
  }

  fixPrice(p:number, n:number = 3) {
    let m = Math.pow(10, n)
    return Math.round(p * m) / m
}

  handleSave() {
    console.log("handleSave")
    let list:TodoModel[] = []
    var v = "0.001"
    console.log(this.startLotField.current)
    if ( this.startLotField.current?.value ) {
      v = this.startLotField.current?.value
    }
    console.log(v)
    let startLot:number = Number(v)
    var startPrice = 1.11452
    let basePoint = 0.00001
    for ( var gid = 1; gid <= 8; gid++ ) {
      let count = gid+1
      for ( var i = 1; i <= count; i++ ) {
        startPrice -= basePoint * Math.pow(2, i-1)
        list.push({
          gid:gid,
          id:i,
          price:this.fixPrice(startPrice, 5),
          lot:Math.pow(2, i-1) * startLot,
          completed:false
        })
      }
      
    }
    this.props.addTodo(list);
  }

  render() {
    return (
      <header>
        <h1>fx params test</h1>
        <div style={{ marginBottom:'10px', marginLeft:'10px'}}>
          Start Lot: <input type="text" style={{ width:'50px', height:'25px' }} placeholder="0.001" ref={this.startLotField} />
          <button style={{ backgroundColor:'#C2C1A5', marginLeft:'10px', height:'30px', width:'50px'}} onClick={this.handleSave} >Build</button>
        </div>
      </header>
    );
  }
}
