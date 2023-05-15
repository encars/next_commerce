interface IParams {
    productId: string;
}

function ProductPage({ params }: { params: IParams }) {
    return (
        <div>
            <h1>Product Page</h1>
            <p>Product ID: {params.productId}</p>
        </div>
    );
}

export default ProductPage;