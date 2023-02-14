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
                <h4>Basic table</h4>
                <TableWrapper />
            </section>
            <section className="basicuidemo-table__section">
                <h4>Inverse table with default theme</h4>
                <TableWrapper inverse theme={ThemeType.default} />
            </section>
            <section className="basicuidemo-table__section">
                <h4>Inverse table with primary theme</h4>
                <TableWrapper inverse theme={ThemeType.primary} />
            </section>
            <section className="basicuidemo-table__section">
                <h4>Inverse header table with default theme</h4>
                <TableWrapper inverseHeader theme={ThemeType.default} />
            </section>
            <section className="basicuidemo-table__section">
                <h4>Inverse header table with primary theme</h4>
                <TableWrapper inverseHeader theme={ThemeType.primary} />
            </section>
            <section className="basicuidemo-table__section">
                <h4>Striped table</h4>
                <TableWrapper striped />
            </section>
        </div>
    );
};

export default Table;