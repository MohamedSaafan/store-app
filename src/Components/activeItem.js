import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {action} from '../Redux/Actions/SETACTIVE'
import {getById} from '../api/products'

const ActiveItem = (props)=>{
    const [activeId,setActiveId] = useState({});
    
    getById(props.match.params.id).then(item=> setActiveId(item)); 
    return(
        <div>
            <h1>from active Item</h1>
            <div className="card col-4 " >
                <img src={activeId.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{activeId.title}</h5>
                <p className="card-text"> price {activeId.price}.0$</p>
                </div>
            </div>
    </div>
    );
}

const mapStateToProps = (state)=>{
    return({
        activeId:state.activeId
    })

}
export default connect(mapStateToProps,null)(ActiveItem);