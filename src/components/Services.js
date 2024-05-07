import React from "react";

const Services = ({ serviceRef }) => {
  return (
    <div class="container-xxl py-5 " ref={serviceRef}>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 class="section-title ff-secondary text-center text-primary fw-normal">
            الخدمات
          </h5>
        </div>
        <div class="row g-4">
          <div
            class="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ visibility: "visible" }}
          >
            <div class="service-item rounded pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                <h5>طقم الطباخين</h5>
                <p> طباخين علي اعلي مستوي من الكفاءة جرب الان .</p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-delay="0.3s"
            style={{ visibility: "visible" }}
          >
            <div class="service-item rounded pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                <h5>جودة الطعام</h5>
                <p>تمتع بجودة طعام فائقة من حيث الطعم و النظافة .</p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-delay="0.5s"
            style={{ visibility: "visible" }}
          >
            <div class="service-item rounded pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                <h5>اونلاين</h5>
                <p>يمكنك طلب وجبتك و تصل الي بيتك في اسرع وقت .</p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-delay="0.7s"
            style={{ visibility: "visible" }}
          >
            <div class="service-item rounded pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                <h5>خدمة 24 ساعة</h5>
                <p>يمكنك طلب وجبتك في اي وقت طوال اليو.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
