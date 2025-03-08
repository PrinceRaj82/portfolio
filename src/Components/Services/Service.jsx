import "./Service.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import servicesData from "../../assets/services_data.js";
import arrow from "../../assets/arrow_icon.svg";

export default function Service() {
  return (
    <div className="services" id="services">
      <div className="services_title">
        <h1>My services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services_container">
        {servicesData.map((service, idx) => {
          return (
            <div key={idx} className="service_format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services_readmore">
                <p>Read more</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
