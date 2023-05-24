import PropTypes from "prop-types";
const NumberedList = ({ items, resourceName, listItem: ItemComponent }) => {
  return (
    <>
      {items.map((item, index) => (
        <>
          <h4 className="text-xl">{index + 1}</h4>
          <ItemComponent {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};

export default NumberedList;

NumberedList.propTypes = {
  items: PropTypes.array,
  resourceName: PropTypes.string,
  listItem: PropTypes.func,
};
