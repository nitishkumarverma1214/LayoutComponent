import PropTypes from "prop-types";

const LargeProductItem = ({ product: { title, description, price } }) => {
  return (
    <>
      <h1 className="text-2xl">{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </>
  );
};

export default LargeProductItem;

LargeProductItem.propTypes = {
  product: PropTypes.object,
};
