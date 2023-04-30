import React, { useContext, useEffect, useState } from "react";
import data from "../data.json";
import Layout from "../components/Layout";
import { Button, Table, Checkbox, Form, Input, Modal } from "antd";
import { MyContext } from "../MyContext";


const User = () => {
  const [users, setUsers] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [addFormData, setAddFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: ""
  })
  const [editFormData, setEditFormData] = useState({
    userid: "",
    userName: "",
    email: ""
  });

  const [editUserid, setEditUserid] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //used after value change in text box 
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    console.log(newFormData, "data");
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };


  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    console.log(addFormData)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault(); // prevent submit

    const editedUser = {
      userid: editUserid,
      userName: editFormData.userName,
      email: editFormData.email
    };

    const newUsers = [...users];
    const index = users.findIndex((user) => user.userid === editUserid);
    newUsers[index] = editedUser;

    setUsers(users);

    setEditUserid(null);
  };

  const handleEditClick = (event, user) => {
    event.preventDefault();

    setEditUserid(user.userid);
    const formValues = {

      userName: user.userName,

      email: user.email
    };
    setEditFormData(formValues);

  };

  const handleCancelClick = () => {
    setEditUserid(null);
  };

  const handleDeleteClick = (userId) => {
    const newUsers = [...users];
    const index = users.findIndex((user) => user.userid === userId);
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <div className="table-buttons">
          <Button type="primary">Edit</Button>
          <Button type="primary" danger>Delete</Button>
        </div>
      ),
    },
  ];

  const changeValue = (e) => {
    console.log(e.target.value, e)
  }

  return (
    <>
      <Layout>
        <div className="d-flex f-space-between header-button">
          <h3>Users</h3>
          <Button type="primary" onClick={showModal}>Add User +</Button>
        </div>
        <Modal title="Add User" open={isModalOpen} onOk={handleAddFormSubmit} onCancel={handleCancel}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input name="name" onChange={(e) => handleAddFormChange(e)} />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please input your age!' }]}
            >
              <Input name="age" onChange={(e) => handleAddFormChange(e)}/>
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input name="email" onChange={(e) => handleAddFormChange(e)}/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password name="password" onChange={(e) => handleAddFormChange(e)}/>
            </Form.Item>
          </Form>
        </Modal>

        <Table dataSource={dataSource} columns={columns} />
      </Layout>
    </>
  );
};

export default User;
