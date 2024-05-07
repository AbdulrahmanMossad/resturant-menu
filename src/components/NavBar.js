import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
const NavBar = ({
  searchData,
  searchItems,
  searchValue,
  setSearchValue,
  scrollToView,
}) => {
  return (
    <Row className="navBar ">
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-section">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <button onClick={searchItems} className="btn-search">
                بحث
              </button>

              <FormControl
                type="text"
                placeholder="ابحث .."
                className="mx-2"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
            </Form>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  {" "}
                  من نحن
                </a>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={() => scrollToView("menu")}>
                  قائمة الطعام
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  href="#service"
                  onClick={() => scrollToView("service")}
                >
                  الخدمات
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  onClick={() => scrollToView("contact")}
                >
                  تواصل معنا
                </button>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="pic-section d-flex flex-wrap d-flex justify-content-center ">
        <div
          className="details-section col-lg-6 col-md-6
        col-sm-4"
        >
          <h1>استمتع بالوجبات المميزة</h1>
          <p>
            من مطبخنا الأصيل إلى طبقك المميز , تُطهى بأيدي طباخين ذو خبرة فائقة.
            نعدكم أن نقدم لكم أفضل تجربة مميزة لك ولعائلتك وأصدقائك طوال اليوم.
          </p>
          <button
            class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
            onClick={() => scrollToView("contact")}
          >
            احجز الان
          </button>
        </div>
        <div class="col-sm-8 col-md-6 col-lg-6  d-flex justify-content-center text-lg-end overflow-hidden">
          <img class="img-fluid" src="./hero.png" alt="" />
        </div>
      </div>

      {/* <div className="header-pic">
        <img
          src="./delicious_meals.jpg"
          alt="menu"
          className="header-picture"
        />
      </div> */}
    </Row>
  );
};

export default NavBar;
