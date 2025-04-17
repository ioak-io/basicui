import React, { ReactElement, ReactNode, isValidElement, useEffect, useState } from "react";
import ListItemInternal from "./ListItemInternal";
import Button from "../Button";
import ThemeType from "../types/ThemeType";

export interface ListProps {
    data: ListItemType[];
    onClick: (id: string) => void;
    children?: ReactNode;
    selectedItems?: string[];
    onSelect: (event: any) => void;
    showSelectOnRight?: boolean;
}

export interface ListItemType {
    id: string;
    title: string;
    summary: string;
    labels?: { id: string, value: string }[]
    createdAt?: Date | string;
    [key: string]: any;
}

const isListItem = (element: ReactNode): element is ReactElement => {
    return (
        isValidElement(element) &&
        (element.type as any).displayName === "ListItem"
    );
};

const List = (props: ListProps) => {

    const handleItemSelect = (event: any) => {
        console.log(event);
        props.onSelect(event);
    }

    const handleItemClick = (id: string) => {
        props.onClick(id);
    };

    const renderChildrenWithEvents = () => {
        return React.Children.map(props.children, (child, index) => {
            if (!isListItem(child)) {
                console.warn("Only <ListItem> components are allowed as children of <List>");
                return null;
            }

            console.log(child)

            return (
                <ListItemInternal
                    key={props.data[index]?.id ?? index}
                    data={props.data[index]}
                    selectedItems={props.selectedItems}
                    onClick={() => handleItemClick(props.data[index].id)}
                    onSelect={handleItemSelect}
                    showSelectOnRight={props.showSelectOnRight}
                >
                    {child}
                </ListItemInternal>
            );
        });
    };


    return (
        <div className="basicui-list">
            {props.data.length > 20 && <div className="basicui-list__header">
                <div>Page 1 of 10</div>
                <div className="basicui-list__header__right">
                    {props.selectedItems && props.selectedItems?.length === 1 && <Button theme={ThemeType.primary}>Edit</Button>}
                    {props.selectedItems && props.selectedItems?.length > 0 && <Button theme={ThemeType.danger}>Delete</Button>}
                </div>
            </div>}
            <div>
                {props.children
                    ? renderChildrenWithEvents()
                    : props.data?.map(item => (
                        <ListItemInternal
                            key={item.id}
                            selectedItems={props.selectedItems}
                            data={item}
                            onClick={() => handleItemClick(item.id)}
                            onSelect={handleItemSelect}
                            showSelectOnRight={props.showSelectOnRight}
                        />
                    ))}
            </div>
            <div className="basicui-list__footer">
                <div>Page 1 of 10</div>
                <div className="basicui-list__footer__right">
                    {props.selectedItems && props.selectedItems?.length === 1 && <Button theme={ThemeType.primary}>Edit</Button>}
                    {props.selectedItems && props.selectedItems?.length > 0 && <Button theme={ThemeType.danger}>Delete</Button>}
                </div>
            </div>
        </div>
    );
};

export default List;
