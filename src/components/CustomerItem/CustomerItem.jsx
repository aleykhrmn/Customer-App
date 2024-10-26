import "./CustomerItem.css";

const CustomerItem = ({ customer, handleDelete }) => {
    return (
        <li className="customer-item">
            <div className="customer-info">
                <img 
                    src="https://i.pravatar.cc/300" 
                    alt="Customer avatar" 
                    className="customer-avatar" 
                />
                {/* Müşteri adı burada doğru şekilde görüntülenecek */}
                <span className="customer-name">{customer.customerName}</span>
            </div>
            <button 
                className="delete-button" 
                onClick={() => handleDelete(customer)}
            >
                <i className="bi bi-trash3"></i>
            </button>
        </li>
    );
};

export default CustomerItem;
