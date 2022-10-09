import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailHero from "../../components/pages/itemDetail/hero/ItemDetailHero";
import ItemDetailCard from "../../components/pages/itemDetail/ItemDetailCard";
import menuData from "../../utils/data/data";
import "./itemDetail.scss";

const ItemDetail = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const itemEncontrado = menuData.find(
            (item) => item.id === parseInt(id)
        );
        setItem(itemEncontrado);
    }, [id]);
    return (
        <div className="itemDetailContainer">
            <div className="itemDetail">
                <ItemDetailHero name={item.name} />
                <ItemDetailCard item={item} />
            </div>
        </div>
    );
};

export default ItemDetail;
