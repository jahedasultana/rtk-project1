import { useDeleteProductsMutation, useGetProductsQuery } from "../../services/productsApi";


const ProductsView = () => {
    const {data: products, isLoading, isError} = useGetProductsQuery();
 
    const [ deleteProducts ] = useDeleteProductsMutation();
       
     const handelDelete = (id) =>{
      deleteProducts(id);
     }

    return (
        <div>
       {
        isLoading && <p style={{color: "red"}}>Loading......</p>
       }

       {
        isError && <p>have an error</p>
       }

       {
        !isLoading && !isError && products && products.length > 0 && (
            <section>
                {
                    products.map((product) => {
                        return(
                            <div style={{border: "2px red solid",
                                padding: "10px 10px",
                                margin: "5px 5px"
                            }} key={product.id}>
                                <p>{product.title}</p>
                                <p>{product.price}</p>
                                <button onClick={() => handelDelete(product.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </section>
        )
       }

        </div>
    );
};

export default ProductsView;