import React from 'react'

export default function Title({name,title}) {
    return (
        <div>
           <div className="col-10 mx-auto my-2 text-center text-title">
               <h1 className="text-capitalize font weight-bold">
                   {name} <strong className="text-blue"></strong>{title}
               </h1>
           </div>
        </div>
    )
}
