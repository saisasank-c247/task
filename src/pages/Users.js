import React, { useContext, useEffect, useState } from "react";
import data from "../data.json";
import Layout from "../components/Layout";
import { Button, Table, Checkbox, Form, Input, Modal } from "antd";
import { MyContext } from "../MyContext";
import axios from "axios";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const User = () => {
  const [users, setUsers] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);

  const [addFormData, setAddFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: ""
  })
  const [editFormData, setEditFormData] = useState({
    _id: "",
    name: "",
    age: "",
    email: "",
    password: ""
  });

  const showModal = () => {
    setIsModalOpen(true);
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
    setLoading(true);
    axios.post('http://localhost:3001/users/insert', addFormData).then(res => {
      loadUsers();
      handleCancel()
    })
  }

  const loadUsers = () => {
    setLoading(true);
    axios.get("http://localhost:3001/users").then((response) => {
      console.log(response.data);
      setDataSource(response.data)
      setLoading(false);
    }).catch(err => {
      setLoading(false)
    });
  }

  React.useEffect(() => {
    loadUsers();
  }, []);

  const openEditModal = (item) => {
    setEditFormData(item);
    setIsEditModalOpen(true);
    console.log(item)
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault(); // prevent submit
    setLoading(true);
    let editData = { ...editFormData };
    axios.put('http://localhost:3001/users/update/' + editData._id, editData).then(res => {
      loadUsers();
      closeEditModal()
      setLoading(false);
    }).catch(err => {
      setLoading(false);
    })
  };

  const deleteUser = (item) => {
    setLoading(true)
    axios.delete('http://localhost:3001/users/delete/' + item._id).then(res => {
      loadUsers();
      closeEditModal()
      setLoading(false);
    }).catch(err => {
      setLoading(false);
    })
  }

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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Actions',
      render: (item, record) => (
        <div className="table-buttons">
          <Button type="primary" onClick={() => openEditModal(item)}>Edit</Button>
          <Button type="primary" danger onClick={() => deleteUser(item)}>Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <div className="d-flex f-space-between header-button">
          <h3>Users</h3>
          <Button type="primary" onClick={showModal}>Add User +</Button>

        </div>
        {isModalOpen ? <Modal title="Add User" open={isModalOpen}
          footer={[
            <Button key="cancel" loading={loading} onClick={handleCancel}>Cancel</Button>,
            <Button key="confirm" loading={loading} onClick={handleAddFormSubmit}>Submit</Button>
          ]}
        >
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
              <Input name="age" onChange={(e) => handleAddFormChange(e)} />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input name="email" onChange={(e) => handleAddFormChange(e)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password name="password" onChange={(e) => handleAddFormChange(e)} />
            </Form.Item>
          </Form>
        </Modal> : null}
        {isEditModalOpen ? <Modal title="Update User" open={isEditModalOpen}
          footer={[
            <Button key="cancel" loading={loading} onClick={closeEditModal}>Cancel</Button>,
            <Button key="confirm" loading={loading} onClick={handleEditFormSubmit}>Submit</Button>
          ]}
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={editFormData}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input name="name" onChange={(e) => handleEditFormChange(e)} />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please input your age!' }]}
            >
              <Input name="age" onChange={(e) => handleEditFormChange(e)} />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input name="email" onChange={(e) => handleEditFormChange(e)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password name="password" onChange={(e) => handleEditFormChange(e)} />
            </Form.Item>
          </Form>
        </Modal> : null}
        {
          loading ? <Spin indicator={antIcon} /> : <Table dataSource={dataSource} columns={columns} />
        }

      </Layout>
    </>
  );
};

export default User;
