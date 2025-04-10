import { useEffect, useState } from "react";
import Counter from "../../common/counter/Counter";
// import { useParams } from "react-router";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import "./itemDetail.css";

export const ItemDetail = () => {
    const { id } = useParams();

    // nuevo
    const navigate = useNavigate();
    
    // nuevo

    const [item, setItem] = useState({});

    useEffect(() => {
        let productCollection = collection(db, "products");

        let refDoc = doc(productCollection, id);
        const getProduct = getDoc(refDoc);
        getProduct.then((res) => {
            setItem({ id: res.id, ...res.data() });
        });
    }, [id]);

    return (
        <div className="item-detail-card-container">
            <div className="item-detail-Card">
                {/* nuevo */}
            <button className="close-button" onClick={() => navigate(-1)}>✖</button>
               {/* nuevo */}
                <h2>{item.title}</h2>
                <div>
                    <img src={item.imageUrl} alt="" className="product-image-detail" />
                </div>
                <h4>{item.description}</h4>
                <Counter item={item} />
            </div>
        </div>
    );
};

