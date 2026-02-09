import   "./CartModal.css";

const CartModal = ({ closeCart,cart }) => {
  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      
      {/* Modal box */}
      <div className="bg-white rounded w-96 h-[80vh] flex flex-col">

        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
        </div>

        {/* SCROLL AREA */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border-b py-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <button
            onClick={closeCart}
            className="bg-red-500 text-white px-4 py-2 rounded w-full"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default CartModal;
