import React from "react";

const Contact = ({contactRef}) => {
  return (
    <div
      class="container-xxl py-5 px-0 wow fadeInUp "
      data-wow-delay="0.1s"
      style={{ visibility: "visible" }}
      dir="ltr"
      ref={contactRef}
    >
      <div class="row g-0">
        <div class="col-md-6">
          <div class="video">
            <a
              type="button"
              class="btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-bs-target="#videoModal"
              href="https://www.youtube.com/embed/DWRcNpR6Kdc"
              target="_blank"
            >
              <span></span>
            </a>
          </div>
        </div>
        <div class="col-md-6 bg-dark d-flex align-items-center">
          <div
            class="p-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ visibility: "visible" }}
          >
            <h5 class="section-title2 ff-secondary text-start text-primary fw-normal">
              Reservation
            </h5>
            <h1 class="text-white mb-4">Book A Table Online</h1>
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                    <label for="name">Your Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                    <label for="email">Your Email</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    class="form-floating date"
                    id="date3"
                    data-target-input="nearest"
                  >
                    <input
                      type="text"
                      class="form-control datetimepicker-input"
                      id="datetime"
                      placeholder="Date &amp; Time"
                      data-target="#date3"
                      data-toggle="datetimepicker"
                      required
                    />
                    <label for="datetime">Date &amp; Time</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <select class="form-select" id="select1" required>
                      <option value="1">People 1</option>
                      <option value="2">People 2</option>
                      <option value="3">People 3</option>
                    </select>
                    <label for="select1">No Of People</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Special Request"
                      id="message"
                      style={{ height: "100px" }}
                      required
                    ></textarea>
                    <label for="message">Special Request</label>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary w-100 py-3" type="submit">
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
