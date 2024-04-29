import React, { useState, useRef, useEffect } from "react";
import DemoSection from "../../demo/DemoSection";
import ThemeType from "../types/ThemeType";
import TableWrapper from "./TableWrapper";

export type TableProps = {
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
const Table = (props: TableProps) => {
    return (
        <div className="basicuidemo-table">
            <DemoSection heading="Basic table">
                <TableWrapper />
            </DemoSection>
            <DemoSection heading="Inverse table with primary theme">
                <TableWrapper inverse theme={ThemeType.primary} />
            </DemoSection>
            <DemoSection heading="Inverse header table with danger theme">
                <TableWrapper inverseHeader theme={ThemeType.danger} />
            </DemoSection>
            <DemoSection heading="Striped table">
                <TableWrapper striped />
            </DemoSection>
            <DemoSection heading="Hoverable table">
                <TableWrapper hover />
            </DemoSection>
            <DemoSection heading="Bordered table">
                <TableWrapper bordered theme={ThemeType.primary} inverse />
            </DemoSection>
            <DemoSection heading="Small table">
                <TableWrapper small />
            </DemoSection>
        </div>
    );
};

export default Table;