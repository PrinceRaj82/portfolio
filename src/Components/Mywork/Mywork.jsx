import "./Mywork.css"
import theme_pattern from "../../assets/theme_pattern.svg";
import works from "../../assets/mywork_data"
import arrow from "../../assets/arrow_icon.svg";

export default function Mywork(){
    return (
        <div className="Mywork" id="project">
            <div className="mywork_title">
                <h1>My latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork_container">
                {works.map((work,idx)=>{
                    return <img key={idx} src={work.w_img} alt="" />
                })}
            </div>
            <div className="mywork_showmore">
                <p>Show more</p>
                <img src={arrow} alt="" />
            </div>

        </div>
    )
}