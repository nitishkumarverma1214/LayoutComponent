import PropTypes from "prop-types";
const LargePeopleItem = ({
  people: { firstName, lastName, age, gender, email },
}) => {
  return (
    <>
      <h3 className="text-2xl">
        {firstName} {lastName}
      </h3>
      <p>age: {age}</p>
      <p>gender:{gender}</p>
      <p>email:{email}</p>
    </>
  );
};

export default LargePeopleItem;

LargePeopleItem.propTypes = {
  people: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.string,
  email: PropTypes.string,
};
