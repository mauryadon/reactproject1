import React from 'react'

import { Link } from 'react-router-dom'
export default function LeftNav() {
    return (
        <>
            <div className="list-group mt-1 ">
                <Link to="/admin-home" className="list-group-item list-group-item-action border">Home</Link>
                <Link to="/admin-user" className="list-group-item list-group-item-action border">Users</Link>
                <Link to="/admin-maincategory" className="list-group-item list-group-item-action border">Maincategories</Link>
                <Link to="/admin-subcategory" className="list-group-item list-group-item-action border">Subcategories</Link>
                <Link to="/admin-brand" className="list-group-item list-group-item-action border">Brands</Link>
                <Link to="/admin-product" className="list-group-item list-group-item-action border">Products</Link>
                <Link to="/admin-contact" className="list-group-item list-group-item-action border">Contact Us</Link>
                <Link to="/admin-newslatter" className="list-group-item list-group-item-action border">Newslatters</Link>
                <Link to="/admin-checkout" className="list-group-item list-group-item-action border">Checkouts</Link>
            </div>
        </>
    )
}
