import React from 'react'

function Display(props) {
    return (
        <div>
            <div className="history text-right">
                <input 
                    type="text" 
                    className="form-control" 
                    name = "display"
                    value = {props.data.display}
                    disabled 
                />

                {/* <p>{props.data.display}</p> */}
            </div>
            <div className="text-right"> 
                {/* <input 
                    type="text" 
                    className="form-control border-0" 
                    name = "result"
                    value = {props.data.result}
                    disabled 
                /> */}
                <p className="result">{props.data.result}</p>
            </div>
        </div>
    )
}

/* class Display extends Component {
    constructor (){
        super ()
        this.state = {
            key:""
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (event){
        const name = event.target.name
        console.log(name)
    }

    render (){
        return (
            <div>
                <div className="history text-right">
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "display"
                        value = {this.state.display}
                        disabled 
                    />
                </div>
                <div className="text-right"> 
                    <input 
                        type="text" 
                        className="form-control border-0 " 
                        name = "result"
                        value = {this.state.result}
                        disabled 
                    />
                </div>
            </div>
        )
    }
}
 */
export default Display