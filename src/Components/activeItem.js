import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {action} from '../Redux/Actions/SETACTIVE'
import {getById} from '../api/products'

const ActiveItem = (props)=>{
    const [id,setActiveId] = useState({});
    
    getById(props.match.params.id).then(item=> setActiveId(item)); 
    return(
        <div>
            <h1>from active Item</h1>
            <div className="card col-4 " >
                <img src={id.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{id.title}</h5>
                <p className="card-text"> price {id.price}.0$</p>
                <button className = 'btn btn-primary '>Add To Card</button>
                </div>
            </div>
    </div>
    );
}

const mapStateToProps = (state)=>{
    return({
        id:state.activeId
    })

}
export default connect(mapStateToProps,null)(ActiveItem);