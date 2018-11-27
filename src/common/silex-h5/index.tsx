import * as React from "react";
import Fields from "silex-form-core/fields/index";
import Form from "silex-form-core/Form";
import DefaultTemplate from 'silex-form-core/fields/DefaultTemplate'
import DefaultWidgets from './widgets';

export default class SilexH5 extends React.PureComponent<any> {

    public static defaultProps = {};

    public render() {
        const {
            widgets = {},
            fields = {},
            FieldTemplate = DefaultTemplate,
            children,
            ...other
        } = this.props;

        return (
            <Form
                {...other}
                widgets={{ ...DefaultWidgets, ...widgets }}
                fields={{ ...Fields, ...fields }}
                FieldTemplate={FieldTemplate}
            >{children}</Form>
        );
    }
}
