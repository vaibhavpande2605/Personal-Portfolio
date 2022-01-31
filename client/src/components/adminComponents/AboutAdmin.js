import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AboutAdmin = () => {
  const [about, setAbout] = useState("");
  const [aboutData, setAboutData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);

  useEffect(() => {
    // fetching data
    const fetchData = async () => {
      try {
        const res = await axios.get("/about");
        // console.log(res.data);
        setAboutData(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  // onchange

  const onchangeAbout = (e) => {
    setAbout(e.target.value);
    console.log(about);
  };

  // submit about

  const handleSubmit = (e) => {
    e.preventDefault();

const postAbout={
  about
}

setAbout('');

    axios
      .post(`/about`, postAbout)
      .then((res) => console.log("added"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="same-component">
      <div className="same-form">
        <form onSubmit={handleSubmit}>
          <h4>About Component</h4>
          <label htmlFor="text">About</label>
          <textarea
            value={about}
            onChange={onchangeAbout}
            name="textarea"
            cols="30"
            rows="3"
          />
          <button type="submit">Add item</button>
        </form>
      </div>

      <div className="same-item">
        {aboutData.map((item) => {
          <div className="about-info" key={item._id}>
            <div className="icons">
              <Link to={"/edit"}>
                <i className="fas fa-edit"></i>
              </Link>
              <i className="fas fa-trash"></i>
            </div>

            <p>{item.about}</p>
          </div>;
        })}

        {/* <div className="about-info">
          <div className="icons">
            <Link to={"/edit"}>
              <i className="fas fa-edit"></i>
            </Link>
            <i className="fas fa-trash"></i>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            saepe reiciendis nesciunt tenetur fugiat nam tempore quas odit
            architecto ex necessitatibus non ipsum, veniam atque accusantium
            exercitationem aspernatur. Nemo, non!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutAdmin;
