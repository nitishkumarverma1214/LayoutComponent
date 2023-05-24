import PropTypes from "prop-types";
const SmallPeopleItem = ({ people: { firstName, lastName, age } }) => {
  return (
    <>
      <p>
        {firstName} {lastName} - {age}
      </p>
    </>
  );
};

export default SmallPeopleItem;

SmallPeopleItem.propTypes = {
  people: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
};
