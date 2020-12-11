import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Submit({href, message}) {
    return (
        <>
            <a className="btn btn-success" href={href}>{message}</a>
        </>
    )
}

export default Submit;