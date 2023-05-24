import PropTypes from "prop-types";
const RegularList = ({ items, resourceName, listItem: ItemComponent }) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;

RegularList.propTypes = {
  items: PropTypes.array,
  resourceName: PropTypes.string,
  listItem: PropTypes.func,
};
