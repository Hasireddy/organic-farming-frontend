import React, { useEffect, useState } from "react";
import '../components/ProductsCatalog.css'
import axios from 'axios';




const Products = () => {

    const [allProducts, setAllProducts] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/details')
            // .then(response => console.log(response))
            .then((response) => {
                setAllProducts(response.data);
            })

    }, [])


    return (

        <>

            <div className='container'>
                <div className="dropdown" id='dropdownProductCaltalog'>
                    <a className="btn btn-success dropdown-toggle btn-lg" href="/ProductsCatalog" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
                        Categories
                    </a>

                    {/* <ul class="dropdown-menu dropdown-menu-end">
                    {navLinks.map((d, i) => (
                        <li key={i}>
                            <Link to={d.path}>
                                <button class="dropdown-item" type="button">
                                    {d.name}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul> */}

                    <a href="/Maps">Click here to search for nearby Farms</a>
                </div>
                {/* cards row 1  */}
                <div className="row row-1 row-cols-md-3 g-4" >
                    {allProducts ? (allProducts.map(item =>
                        <div className="col-12 col-md-3 col-lg-3">
                            {/* <div className="card" >
                                <img class="card-img-top" src={"http://localhost:5000/" + item.Image.path} alt="Card image cap" />

                            </div> */}
                            <div
                                id='rowProductCatalog' style={{ backgroundImage: `url("http://localhost:5000/"+${item.Image.path}` }}>
                                <img src={"http://localhost:5000/" + item.Image.path} alt="salad leaf" style={{ width: "25vh", height: "25vh" }} />

                            </div >
                            <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>

                                <h3 className="card-title-catalog">{item.ProductName}</h3>

                                <p className="card-text-catalog">Price:{item.Price}</p>
                            </div>

                        </div>


                    )) : (<div><h1>No Prodcuts found</h1></div>)
                    }
                </div>
            </div>
        </>

    )
}

export default Products;




