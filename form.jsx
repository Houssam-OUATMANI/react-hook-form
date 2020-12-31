import React from 'react'
import {useForm} from "react-hook-form"



export default function Formulaire(){
    const {register, handleSubmit, errors} = useForm()
    function onSubmit(data){
        console.log(data)
    }
    return (
        <section className="container container-sm">
     <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlfor="name">Name</label>
            <input type="text" className="form-control " name="name"  ref={register({required:true})}></input>
            {errors.name && <code>A name is required</code>}
        </div>
        <div className="form-group">
            <label htmlfor="email">Email address</label>
            <input type="email" className="form-control" name="email"  ref={register({required:true})}></input>
            {errors.email && <code>An email is required</code>}
        </div>
        <div className="form-group">
            <label htmlfor="tel">Tel</label>
            <input type="text" className="form-control" name="text"  ref={register({required: true, minLength: 9, maxLength: 15})}></input>
            {errors.text && <code>Your tel must be at min 9 and at max 15</code>}
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control mb-4" name="message" ref={register({required: true})}></textarea> 
            {errors.message && <code>A message is required</code>}
            <button type="submit" class="btn btn-primary mb-2">Send</button>
        </div>
    </form>  
    </section> 
    )
}
