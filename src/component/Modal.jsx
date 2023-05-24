import { useState } from "react";
import PropTypes from "prop-types";
const Modal = ({ children }) => {
  const [isModelVisible, setIsModelVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModelVisible(true)}
        className="rounded-full bg-sky-400 p-2"
      >
        Show Modal
      </button>
      {isModelVisible && (
        <section
          className="fixed top-0 left-0 w-full h-full bg-gray-300 overflow-auto"
          onClick={() => setIsModelVisible(false)}
        >
          <section
            onClick={(e) => e.preventDefault()}
            className="w-[50%] mx-auto my-[10%] bg-white p-5"
          >
            <button
              onClick={() => setIsModelVisible(false)}
              className="rounded-full bg-sky-400 p-2"
            >
              close modal
            </button>
            {children}
          </section>
        </section>
      )}
    </>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.array,
};
