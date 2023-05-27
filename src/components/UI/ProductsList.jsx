import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  return (
    <>
      {/* data?.map() : Dấu chấm hỏi (?) được sử dụng để kiểm tra xem data có giá trị null hoặc undefined hay không. 
      Nếu data là null hoặc undefined, thì phương thức .map() 
      sẽ không được gọi và không có lỗi ngoại lệ xảy ra.  */}
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
};

export default ProductsList;
