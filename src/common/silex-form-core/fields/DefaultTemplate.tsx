import {ADDITIONAL_PROPERTY_FLAG} from "silex-shared/utils";
import React from 'react';

const REQUIRED_FIELD_SYMBOL = "*";

function Label(props) {
    const { label, required, id } = props;
    if (!label) {
        // See #312: Ensure compatibility with old versions of React.
        return <div />;
    }
    return (
        <label className="control-label" htmlFor={id}>
            {label}
            {required && <span className="required">{REQUIRED_FIELD_SYMBOL}</span>}
        </label>
    );
}

function LabelInput(props) {
    const { id, label, onChange } = props;
    return (
        <input
            className="form-control"
            type="text"
            id={id}
            onBlur={event => onChange(event.target.value)}
            defaultValue={label}
        />
    );
}

export default function DefaultTemplate(props) {
    const {
        id,
        classNames,
        label,
        children,
        errors,
        help,
        description,
        hidden,
        required,
        displayLabel,
        onKeyChange,
    } = props;
    if (hidden) {
        return children;
    }
    const additional = props.schema.hasOwnProperty(ADDITIONAL_PROPERTY_FLAG);
    const keyLabel = `${label} Key`;

    return (
        <div className={classNames}>
            {additional && (
                <div className="form-group">
                    <Label label={keyLabel} required={required} id={`${id}-key`} />
                    <LabelInput
                        label={label}
                        required={required}
                        id={`${id}-key`}
                        onChange={onKeyChange}
                    />
                </div>
            )}
            {displayLabel && <Label label={label} required={required} id={id} />}
            {displayLabel && description ? description : null}
            {children}
            {errors}
            {help}
        </div>
    );
}