import React, { useState } from 'react';
import withLoader from '../../HOC/withLoader';
import Product from '../Product/Product'
import './List.css'

const List = (props) => {

    const [data, setData] = useState(null)

    React.useEffect(() => {
        fetch('https://demo7242716.mockable.io/products')
            .then(res => res.json())
            .then(data => {
                setData(data)
                props.setLoading(false)
            })
    }, [])

    return (
        <div className="each-item-wrapper">
            {
                data && data.products.map((eachItem, i) => {
                    return <Product item={eachItem} key={i} />
                })
            }
        </div>
    )
}

export default withLoader(List, 'Product list');