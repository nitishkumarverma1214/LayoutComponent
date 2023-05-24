import { useState, useEffect } from "react";
import SplitScreen from "./component/SplitScreen";
import PropTypes from "prop-types";
import RegularList from "./component/RegularList";
import SmallProductItem from "./component/Products/SmallProductItem";
import LargeProductItem from "./component/Products/LargeProductItem";
import LargePeopleItem from "./component/People/LargePeopleItem";
import NumberedList from "./component/NumberedList";
import Modal from "./component/Modal";
const LeftComponent = ({ name }) => <div className="bg-red-400">{name}</div>;
const RightComponent = ({ message }) => (
  <div className="bg-green-50">{message}</div>
);
function App() {
  const productURL = "https://dummyjson.com/products?limit=5";

  const peopleURL = "https://dummyjson.com/users?limit=5";

  const [products, setProducts] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getProductList();
    getPeopleList();
  }, []);

  const getProductList = async () => {
    try {
      const resposne = await fetch(productURL);
      const data = await resposne.json();

      setProducts(data?.products);
    } catch (error) {
      console.error(error);
    }
  };

  const getPeopleList = async () => {
    try {
      const resposne = await fetch(peopleURL);

      const data = await resposne.json();
      setPeople(data?.users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SplitScreen leftWeight="none">
        <LeftComponent name="left component" />
        <RightComponent message="I'm at the right" />
      </SplitScreen>

      <RegularList
        items={products}
        resourceName="product"
        listItem={SmallProductItem}
      />

      <RegularList
        items={products}
        resourceName="product"
        listItem={LargeProductItem}
      />

      <Modal>
        <NumberedList
          items={people}
          resourceName="people"
          listItem={LargePeopleItem}
        />
      </Modal>
    </>
  );
}

export default App;
RightComponent.propTypes = {
  message: PropTypes.string,
};

LeftComponent.propTypes = {
  name: PropTypes.string,
};
