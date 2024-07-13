import React from 'react';
import { Link } from 'react-router-dom';


const products = [
    {
        id: 1,
        name: 'Fuma Air Force 1',
        href: '/product/1',
        price: '$48',
        imageSrc: 'https://th.bing.com/th/id/OIP.12pbrzeUS35HhB_j2Hhf8AAAAA?rs=1&pid=ImgDetMain',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Pumba Edición especial',
        href: '/product/2',
        price: '$35',
        imageSrc: 'https://th.bing.com/th/id/R.3bdee2da85c3580caf8c0ce0281932d0?rik=edV%2bJ7ZPAoo1cA&pid=ImgRaw&r=0',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Kike 02',
        href: '/product/3',
        price: '$89',
        imageSrc: 'https://th.bing.com/th/id/OIP.ziBsbr3unGUMjpbR8uuvSwAAAA?rs=1&pid=ImgDetMain',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Fila Filita',
        href: '/product/4',
        price: '$35',
        imageSrc: 'https://th.bing.com/th?id=OIF.g1v26xJQ%2bznzXWx6T32oDw&rs=1&pid=ImgDetMain',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
];

const Tarjetas = () => {
    return (
        <div className="bg-white py-10 shadow-lg rounded-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Productos</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link key={product.id} to={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-gray-900">{product.name}</h3>
                            <p className="mt-1 text-xl font-medium text-gray-900">{product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tarjetas;