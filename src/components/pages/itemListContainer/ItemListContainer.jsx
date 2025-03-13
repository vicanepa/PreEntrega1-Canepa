import { useParams } from "react-router";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import "../itemListContainer/itemListContainer.css"


const ItemListConteiner = () => {

    const {name} = useParams();
    
    const [Items, setItems] = useState([]);

    useEffect(() => {
        let arrayFiltrado = products.filter((elemento)=>elemento.category===name);
        const getProducts =  new Promise((resolve, reject) => {
            let permiso = true;
            if(permiso){
                resolve(name ? arrayFiltrado : products);
            } else {
                reject({status:404, message:"no se encontraron productos"});
            }
        });

        getProducts
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [name]);

    return (
        <div className="body">
            {Items.map((item)=>{
                return (
                    <ProductCard
                    key={item.id}
                    price={item.price}
                    title={item.title}
                    stock={item.stock}
                    imageUrl={item.imageUrl}
                    id={item.id}
                    description={item.descripcion}
                    category={item.category}
                    />
                );
            })}
        </div>
    );
};

export default ItemListConteiner;