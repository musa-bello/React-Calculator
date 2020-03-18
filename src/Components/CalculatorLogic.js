import React from 'react'
import Display from './Display'
import KeyPad from './KeyPad'

class Logic extends React.Component{
    constructor(){
        super();

        this.state = {
            display: "",
            result: ""
            
        }

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(event) {
        const name = event.target.name
        if(name === "="){
            this.calculate()
        }

        else if(name === "clear"){
            this.reset()
        }

        else if(name === "del"){
            this.backspace()
        }

        else if (name === "sqrt"){
            this.sqrRoot()
        }

        else if (name === "pi"){
            this.pI()
        }

        else {
            this.setState({
                display: this.state.display += name
            })
        }
    }

    calculate () {
        try {
            this.setState({
                result: (eval(this.state.display))
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    }

    sqrRoot () {
        try {
            this.setState({
                result: Math.sqrt(this.state.display)
            })
        } catch (error) {
            this.setState({
                result: "error"
            })
        }
    }

    pI () {
        try {
            this.setState({
                result: Math.PI*(this.state.display)
            })
        } catch (error) {
            this.setState({
                result: "error"
            })
        }
    }

    reset = () => {
        this.setState({
            display:"",
            result: ""
        })
    };

    backspace () {
        this.setState({
            display: this.state.display.slice(0, -1)
        })
    };

    render (){
        return (
            <div>
                <Display 
                    data = {this.state}
                />
                <KeyPad
                    handleClick = {this.handleClick} 
                />
            </div>
        )
    }
}

export default Logic