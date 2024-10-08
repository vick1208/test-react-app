
import Button from "../Elements/Buttons";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow m-2 flex flex-col justify-between">
            {children}
        </div>
    );
}

const Header = (props) => {
    const { image } = props;
    return (
        <a href="#">
            <img src={image} alt="product" className="p-2 h rounded-t-lg h-60 w-full object-cover" />
        </a>
    );
}

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-3 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white"> {name.substring(0, 20)}... </h5>
                <p className="text-sm text-white">
                    {children.substring(0, 100)}...
                </p>
            </a>
        </div>
    );
}

const Footer = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-3">
            <span className="text-xl font-bold text-white">$ {price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</span>
            <Button classname="bg-blue-500" onClick={() => handleAddToCart(id)}>Add To Cart</Button>
        </div>
    );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;


export default CardProduct;