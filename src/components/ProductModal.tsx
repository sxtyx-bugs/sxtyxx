import React from 'react';

interface ProductModalProps {
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#2A2A2A]/80 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full" onClick={e => e.stopPropagation()}>
        <div className="grid grid-cols-[120px,1fr] gap-4">
          <img
            src="https://example.com/dress-image.jpg"
            alt="Zara Sequin Dress"
            className="w-[120px] h-[120px] rounded-lg object-cover"
          />
          
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Zara Sequin Dress</h3>
            <p className="text-gray-600">$89.99 | 4.2★</p>
            <p className="text-gray-600">Available in 5 colors</p>
            
            <div className="flex space-x-2">
              <button className="bg-[#00C853] text-white px-4 py-2 rounded-lg font-bold">
                🛒 Buy Now
              </button>
              <button className="border border-[#00C853] text-[#00C853] px-4 py-2 rounded-lg font-bold">
                ❤ Save
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <img src="/amazon-logo.png" alt="Amazon" className="h-8" />
          <img src="/ebay-logo.png" alt="eBay" className="h-8" />
          <img src="/zara-logo.png" alt="Zara" className="h-8" />
        </div>
      </div>
    </div>
  );
}

export default ProductModal;