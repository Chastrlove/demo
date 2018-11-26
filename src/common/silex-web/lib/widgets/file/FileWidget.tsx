import * as _ from "lodash";
import * as React from "react";
import { Button, Icon, Upload } from "antd";
import { PurpleCoreSchemaMetaSchema } from "../../types";
import { UploadProps } from "antd/lib/upload/interface";

export interface FileWidgetProps {
    schema: PurpleCoreSchemaMetaSchema;
    id: string;
    placeholder?: string;
    options?: any;
    value?: any;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (...args: any[]) => any;
    type?: string;
    uploadProps?: UploadProps;
}

export class FileWidget extends React.Component<FileWidgetProps, any> {
    public state = {
        fileList: [],
    };

    public static defaultProps = {
        disabled: false,
        readonly: false,
    };

    public onChange = (value) => {
        const { onChange } = this.props;

        if (onChange && _.isFunction(onChange)) {
            onChange(value);
        }
    };

    public onRemove = (file) => {
        this.setState(
            ({ fileList }) => {
                const index = fileList.indexOf(file);
                const newFileList = fileList.slice();
                newFileList.splice(index, 1);
                return {
                    fileList: newFileList,
                };
            },
            () => {
                const { fileList } = this.state;

                this.onChange(_.isEmpty(fileList) ? {} : fileList[0]);
            },
        );
    };

    public beforeUpload = (file) => {
        this.setState(({ fileList }) => {
            this.onChange(file);

            return { fileList: [file] };
        });

        return false;
    };

    public render() {
        if (_.isEmpty(this.props.id)) {
            console.log("No id for", this.props);
            throw new Error(`no id for props ${JSON.stringify(this.props)}`);
        }

        const { readonly, disabled } = _.merge({}, FileWidget.defaultProps, this.props);

        const props = {
            onRemove: this.onRemove,
            beforeUpload: this.beforeUpload,
            fileList: this.state.fileList,
        };

        return (
            <Upload {...props}>
                <Button disabled={disabled || readonly}>
                    <Icon type="upload" /> 上传文件
                </Button>
            </Upload>
        );
    }
}

export const MyFileWidget = (props: FileWidgetProps) => {
    return <FileWidget {...props} />;
};
