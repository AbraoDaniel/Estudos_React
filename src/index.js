import React from 'react'
import ReactDOM from 'react-dom'

/*
class MyComponent extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.datas.name}</h1>
                <p>{this.props.datas.age}</p>
            </div>
        )
    }
}


let data = {name:'Daniel', age:20}

ReactDOM.render(<MyComponent datas = {data}/>, document.querySelector('#root'))
*/

class MyComp extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.aleatory.name}</h1>
                <h1>{this.props.aleatory.keynumber}</h1>
            </div>
        )
    }
}

let variable = {name:'Madruguinha', number:20, keynumber:2}

ReactDOM.render(<MyComp aleatory = {variable}/>, document.querySelector('#root'))