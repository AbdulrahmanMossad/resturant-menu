import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemList from "./components/ItemList";
import { useRef, useState } from "react";
import { items } from "./data";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
function App() {
  const [itemsData, setItemsData] = useState(items);
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  const filterData = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };
  const searchData = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };
  const [searchValue, setSearchValue] = useState("");
  const titleRef = useRef(null);
  const contactRef = useRef(null);
  const serviceRef = useRef(null);
  const searchItems = (e) => {
    e.preventDefault(); //to stop submit of form (to prevent reloading page )
    searchData(searchValue);
    setSearchValue("");
    scrollToView("menu");
  };
  const scrollToView = (str) => {
    if (str === "menu") {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (str === "contact") {
      // console.log("hi");
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (str === "service") {
      // console.log("hi");
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="color-body font">
      <NavBar
        searchData={searchData}
        searchItems={searchItems}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        scrollToView={scrollToView}
      />
      <Container>
        <Header titleRef={titleRef} />
        <Category filterData={filterData} allCategory={allCategory} />
        <ItemList itemsData={itemsData} />
        <Services serviceRef={serviceRef} />
        <Contact contactRef={contactRef} />
      
      </Container>
      <Footer />
    </div>
  );
}

export default App;
