import { Button, Form, Select, Space } from 'antd'
import { PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined, UploadOutlined } from '@ant-design/icons'
import React, { useRef } from 'react'
import { WrapperHeader, WrapperUploadFile } from './style'
import TableComponent from './TableComponent'
import { useState } from 'react'
import InputComponent from './InputComponent'
import { getBase64, renderOptions } from '../../utils'
import * as ProductService from '../../services/ProductService'
import { useMutationHooks } from "./useMutationHook";
import Loading from './Loading'
import { useEffect } from 'react'
import * as message from './Message'
import { useQuery } from '@tanstack/react-query'
import DrawerComponent from './DrawerComponent'
import { useSelector } from 'react-redux'
import ModalComponent from './ModalComponent'


const AdminProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState('')
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  const user = useSelector((state) => state?.user)
  const searchInput = useRef(null);
  const inittial = () => ({
        Name: '',
        Image: '',
        Price: '',
        Type: '',
        Chair: '',
        SystemDrive: '',
        Gasoline: '',
        Description: '',
  })
  const [stateProduct, setStateProduct] = useState(inittial())
  const [stateProductDetails, setStateProductDetails] = useState(inittial())

  const [form] = Form.useForm();

  const mutation = useMutationHooks(
    (data) => {
      const { Name,
        Image,
        Price,
        Type,
        Chair,
        SystemDrive,
        Gasoline,Description } = data
      const res = ProductService.createProduct({
        Name,
        Image,
        Price,
        Type,
        Chair,
        SystemDrive,
        Gasoline,Description
      })
      return res
    }
  )
  const mutationUpdate = useMutationHooks(
    (data) => {
      const { id,
        token,
        ...rests } = data
      const res = ProductService.updateProduct(
        id,
        token,
        { ...rests })
      return res
    },
  )

  const mutationDeleted = useMutationHooks(
    (data) => {
      const { id,
        token,
      } = data
      const res = ProductService.deleteProduct(
        id,
        token)
      return res
    },
  )

  const mutationDeletedMany = useMutationHooks(
    (data) => {
      const { token, ...ids
      } = data
      const res = ProductService.deleteManyProduct(
        ids,
        token)
      return res
    },
  )

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct()
    return res
  }

  const fetchGetDetailsProduct = async (rowSelected) => {
    const res = await ProductService.getDetailsProduct(rowSelected)
    if (res?.data) {
      setStateProductDetails({
        Name: res?.data.Name,
        Image: res?.data.Image,
        Price: res?.data.Price,
        Type: res?.data.Type,
        Chair: res?.data.Chair,
        SystemDrive: res?.data.SystemDrive,
        Gasoline: res?.data.Gasoline,
        Description: res?.data.Description,
      })
    }
    setIsLoadingUpdate(false)
  }

  useEffect(() => {
    if(!isModalOpen) {
      form.setFieldsValue(stateProductDetails)
    }else {
      form.setFieldsValue(inittial())
    }
  }, [form, stateProductDetails, isModalOpen])

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true)
      fetchGetDetailsProduct(rowSelected)
    }
  }, [rowSelected, isOpenDrawer])

  const handleDetailsProduct = () => {
    setIsOpenDrawer(true)
  }

  const handleDelteManyProducts = (ids) => {
    mutationDeletedMany.mutate({ ids: ids, token: user?.access_token }, {
      onSettled: () => {
        queryProduct.refetch()
      }
    })
  }

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    return res
  }

  const { data, isPending, isSuccess, isError, ...res } = mutation
  const { data: dataUpdated, isPending: isLoadingUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
  const { data: dataDeleted, isPending: isLoadingDeleted, isSuccess: isSuccessDelected, isError: isErrorDeleted } = mutationDeleted
  const { data: dataDeletedMany, isPending: isLoadingDeletedMany, isSuccess: isSuccessDelectedMany, isError: isErrorDeletedMany } = mutationDeletedMany

  console.log('check', res)

  const queryProduct = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
  const typeProduct = useQuery({ queryKey: ['type-product'], queryFn: fetchAllTypeProduct })
  const { isPending: isLoadingProducts, data: products } = queryProduct
  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)} />
        <EditOutlined style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }} onClick={handleDetailsProduct} />
      </div>
    )
  }


  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    // setSearchText(selectedKeys[0]);
    // setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    // setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <InputComponent
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     // <Highlighter
    //     //   highlightStyle={{
    //     //     backgroundColor: '#ffc069',
    //     //     padding: 0,
    //     //   }}
    //     //   searchWords={[searchText]}
    //     //   autoEscape
    //     //   textToHighlight={text ? text.toString() : ''}
    //     // />
    //   ) : (
    //     text
    //   ),
  });


  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      sorter: (a, b) => a.Name.length - b.Name.length,
      ...getColumnSearchProps('Name')
    },
    {
      title: 'Price',
      dataIndex: 'Price',
      sorter: (a, b) => a.Price - b.Price,
      filters: [
        {
          text: '>= 50',
          value: '>=',
        },
        {
          text: '<= 50',
          value: '<=',
        }
      ],
      onFilter: (value, record) => {
        if (value === '>=') {
          return record.Price >= 50
        }
        return record.Price <= 50
      },
    },
    {
      title: 'Type',
      dataIndex: 'Type',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      render: renderAction
    },
  ];
  const dataTable = products?.data?.length && products?.data?.map((product) => {
    return { ...product, key: product._id }
  })

  useEffect(() => {
    if (isSuccess && data?.status === 'OK') {
      message.success()
      handleCancel()
    } else if (isError) {
      message.error()
    }
  }, [isSuccess])

  useEffect(() => {
    if (isSuccessDelectedMany && dataDeletedMany?.status === 'OK') {
      message.success()
    } else if (isErrorDeletedMany) {
      message.error()
    }
  }, [isSuccessDelectedMany])

  useEffect(() => {
    if (isSuccessDelected && dataDeleted?.status === 'OK') {
      message.success()
      handleCancelDelete()
    } else if (isErrorDeleted) {
      message.error()
    }
  }, [isSuccessDelected])

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateProductDetails({
        Name: '',
        Image: '',
        Price: '',
        Type: '',
        Chair: '',
        SystemDrive: '',
        Gasoline: '',
        Description: '',
    })
    form.resetFields()
  };

  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === 'OK') {
      message.success()
      handleCloseDrawer()
    } else if (isErrorUpdated) {
      message.error()
    }
  }, [isSuccessUpdated])

  const handleCancelDelete = () => {
    setIsModalOpenDelete(false)
  }


  const handleDeleteProduct = () => {
    mutationDeleted.mutate({ id: rowSelected, token: user?.access_token }, {
      onSettled: () => {
        queryProduct.refetch()
      }
    })
  }

  const handleCancel = () => {
    setIsModalOpen(false);
    setStateProduct({
        Name: '',
        Image: '',
        Price: '',
        Type: '',
        Chair: '',
        SystemDrive: '',
        Gasoline: '',
        Description: '',
    })
    form.resetFields()
  };

  const onFinish = () => {
    const params = {
      Name: stateProduct.Name,
      Price: stateProduct.Price,
      Description: stateProduct.Description,
      Chair: stateProduct.Chair,
      Image: stateProduct.Image,
      Type: stateProduct.Type,
      SystemDrive: stateProduct.SystemDrive,
      Gasoline: stateProduct.Gasoline
    }
    mutation.mutate(params, {
      onSettled: () => {
        queryProduct.refetch()
      }
    })
  }

  const handleOnchange = (e) => {
    setStateProduct({
      ...stateProduct,
      [e.target.name]: e.target.value
    })
  }

  const handleOnchangeDetails = (e) => {
    setStateProductDetails({
      ...stateProductDetails,
      [e.target.name]: e.target.value
    })
  }

  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      Image: file.preview
    })
  }

  const handleOnchangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProductDetails({
      ...stateProductDetails,
      Image: file.preview
    })
  }
  const onUpdateProduct = () => {
    mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateProductDetails }, {
      onSettled: () => {
        queryProduct.refetch()
      }
    })
  }

  const handleChangeSelect = (value) => {
      setStateProduct({
        ...stateProduct,
        type: value
      })
  }

  return (
    <div>
      <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
      <div style={{ marginTop: '10px' }}>
        <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }} onClick={() => setIsModalOpen(true)}><PlusOutlined style={{ fontSize: '60px' }} /></Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <TableComponent handleDelteMany={handleDelteManyProducts} columns={columns} isLoading={isLoadingProducts} data={dataTable} onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              setRowSelected(record._id)
            }
          };
        }} />
      </div>
      <ModalComponent forceRender title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Loading isLoading={isPending}>

          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Name"
              name="Name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <InputComponent value={stateProduct['Name']} onChange={handleOnchange} name="Name" />
            </Form.Item>

            <Form.Item
              label="Type"
              name="Type"
              rules={[{ required: true, message: 'Please input your type!' }]}
            >          
                <InputComponent value={stateProduct.Type} onChange={handleOnchange} name="Type" />
              </Form.Item>

            <Form.Item
              label="Chair"
              name="Chair"
              rules={[{ required: true, message: 'Please input your Chair!' }]}
            >
              <InputComponent value={stateProduct.Chair} onChange={handleOnchange} name="Chair" />
            </Form.Item>
            <Form.Item
              label="Price"
              name="Price"
              rules={[{ required: true, message: 'Please input your count price!' }]}
            >
              <InputComponent value={stateProduct.Price} onChange={handleOnchange} name="Price" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="Description"
              rules={[{ required: true, message: 'Please input your count description!' }]}
            >
              <InputComponent value={stateProduct.Description} onChange={handleOnchange} name="Description" />
            </Form.Item>
            <Form.Item
              label="Gasoline"
              name="Gasoline"
              rules={[{ required: true, message: 'Please input your count Gasoline!' }]}
            >
              <InputComponent value={stateProduct.Gasoline} onChange={handleOnchange} name="Gasoline" />
            </Form.Item>
            <Form.Item
              label="SystemDrive"
              name="SystemDrive"
              rules={[{ required: true, message: 'Please input your SystemDrive of product!' }]}
            >
              <InputComponent value={stateProduct.SystemDrive} onChange={handleOnchange} name="SystemDrive" />
            </Form.Item>
            <Form.Item
              label="Image"
              name="Image"
              rules={[{ required: true, message: 'Please input your count Image!' }]}
            >
              <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                <Button icon = {<UploadOutlined />}>Select File</Button>
                {stateProduct?.Image && (
                  <img src={stateProduct?.Image} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button style={{color: 'white', backgroundColor: 'green'}} htmlType="submit" >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </ModalComponent>
      <DrawerComponent title='Chi tiết sản phẩm' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">
         <Loading isLoading={isLoadingUpdate || isLoadingUpdated}> 

          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={onUpdateProduct}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Name"
              name="Name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <InputComponent value={stateProductDetails['Name']} onChange={handleOnchangeDetails} name="Name" />
            </Form.Item>

            <Form.Item
              label="Type"
              name="Type"
              rules={[{ required: true, message: 'Please input your type!' }]}
            >
              <InputComponent value={stateProductDetails['Type']} onChange={handleOnchangeDetails} name="Type" />
            </Form.Item>
            <Form.Item
              label="Chair"
              name="Chair"
              rules={[{ required: true, message: 'Please input your Chair!' }]}
            >
              <InputComponent value={stateProductDetails.Chair} onChange={handleOnchangeDetails} name="countInStock" />
            </Form.Item>
            <Form.Item
              label="Price"
              name="Price"
              rules={[{ required: true, message: 'Please input your count price!' }]}
            >
              <InputComponent value={stateProductDetails.Price} onChange={handleOnchangeDetails} name="Price" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="Description"
              rules={[{ required: true, message: 'Please input your count description!' }]}
            >
              <InputComponent value={stateProductDetails.Description} onChange={handleOnchangeDetails} name="Description" />
            </Form.Item>
            <Form.Item
              label="Gasoline"
              name="Gasoline"
              rules={[{ required: true, message: 'Please input your Gasoline!' }]}
            >
              <InputComponent value={stateProductDetails.Gasoline} onChange={handleOnchangeDetails} name="Gasoline" />
            </Form.Item>
            <Form.Item
              label="SystemDrive"
              name="SystemDrive"
              rules={[{ required: true, message: 'Please input your SystemDrive' }]}
            >
              <InputComponent value={stateProductDetails.SystemDrive} onChange={handleOnchangeDetails} name="SystemDrive" />
            </Form.Item>
            <Form.Item
              label="Image"
              name="Image"
              rules={[{ required: true, message: 'Please input your count image!' }]}
            >
              <WrapperUploadFile onChange={handleOnchangeAvatarDetails} maxCount={1}>
                <Button >Select File</Button>
                {stateProductDetails?.Image && (
                  <img src={stateProductDetails?.Image} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button style={{color: 'white', backgroundColor: 'blue'}} htmlType="submit">
                Apply
              </Button>
            </Form.Item>
          </Form>
         </Loading> 
      </DrawerComponent>
      <ModalComponent title="Xóa sản phẩm" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct}>
         <Loading isLoading={isLoadingDeleted}> 
          <div>Bạn có chắc xóa sản phẩm này không?</div>
         </Loading> 
      </ModalComponent>
    </div>
  )
}

export default AdminProduct