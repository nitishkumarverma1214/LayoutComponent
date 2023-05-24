import PropTypes from "prop-types";
const SmallProductItem = ({ product: { title, price } }) => {
  return (
    <>
      <p>
        {title}, {price}
      </p>
    </>
  );
};

export default SmallProductItem;

SmallProductItem.propTypes = {
  product: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number,
};
