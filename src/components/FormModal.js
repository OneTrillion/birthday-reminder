import {
    Button,
    Modal,
    Form,
    Input,
    Calendar,
    Upload,
    theme,
} from "antd";
import { useState } from "react";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./FormModal.css"

const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
};

const FormModal = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log("Clicked cancel button");
        setOpen(false);
    };
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };
    return (
        <>
            <FloatButton
                icon={<PlusOutlined />}
                type="primary"
                style={{
                    right: 24,
                    width: "100px",
                    height: "100px",
                    filter: "drop-shadow(2px 2px 5px gray)",
                }}
                onClick={showModal}
            />

            <Modal
                title="Add new birthday"
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
        centered={true}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        loading={confirmLoading}
                        onClick={handleOk}
                    >
                        Add
                    </Button>,
                ]}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Select date">
                        <div className="datePicker">
                            <Calendar
                                fullscreen={false}
                                mode={"month"}
                                onPanelChange={onPanelChange}
                            />
                        </div>
                    </Form.Item>
                    <Form.Item
                        label="Upload image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    ></Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default FormModal;
