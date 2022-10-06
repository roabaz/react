import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export const Cart = () => {

    return (
        <button className="mx-1 btn btn-sm btn-dark " href="#">
            <FontAwesomeIcon className='me-2' icon={faCartShopping} /> 
            0
        </button>
    );
};
