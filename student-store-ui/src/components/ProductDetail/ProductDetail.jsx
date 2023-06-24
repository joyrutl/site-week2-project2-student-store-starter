import React from 'react'
import "./ProductDetail.css"
import {useParams} from 'react-router-dom'
import { useEffect, useState} from "react";
import axios from "axios"

export default function ProductDetail() {
    const {productId} = useParams();
    // console.log({productId});
    const [itemDetails, setItemDetails] = useState([]);
    
  // 
    const fetchProduct = async () => {
      try {
        const res =  await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
        
        // if there is a product
        if (res?.data?.product) {
          // call set details function and retrieve the product contents
          setItemDetails(res.data.product)
        } else {
          console.error("Something went wrong.")
        }
      } catch (err) {
        console.log(err)
     }
    }
    fetchProduct();

    return (
    <div className="product-detail">

        {itemDetails ? (
          <div className="container">
            
            <div className='img-class float-child'>
            <img src={itemDetails.image} />
            </div>
            
            <div className='float-child'>
            
            {/* item id */}
            <p className="details-id">Product #{itemDetails.id}</p>
            
            {/* item name */}
            <h2 className="details-name">{itemDetails.name}</h2>

            {/* item price */}
            <h3 className="details-price"> ${(Math.round(itemDetails.price*100) / 100).toFixed(2)}</h3>

            {/* item description */}
            <p className="details-des" >{itemDetails.description}</p>
            </div>
            </div>) 
        : (<h1> loading</h1>)}

        
    </div>
  )
}

//https://www.wix.com/website-template/view/html/2175?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store%3Fref%3Dnew_site%26vertical%3Dundefined%26structureId%3D073bd83d054dcff87fa0ef50%26industryId%3D087d714d5f85b09c65b51e28%26categoryName%3DOnline%2520Store%26requestedApps%3DStores%252CForms%26businessName%3DStudent%2520Store&tpClick=view_button&esi=44263069-4ca7-4327-840f-68849497b54f


