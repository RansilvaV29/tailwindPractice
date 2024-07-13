import React from "react";
import { useParams, Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Fuma Air Force 1",
        price: "$48",
        description:
            "Las zapatillas ideales para pasar desapercibido en el barrio de la inalcanzable, sin duda la sensación del bloque.",
        imageSrc:
            "https://th.bing.com/th/id/OIP.12pbrzeUS35HhB_j2Hhf8AAAAA?rs=1&pid=ImgDetMain",
    },
    {
        id: 2,
        name: "Pumba Edición especial",
        price: "$35",
        description:
            "Las zapatillas edición especial de cuando Pumba salio de la selva para ir directo a la pantalla grande, una gran colaboración con Pumba.",
        imageSrc:
            "https://th.bing.com/th/id/R.3bdee2da85c3580caf8c0ce0281932d0?rik=edV%2bJ7ZPAoo1cA&pid=ImgRaw&r=0",
    },
    {
        id: 3,
        name: "Kike 02",
        price: "$89",
        description:
            "Las zapatillas con más flow de nuestro catálogo, si lo que te gusta es dar miedo estas son las indicadas.",
        imageSrc:
            "https://th.bing.com/th/id/OIP.ziBsbr3unGUMjpbR8uuvSwAAAA?rs=1&pid=ImgDetMain",
    },
    {
        id: 4,
        name: "Fila Filita",
        price: "$35",
        description:
            "Las zapatillas más originales de todo el catálogo nadie se las lleva.",
        imageSrc:
            "https://th.bing.com/th?id=OIF.g1v26xJQ%2bznzXWx6T32oDw&rs=1&pid=ImgDetMain",
    },
];

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = products.find((p) => p.id === parseInt(productId));

    if (!product) return <div>Producto no encontrado</div>;

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                <Link
                    to="/"
                    className="text-blue-500 hover:underline mb-4 inline-block"
                >
                    ← Volver a la página principal
                </Link>
                <div className="flex flex-col lg:flex-row">
                    <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-md"
                    />
                    <div className="lg:ml-6 flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-semibold text-gray-700 mt-2">
                            {product.price}
                        </p>
                        <p className="mt-4 text-gray-600">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
