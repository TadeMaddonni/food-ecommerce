import React from "react";
import menuData from "../../../../utils/data/data";
import Item from "../item/Item";
import './itemList.scss'

const ItemList = () => {
    const menuItems = menuData.map((item) => {
        return <Item key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} info={item.info} />;
    });

    return (
        <div className="menuListContainer">
            <div className="menuList">
                {menuItems}
            </div>
        </div>
    );
};

export default ItemList;
