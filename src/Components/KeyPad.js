import React from 'react'

function KeyPad(props) {
    return (
        <div className="keyboard">
                <button name="clear" className="btn clear btn-outline-primary" onClick ={props.handleClick}> c </button>
                <button name="del" className="btn clear btn-outline-primary" onClick ={props.handleClick}>d </button>
                <button name="sqrt" className="btn clear btn-outline-primary" onClick ={props.handleClick}> &radic; </button>
                <button name="+" className="btn digit btn-outline-primary" onClick ={props.handleClick}> + </button>
                <button name="7" className="btn digit btn-outline-secondary" onClick ={props.handleClick}> 7 </button>
                <button name="8" className="btn digit btn-outline-secondary" onClick ={props.handleClick}> 8 </button>
                <button name="9" className="btn digit btn-outline-secondary" onClick ={props.handleClick}> 9 </button>
                <button name="/" className="btn digit btn-outline-primary" onClick ={props.handleClick}> &divide; </button>
                <button name="4" className="btn digit btn-outline-secondary" onClick ={props.handleClick}> 4 </button>
                <button name="5" className="btn digit btn-outline-secondary" onClick ={props.handleClick}> 5 </button>
                <button name="6" className="btn digit btn-outline-secondary" onClick ={props.handleClick}> 6 </button>
                <button name="-" className="btn digit btn-outline-primary" onClick ={props.handleClick}> &minus; </button>
                <button name="1" className="btn digit btn-outline-secondary" onClick ={props.handleClick}> 1 </button>
                <button name="2" className="btn digit btn-outline-secondary" onClick ={props.handleClick}> 2 </button>
                <button name="3" className="btn digit btn-outline-secondary" onClick ={props.handleClick}> 3 </button>
                <button name="*" className="btn digit btn-outline-primary" onClick ={props.handleClick}> &times; </button>
                <button name="." className="btn digit btn-outline-secondary" onClick ={props.handleClick}> &sdot; </button>
                <button name="0" className="btn digit btn-outline-secondary" onClick ={props.handleClick}> 0 </button>
                <button name="pi" className="btn clear btn-outline-primary" onClick ={props.handleClick}> &pi; </button>
                <button name="=" className="btn operator btn-outline-success"  onClick ={props.handleClick}> = </button>
            </div>
    )
}

export default KeyPad