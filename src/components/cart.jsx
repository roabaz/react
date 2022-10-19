import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

export const Cart = () => {
const {getTotalProducts} = useContext(cartContext)
    return (
        <button className="mx-1 btn btn-sm btn-dark " href="#">
            <FontAwesomeIcon className='me-2' icon={faCartShopping} /> 
           {getTotalProducts()}
        </button>
    );
};
