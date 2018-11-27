// export const sample = {
//     schema: {
//         title: "A registration form",
//         description: "A simple form example.",
//         type: "object",
//         required: ["textArea", "book"],
//         properties: {
//             sex: {
//                 type: "boolean",
//             },
//             children: {
//                 type: "array",
//                 title: "A multiple choices list",
//                 items: {
//                     type: "string",
//                     enum: [1, 2, 3, 4, 5],
//                 },
//                 uniqueItems: true,
//             },
//             book: {
//                 type: "array",
//                 items: {
//                     type: "string",
//                     enum: ["1", "2", "3", "4"],
//                 },
//                 uniqueItems: true,
//             },
//             password: {
//                 type: "string",
//                 maxLength: 6,
//                 minLength: 2,
//             },
//             textArea: {
//                 type: "string",
//             },
//             number: {
//                 type: "number",
//             },
//             range: {
//                 type: "number",
//                 multipleOf: 10,
//                 minimum: 10,
//                 maximum: 200,
//             },
//             date: {
//                 type: "string",
//                 // format: "date",
//             },
//             rangeDate: {
//                 type: "array",
//                 items: {
//                     type: "string",
//                     enum: [],
//                 },
//                 uniqueItems: true,
//             },
//             file: {
//                 type: "object",
//                 properties: {
//                     aa: {
//                         type: "string",
//                     },
//                     bb: {
//                         type: "string",
//                     },
//                     cc: {
//                         type: "string",
//                     },
//                     dd: {
//                         type: "string",
//                     },
//                 },
//             },
//         },
//     },
//     uiSchema: {
//         sex: {
//             "ui$widget": "mySwitchWidget",
//             "ui$title": "hhh",
//             "ui$disabled": false,
//         },
//         children: {
//             "ui$widget": "checkboxes",
//         },
//         book: {
//             "ui$widget": "select",
//             "ui$enums": [
//                 {
//                     id: 1,
//                     name: "name1",
//                     value: "1",
//                 },
//                 {
//                     id: 2,
//                     name: "name2",
//                     value: "2",
//                 },
//                 {
//                     id: 3,
//                     name: "name3",
//                     value: "3",
//                 },
//                 {
//                     id: 4,
//                     name: "name4",
//                     value: "4",
//                 },
//             ],
//         },
//         password: {
//             "ui$widget": "password",
//         },
//         textArea: {
//             "ui$widget": "textarea",
//             "ui$placeholder": "请输入textArea",
//             "ui$disabled": false,
//         },
//         number: {
//             "ui$widget": "NumberWidget",
//             "ui$disabled": false,
//         },
//         range: {
//             "ui$widget": "range",
//             "ui$disabled": false,
//             "ui$options": {
//                 inline: true,
//             },
//         },
//         date: {
//             "ui$widget": "DateWidget",
//         },
//         rangeDate: {
//             "ui$widget": "myRangePickerWidget",
//         },
//         file: {
//             "ui$widget": "FileWidget",
//         },
//     },
//     formData: {
//         sex: false,
//         children: [1, 4],
//         book: ["2"],
//         range: 20,
//         date: "2018-10-18T04:14:47.877Z",
//     },
// };
import { ICoreMetaSchema } from "silex-shared/types";

export const sample: { schema: ICoreMetaSchema; uiSchema: any; formData: any } = {
    schema: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        properties: {
            name: {
                type: "string",
                title: "文本输入框",
                description: "基础控件",
            },
            amount: {
                type: "number",
                title: "文本输入框",
                description: "基础控件",
            },
        },
    },
    uiSchema: {
        name: {
            ui$widget: "text",
        },
        amount: {
            ui$widget: "text",
        },
        ui$order: ["amount", "name"],
    },
    formData: {},
};
