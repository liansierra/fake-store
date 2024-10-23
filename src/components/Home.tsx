import { useEffect, useState } from "react";

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false); 

    const getProducts = async () => {
        try {
            setLoading(true); 
            setError(false); 
            const response = await fetch("https://fakestoreapi.com/products/");
            if (!response.ok) {
                throw new Error("Error al cargar");
            }
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
            setError(true); 
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center mb-4 mt-3">Productos</h1>
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : error ? (
                <div className="alert alert-danger text-center" role="alert">
                    Error al cargar los productos. Por favor, intenta de nuevo.
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    {data.map((product) => (
                        <div className="col" key={product.id}>
                            <div className="card h-100">
                                <div className="d-flex p-3 justify-content-center">
                                    <img 
                                        src={product.image} 
                                        className="img-fluid" 
                                        alt={product.title} 
                                        style={{ maxHeight: '150px', objectFit: 'contain' }} 
                                    />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-center">{product.title}</h5>
                                    <p className="card-text text-center">Descripción del producto.</p>
                                    <p className="card-text text-center">
                                        <small className="text-body-secondary">$ {product.price}</small>
                                    </p>
                                    <div className="mt-auto text-center">
                                        <button className="btn btn-primary">Agregar a Carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
