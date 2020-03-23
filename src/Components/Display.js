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

            </div>
            <div className="text-right"> 
                <p className="result">{props.data.result}</p>
            </div>
        </div>
    )
}

export default Display