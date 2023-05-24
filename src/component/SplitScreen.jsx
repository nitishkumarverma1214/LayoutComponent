import PropTypes from "prop-types";

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children;
  return (
    <section className="flex">
      <section className={`basis-${leftWeight}`}>{left}</section>
      <section className={`basis-${rightWeight}`}>{right}</section>
    </section>
  );
};

export default SplitScreen;

SplitScreen.propTypes = {
  leftWeight: PropTypes.any,
  rightWeight: PropTypes.any,
  children: PropTypes.any,
};
