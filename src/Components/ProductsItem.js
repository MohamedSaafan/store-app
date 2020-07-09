import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {action, SETACTIVE} from '../Redux/Actions/SETACTIVE'
import { Link } from 'react-router-dom';
const ProductItem = (props)=>{
    
    return(
        
        <div className="card col-4 " >
        <img src={props.src} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
            <p className="card-text"> price {props.price}.0$</p>
            <Link to={`/products/${props.id}`} onClick= {()=>props.setActive(props.id)} className="btn btn-primary">Details</Link>
        </div>
    </div>
    );
}
const mapDispatchToProps = (dispatch)=>{
    return{
        setActive:(id)=>dispatch({type: SETACTIVE, payload: {id}}),
    }
}
const mapStateToProps = (state)=>{
    return({
        activeId:state.activeId
    })

}
export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);
 