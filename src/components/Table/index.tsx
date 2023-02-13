import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";
import "./style.css";
import TableWrapper from "./TableWrapper";

export type TableProps = {
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Table = (props: TableProps) => {
    return (
        <div className="basicuidemo-table">
            <section className="basicuidemo-table__section">
                <TableWrapper />
            </section>
            <section className="basicuidemo-table__section">
                <TableWrapper inverse theme={ThemeType.primary} />
            </section>
        </div>
    );
};

export default Table;