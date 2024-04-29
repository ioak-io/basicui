import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";

export type TableWrapperProps = {
    theme?: ThemeType;
    inverse?: boolean;
    inverseHeader?: boolean;
    striped?: boolean;
    hover?: boolean;
    bordered?: boolean;
    small?: boolean;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const TableWrapper = (props: TableWrapperProps) => {
    return (
        <table className={`basicui-table theme-${props.theme || ThemeType.default} ${props.inverse ? "table-inverse" : ""} ${props.striped ? "table-striped" : ""} ${props.hover ? "table-hover" : ""} ${props.bordered ? "table-bordered" : ""} ${props.small ? "table-small" : ""}`}>
            <thead className={`${props.inverseHeader ? "thead-inverse" : ""}`}>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gene</td>
                    <td>Tierney</td>
                    <td>gene.tierney@ioak.org</td>
                    <td>36</td>
                </tr>
                <tr>
                    <td>Jack</td>
                    <td>Lemmon</td>
                    <td>jack.lemmon@ioak.org</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>Billy</td>
                    <td>Wilder</td>
                    <td>billy.wilder@ioak.org</td>
                    <td>45</td>
                </tr>
                <tr>
                    <td>Katherine</td>
                    <td>Hepburn</td>
                    <td>katherina.hepburn@ioak.org</td>
                    <td>27</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableWrapper;