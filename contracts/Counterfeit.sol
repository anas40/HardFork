// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;
pragma experimental ABIEncoderV2;
import "./Ownable.sol";

//register owner as seller first

contract Counterfeit is Ownable {
   

    constructor() {
       
        emit constructorSet(msg.sender);
    }

    //----------------Events----------------//
    event constructorSet(address setter);

    struct Product {
        uint256 productId;
        uint256 price;
        string name;
        bool isSold;
    }

    struct sellerDetails {
        uint256 reportCount;
        string name;
        string details;
    }

    //------------Structs End-------------//

    //--------------Arrays----------------//

    Product[] private products;
    sellerDetails[] private sellers;

    //------------Arrays End--------------//

    //--------------Mappings--------------//

    //who owns how many product
    mapping(address => uint256) private ownerProductCount;
  
    mapping(uint256 => address) private productToOwner;


    // should be called by consumers
    function buyProduct(bytes32 _secretId)
        external
        returns (bool)
    {
       
    }

    function getAllProducts() public view returns (Product[] memory) {
       
    }

    // should be called for reselling
    function sellProduct(uint256 _productId, address _buyerAddress)
        external
       
        returns (bool)
    {
       
    }

    function addProduct(
        uint256 _productId,
        bytes32 _secretId,
        uint256 _price,
        string memory _name
    ) external onlyOwner returns (bool) {
        // checking that both product and secret ids are not used before
        
    }

    function productDetails(uint256 _productId)
        external
        view
        returns (
            string memory name,
            uint256 price,
            bool isSold
        )
    {
       
    }

    //----------Functions End-------------//

    //----------Dev Only Owner-------------//

    function productLength()
        public
        view
        onlyOwner
        returns (uint256 _productArrayLength)
    {
        return products.length;
    }

    function sellersLength()
        public
        view
        onlyOwner
        returns (uint256 _sellerArrayLength)
    {
        return sellers.length;
    }

}
