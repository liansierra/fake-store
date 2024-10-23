function Cart() {
    return (
        <>
            <div className="container">
                <h1 className='h1 mb-3 mt-3 text-center'>Carrito de compras</h1>
                <p 
                    id="alerta3" 
                    className="text-center mt-5" 
                    style={{
                        color: 'white',
                        backgroundColor: 'red',
                        padding: '10px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        textAlign: 'center' // Centra el texto
                    }}
                >
                    No disponible por el momento
                </p>
            </div>
        </>
    );
}

export default Cart;
