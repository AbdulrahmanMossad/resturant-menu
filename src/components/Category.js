import { Col, Row } from "react-bootstrap";

const Category = ({ filterData, allCategory }) => {
  const filterlaunch = (cat) => {
    filterData(cat);
  };
  return (
    <Row className="my-2 mb-5 ">
      <Col sm="12" className="d-flex justify-content-center">
        {/* <button onClick={()=>filterlaunch("الكل")}style={{border: "1px solid #b45b35"}}className='btn mx-2' >
                  الكل
              </button> */}
        {allCategory.length > 1
          ? allCategory.map((item) => {
              return (
                <div key={Math.random()}>
                  <button
                    onClick={() => filterlaunch(item)}
                    style={{ border: "1px solid #fea116" }}
                    className="btn mx-2"
                  >
                    {item}
                  </button>
                </div>
              );
            })
          : null}
      </Col>
    </Row>
  );
};

export default Category;
