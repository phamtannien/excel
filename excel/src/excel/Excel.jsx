import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Upload, message } from "antd";
import { userService } from "../services/user";


export default function Excel() {
    const [file, setFile] = useState({})
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
    const onFinish = async (values) => {
        console.log(values);
        // try {
        //     const res = userService.uploadFile(values)
        // if(res){
        // setFile(res.data)
        //     console.log("thành công");
        // }
        // console.log("k có data gửi lên");
        // } catch (error) {
        //     console.log("thất bại");
        // }
        };
     const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
          };
  return (
    <div className="card text-center">
      <div className="card-header">Upload File </div>
      <div className="card-body">
        <Form
         name="basic"
         
         initialValues={{
           remember: true,
         }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         autoComplete="off"
        >
          <Form.Item 
            label="file"
            name="file"
            rules={[
        {
          required: true,
          message: 'Please input your file!',
        },
      ]}>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* <div className="card-footer text-muted">2 days ago</div> */}
    </div>
  );
}
