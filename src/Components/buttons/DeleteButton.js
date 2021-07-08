
import { FaBeer } from "react-icons/fa";


const DeleteButton = (props)=>{
    const handleDelete =(productID)=>{
    console.log(productID,"productID");
        props.deleteProduct(productID);
    }
    return (
        <button onClick={()=>handleDelete(props.productID)}>
           < FaBeer/>
        </button>
    )
    }

export default DeleteButton
