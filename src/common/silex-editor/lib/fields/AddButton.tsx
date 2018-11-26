import * as React from "react";
import IconButton from "./IconButton";

export default function AddButton({ className, onClick, disabled }) {
    return (
        <div className="row">
            <p
                className={`col-xs-3 col-xs-offset-9 text-right ${className}`}
                style={{
                    padding: 0,
                    margin: "5px 0px 0px",
                }}
            >
                <IconButton
                    type="info"
                    icon="plus"
                    className="btn-add col-xs-12"
                    tabIndex="0"
                    onClick={onClick}
                    disabled={disabled}
                />
            </p>
        </div>
    );
}
