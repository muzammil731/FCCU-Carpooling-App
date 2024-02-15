import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";

export default function Schedule() {
  const [alertMessage, setAlertMessage] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [_return, setReturn] = useState("");
  const [scheduleData, setScheduleData] = useState([]);
  const user = localStorage.getItem("user");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/ScheduleApi/",
          { user: user }
        );
        const data = JSON.parse(response.data);
        setScheduleData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const submitApidata = () => {

    const data = { day: day, time: time, user: user , return: _return };
    axios({
      method: "post",
      url: "http://localhost:8000/setScheduleApi/",
      data,
    })
      .then((response) => {
        // let res = setAPIResponse(JSON.stringify(response.data.success));

        if (!response.data.success) {
          setAlertMessage(JSON.stringify(response.data.error_message));
          window.location.reload(false);
        } else {
          setAlertMessage("Your Schedule is updated successful!");
          window.location.reload(false);
          setIsLoggedIn(true);
          setRedirect(true);
          window.location.href = "/schedule";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("Schedule Data:", scheduleData);

  return (
    //getScheduleData(),

    <div>
      <Menu />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="assets/images/4.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="assets/images/5.jpg"
              alt="Second slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <section>
        <h2 className="text-center py-4 mx-auto">Time To Schedule The Ride</h2>

        <div className="container py-4">
          {/* <div className="row"> */}
          {/* <div className="col-lg-12"> */}
          <div className="d-flex align-items-center">
       
            <form style={{width:"80%"}}>
              <div className="row">
                <div className="col-4">

                  <label htmlhtmlFor="Time">Time:</label>
                  <input
                    type="time"
                    className="form-control"
                    id="Time"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />

                </div>
                <div className="col-4">

                  <label htmlhtmlFor="Day">Day:</label>
                  <select
                    className="form-control"
                    id="Day"
                    name="day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  >
                    <option value="" selected></option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>

                </div>

                <div className="col-4">

                  <label htmlhtmlFor="Time">Return:</label>
                  <input
                    type="time"
                    className="form-control"
                    id="Time"
                    name="time"
                    value={_return}
                    onChange={(e) => setReturn(e.target.value)}
                  />

                </div>
                
              </div>
            </form>
            {/* </div> */}
            <button
              type="button"
              className="btn btn-primary btn-lg"
              // style={{ marginTop: "16px", position: "absolute", bottom: "0", marginBottom: "20px" }}
              onClick={submitApidata}
            >
              Submit
            </button>

   

          </div>

          {/* <div className="col-2" style={{position:"relative"}}>
       
            </div> */}
          {/* </div> */}

          {alertMessage && (
            <div className="alert alert-primary" role="alert">
              {alertMessage}
            </div>
          )}


          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Return</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Monday</td>
                <td>{scheduleData[0]?.fields.monday}</td>
                <td>{scheduleData[0]?.fields.monday_return}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Tuesday</td>
                <td>{scheduleData[0]?.fields.tuesday}</td>
                <td>{scheduleData[0]?.fields.tuesday_return}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Wednesday</td>
                <td>{scheduleData[0]?.fields.wednesday}</td>
                <td>{scheduleData[0]?.fields.wednesday_return}</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Thursday</td>
                <td>{scheduleData[0]?.fields.thursday}</td>
                <td>{scheduleData[0]?.fields.thursday_return}</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Friday</td>
                <td>{scheduleData[0]?.fields.friday}</td>
                <td>{scheduleData[0]?.fields.friday_return}</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Saturday</td>
                <td>{scheduleData[0]?.fields.saturday}</td>
                <td>{scheduleData[0]?.fields.saturday_return}</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Sunday</td>
                <td>{scheduleData[0]?.fields.sunday}</td>
                <td>{scheduleData[0]?.fields.sunday_return}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
}
