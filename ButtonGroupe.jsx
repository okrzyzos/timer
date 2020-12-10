import React from 'react'

export default function ButtonGroupe(props) {
    return (
        <div>

<button onClick={props.onStart} className='btn btn-success m-3'>start</button>
<button onClick={props.onStop} className='btn btn-warning m-3'>stop</button>
<button onClick={props.onReset} className='btn btn-danger m-3'>reset</button>

</div>
    )
}
