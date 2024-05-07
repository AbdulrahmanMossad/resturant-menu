import React from "react";

const Footer = () => {
  return (
    <div class="container-fluid footer" dir="rtl">
      <div class="row footer-align">
        <div class="col-md-4 col-sm-4">
          <h5>عنوانا</h5>
          <hr class="hr-foot" />
          <div class="footer-items">
            <p class="footer">مدينة نصر بجوار النادي الاهلي</p>
            <ul class="social-networks">
              <a href="#" class="instagram">
                <i class="fa fa-instagram"></i>
              </a>
              
              <a href="#" class="facebook">
                <i class="fa fa-facebook"></i>
              </a>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <h5>Our contact</h5>
          <hr class="hr-foot" />
          <div class="footer-items">
            <ul style={{ listStyle: "none" }} dir="ltr">
              <li>
                <i class="fa-solid fa-phone"></i> +201551193040
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i> aabb42546@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <h5>Open hours</h5>
          <hr class="hr-foot" />
          <div class="footer-items">
            <ul style={{ listStyle: "none" }}>
              <li>Mon-Fri: 08:00-22:00</li>
              <li>Sat : 09:00-22:00</li>
              <li>Sun : 09:00-16:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
