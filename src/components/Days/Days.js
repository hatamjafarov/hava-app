import React from "react";
import classes from "./Days.module.css";
import Mist from "../../assets/icons/mist.png";
import FCloud from "../../assets/icons/few-cloud.png";
import Rain from "../../assets/icons/rain.png";
import SRain from "../../assets/icons/shower-rain.png";
import Snow from "../../assets/icons/snow.png";
import Sun from "../../assets/icons/sun.png";
import Thunderstorm from "../../assets/icons/thunderstorm.png";
const Days = (props) => {
    let desc = null;

    return (
        <div className={classes.Days}>
            {props.days.map((day, index) => {
                desc = props.weeks[index].weather[0].main;
                switch (desc) {
                    case "Clear" || "":
                        desc = Sun;

                        break;
                    case "Clouds":
                        desc = FCloud;

                        break;
                    case "Drizzle":
                        desc = SRain;

                        break;
                    case "Rain":
                        desc = Rain;

                        break;
                    case "Thunderstorm":
                        desc = Thunderstorm;

                        break;
                    case "Snow":
                        desc = Snow;

                        break;
                    case "Mist" ||
                        "Smoke" ||
                        "Haze" ||
                        "Dust" ||
                        "Fog" ||
                        "Ash" ||
                        "Squall" ||
                        "Tornado":
                        desc = Mist;

                        break;

                    default:
                        desc = Sun;
                        break;
                }
                return (
                    <div className={classes.EachDay} key={day}>
                        <span>{day}</span>
                        <span><img src={desc} alt="" /></span>
                        <span>
                            {props.weeks[index].temp.day
                                .toString()
                                .indexOf(".") !== -1
                                ? props.weeks[index].temp.day
                                      .toString()
                                      .slice(
                                          0,
                                          props.weeks[index].temp.day
                                              .toString()
                                              .indexOf(".")
                                      )
                                : props.weeks[index].temp.day}
                            °C
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default Days;
