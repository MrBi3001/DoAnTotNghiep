import './main.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function ListCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <div>
      <title>Quản lý sản phẩm</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Main CSS*/}
          <link rel="stylesheet" type="text/css" href="main.css" />
        {/* Custom styles for this template */}
        
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v6.3.0/css/all.css"
          />
          {/* bootstrap */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

          <main className="app-content">
            <div className="app-title">
              <ul className="app-breadcrumb breadcrumb side">
                <li className="breadcrumb-item active">
                    <a href='#'>
                        <b>Danh sách sản phẩm</b>
                    </a>
                    
                </li>
              </ul>
              <div id="clock" />
            </div>
            <form>
            <div className="row">
              <div className="col-md-12">
                <div className="tile">
                  <div className="tile-body">
                    <div className="row element-button">
                      <div className="col-sm-2">
                        <a
                          className="btn btn-add btn-sm"
                          href="/AddProduct"
                          title="Thêm"
                        >
                          <i className="fas fa-plus" />
                          Thêm sản phẩm
                        </a>
                      </div>
                    </div>
                    
                    
                    <table
                      className="table table-hover table-bordered js-copytextarea"
                      id="sampleTable"
                    >
                      <thead>
                        <tr >
                            <th width="20">
                                STT
                            </th>
                            <th width="100">ID </th>
                            <th width="250">Tên</th>
                            <th width="150">Giá</th>
                            <th width="200">Thương hiệu </th>
                            <th width="200">Danh mục </th>
                            <th ></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>1</td>
                          <td><a href="/Product_Detail">Tên 1</a></td>
                          <td>2$</td>
                          <td>Thương hiệu 1</td>
                          <td>Danh mục 1</td>
                          <td class="action">
                            <a class="btn btn-primary" href="/EditProduct">
                              <i class="fa-solid fa-pen-to-square"></i>
                            </a>
                            &nbsp;&nbsp;
                            <button variant="primary" onClick={handleShow} type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#basicModal">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Xóa danh mục</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Bạn có chắc chắn muốn xóa?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                    Xóa
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                    Hủy bỏ
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            2
                          </td>
                          <td>2</td>
                          <td>
                                <a href="/Product_Detail">Tên 2</a>
                          </td>
                          <td>3$</td>
                          <td>Thương hiệu 2</td>
                          <td>Danh mục 2</td>
                          <td class="action">
                          <a class="btn btn-primary " href="/EditProduct">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </a>
                          &nbsp;&nbsp;
                            <button variant="primary" onClick={handleShow} type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#basicModal">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Xóa danh mục</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Bạn có chắc chắn muốn xóa?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                    Xóa
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                    Hủy bỏ
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                          
                          
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </main>
      </div>
    </div>
    
  );
}
