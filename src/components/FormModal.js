import {
    Button,
    Modal,
    Form,
    Input,
    Upload,
} from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { birthdaysState } from "../recoil/atom/bithdayAtom";
import { v4 as uuid } from "uuid";
import "./FormModal.css";
//TODO: Remove when real photo exists
import balloons from "../assets/balloons.jpg";
import CustomCalendar from "./CustomCalendar";

const FormModal = () => {
    const [birthdays, setBirthdays] = useRecoilState(birthdaysState);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [formDate, setFormDate] = useState(null);
    const [form] = Form.useForm();
    //TODO: Add real url
    const [imageUrl, setImageUrl] = useState();

    const onFinish = (values) => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 1000);

        const age = calculateAge(formDate);
        const monthName = formDate.$d.toLocaleString("en-US", {
            month: "long",
        });
        const birhDate = formDate.$d.getDate() + " " + monthName;

        const birthday = {
            id: uuid(),
            name: values.name,
            age: age,
            date: birhDate,
            //TODO: Add real photo
            picture: balloons,
        };

        setBirthdays((previous) => [...previous, birthday]);
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const calculateAge = (date) => {
        const today = new Date();
        const birth = date.$d;

        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
            age--;
        }

        return age;
    };

    return (
        <>
            <Button
                type="text"
                icon={
                    <PlusOutlined
                        style={{ fontSize: "30px", color: "white" }}
                    />
                }
                style={{ filter: "drop-shadow(1px 2px 3px black)" }}
                size="large"
                onClick={() => setOpen(true)}
            />

            <Modal
                title="Add new birthday"
                open={open}
                onCancel={() => setOpen(false)}
                closable={false}
                centered={true}
                footer={[
                    <Button key="back" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        htmlType="submit"
                        type="primary"
                        loading={confirmLoading}
                        form="myform"
                    >
                        Add
                    </Button>,
                ]}
            >
                <Form
                    id="myform"
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            { required: true, message: "Please enter a name." },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Select date" name="date">
                        <CustomCalendar
                            updateFormDate={(value) => setFormDate(value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Upload image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        name="image"
                    >
                        <Upload
                            //TODO: upload image fr
                            action="/upload.do"
                            listType="picture-card"
                            showUploadList={false}
                            className="avatar-uploader"
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: "100%",
                                    }}
                                />
                            ) : (
                                <PlusOutlined />
                            )}
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default FormModal;
