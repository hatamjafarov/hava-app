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
                {cities.map((city) => {
                    return (
                        <li
                            key={city.name}
                            onClick={() => props.showName(city.name)}
                        >
                            {city.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Navigation;
