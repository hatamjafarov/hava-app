import React from "react";
import classes from "./Main.module.css";
import Mist from "../assets/icons/mist.png";
import FCloud from "../assets/icons/few-cloud.png";
import Rain from "../assets/icons/rain.png";
import SRain from "../assets/icons/shower-rain.png";
import Snow from "../assets/icons/snow.png";
import Sun from "../assets/icons/sun.png";
import Thunderstorm from "../assets/icons/thunderstorm.png";

const Main = (props) => {
    let desc = null;
    let condition = null;

    switch (props.main) {
        case "Clear" || "":
            desc = Sun;
            condition = "Əsasən aydın";
            break;
        case "Clouds":
            desc = FCloud;
            condition = "Buludlu";
            break;
        case "Drizzle":
            desc = SRain;
            condition = "Çiskin";
            break;
        case "Rain":
            desc = Rain;
            condition = "Yağışlı";
            break;
        case "Thunderstorm":
            desc = Thunderstorm;
            condition = "Tufan";
            break;
        case "Snow":
            desc = Snow;
            condition = "Qarlı";
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
            condition = "Dumanlı";
            break;

        default:
            desc = Sun;
            break;
    }

    return (
        <div className={classes.Main}>
            <div className={classes.Top}>
                <p className={classes.cityName}>
                    {props.timezone !== null
                        ? props.timezone.slice(
                              props.timezone.indexOf("/") + 1,
                              props.timezone.length
                          )
                        : "Baku"}
                </p>
                <img src={desc} alt="" />
            </div>
            <div className={classes.Bottom}>
                <div className={classes.tempDegreeSection}>
                    <p>
                        {props.temp.toString().indexOf(".") !== -1
                            ? props.temp
                                  .toString()
                                  .slice(0, props.temp.toString().indexOf("."))
                            : props.temp}
                        °
                    </p>
                    <span>C</span>
                </div>
                <div className={classes.tempDescription}>
                    <p className={classes.desc}>
                        Hiss edilir: {props.feels_like}° C
                    </p>
                </div>
                <div className={classes.tempDescription}>
                    <p className={classes.desc}>{condition}</p>
                </div>
                <div className={classes.tempDescription}>
                    <p className={classes.desc}>
                        Külək: {props.wind_speed} m/s
                    </p>
                </div>
                <div className={classes.tempDescription}>
                    <p className={classes.desc}>Rütubət: {props.humidity} %</p>
                </div>
            </div>
        </div>
    );
};

export default Main;
