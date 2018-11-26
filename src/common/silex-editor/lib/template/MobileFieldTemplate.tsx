import * as _ from "lodash";
import * as React from "react";

export interface FieldTemplateProps {
    id?: string;
    classNames?: string;
    label?: string;
    errors?: JSX.Element;
    rawErrors?: string[];
    help?: JSX.Element;
    rawHelp?: string | JSX.Element;
    description?: JSX.Element;
    rawDescription?: string | JSX.Element;
    hidden?: boolean;
    required?: boolean;
    readonly?: boolean;
    displayLabel?: boolean;
    fields?: any;
    formContext?: any;
}

export class MobileFieldTemplate extends React.Component<FieldTemplateProps, any> {
    public static defaultProps = {
        required: false,
        hidden: false,
    };

    public render() {
        const { classNames, label, children, errors, hidden } = _.merge(
            {},
            MobileFieldTemplate.defaultProps,
            this.props,
        );

        if (hidden) {
            return children;
        }

        return children;
    }
}
