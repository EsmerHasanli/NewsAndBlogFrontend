import React from "react";
import style from "./index.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const LatestNews = () => {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div className={style.LatestNews}>
        <div style={{paddingTop:'70px'}}>
          <h2 className={style.title}>
            Order today and get the 2023 Person of the Year Magazine
          </h2>
          <ul className={style.newsDescr}>
            <li>
              <CheckCircleIcon className={style.icon} />
              <span>2023 Person of the Year Magazine</span>
            </li>
            <li>
              <CheckCircleIcon className={style.icon} />
              <span>TIME Print Edition Home Delivery</span>{" "}
            </li>
            <li>
              <CheckCircleIcon className={style.icon} />
              <span>Digital Magazine Instastart</span>{" "}
            </li>
            <li>
              <CheckCircleIcon className={style.icon} />

              <span>Inside TIME Newsletter</span>
            </li>
          </ul>
          <button className={style.btn}>subscribe now</button>
        </div>
        <div>
          <img
            src="https://api.time.com/wp-content/uploads/2023/12/TIME_HP_Desktop_CM_Unit_616x435_TS-1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
