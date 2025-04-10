import { useParams } from "react-router";
import ProductCard from "../../common/productCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import "../itemListContainer/itemListContainer.css";
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton";
import Box from "@mui/material/Box";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListConteiner = () => {
    const { name } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        const productCollection = collection(db, "products");
        let consulta = productCollection;
        if (name) {
            const collectionFilter = query(
                productCollection,
                where("category", "==", name)
            );
            consulta = collectionFilter;
        }

        const getProducts = getDocs(consulta);

        getProducts.then((res) => {
            let newArray = res.docs.map((elemento) => {
                return { id: elemento.id, ...elemento.data() };
            });
            setItems(newArray);
        });
    }, [name]);

    return (
        <div>
            <h1>Bienvenidos a mi tienda</h1>

            {items.length === 0 ? (
                <Box sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                </Box>
            ) : (
                <div className="body">
                    {items.map((item) => {
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
            )}
        </div>
    );
};

export default ItemListConteiner;