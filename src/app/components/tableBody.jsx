import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
// import userApi from "../api/fake.api/user.api";
// import Main from "./main";
// import { Route } from "react-router-dom";

const TableBody = ({ data, columns }) => {
    console.log(data);
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return _.get(item, columns[column].path);
    };
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    <a href={`/users/${item._id}`}>{item.name}</a>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableBody;