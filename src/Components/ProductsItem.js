import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {action} from '../Redux/Actions/SETACTIVE'
const ProductItem = (props)=>{
    
    return(
        
        <div className="card col-4 " >
        <img src={props.src} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
            <p className="card-text"> price {props.price}.0$</p>
            <a href={`/products/${props.activeId}`} onClick= {()=>props.setActive(props.id)} className="btn btn-primary">Details</a>
        </div>
    </div>
    );
}
const mapDispatchToProps = (dispatch)=>{
    return{
        setActive:(id)=>dispatch({type:'SETACTIVE',id: id}),
    }
}
const mapStateToProps = (state)=>{
    return({
        activeId:state.activeId
    })

}
export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);
 