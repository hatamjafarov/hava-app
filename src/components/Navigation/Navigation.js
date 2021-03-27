import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
    const cities = [
        { name: "Bakı" },
        { name: "Istanbul" },
        { name: "London" },
        { name: "Paris" },
    ];

    return (
        <div className={classes.Navigation}>
            <ul>
                <li>
                    {cities.map((city) => {
                        return (
                            <a
                                key={city.name}
                                onClick={() => props.showName(city.name)}
                                className={props.active === city.name ? classes.active : null}
                            >
                                {city.name}
                            </a>
                        );
                    })}
                </li>
            </ul>
        </div>
    );
};
export default Navigation;
