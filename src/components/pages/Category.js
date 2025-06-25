import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios_instance from "../../util/axios_instance";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../shared/product";

const Category = ()=>{
    const {id} = useParams();
    const [products,setProducts] = useState([]);
    // lay san pham cua danh muc
    const get_products = async ()=>{
        const url = "/category_product.php?category_id="+id;
        const rs= await axios_instance.get(url);
        const data = rs.data.data;
        setProducts(data);
    }
    useEffect(()=>{
        get_products();
    },[id]);
    return (
        <Container>
            <h1>Products:</h1>
            <Row>
            {
                products.map((e,k)=>{
                    return (
                        <Col xs={3}  key={k}>
                            <Product product={e}/>
                        </Col>
                    )
                })
            }
            </Row>
        </Container>
    );
}
export default Category;