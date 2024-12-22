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
      <title>Quản trị Admin</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Main CSS*/}
          <link rel="stylesheet" type="text/css" href="css/main.css" />
          <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
        {/* Custom styles for this template */}
        <link href="modals.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
          />
          {/* or */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
          />
          {/* Font-icon css*/}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v6.3.0/css/all.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css"
          />


          <main className="app-content">
            <div className="app-title">
              <ul className="app-breadcrumb breadcrumb side">
                <li className="breadcrumb-item active">
                  <a href="#">
                    <b>Danh sách danh mục</b>
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
                          href="/AddCategory"
                          title="Thêm"
                        >
                          <i className="fas fa-plus" />
                          Thêm danh mục
                        </a>
                      </div>
                    </div>
                    
                    
                    <table
                      className="table table-hover table-bordered js-copytextarea"
                      id="sampleTable"
                    >
                      <thead>
                        <tr >
                          <th width="50">
                            <input type="checkbox" id="all" />
                          </th>
                          <th width="100" >ID </th>
                          <th width="200">Hình ảnh</th>
                          <th width="200">Tên danh mục</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="check1"
                              defaultValue={1}
                            />
                          </td>
                          <td>#CD12837</td>
                          <td>
                            <img
                              className="img-card-person"
                              src="/img-anhthe/1.jpg"
                              alt=""
                            />
                          </td>
                          <td>Danh mục 1 </td>
                          <td class="action">
                            <a class="btn btn-primary btn-sm edit" href="/EditCategory">
                              <i class="fa-solid fa-pen-to-square"></i>
                            </a>
                        
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="check2"
                              defaultValue={2}
                            />
                          </td>
                          <td>#SX22837</td>
                          <td>
                            <img
                              className="img-card-person"
                              src="/img-anhthe/1.jpg"
                              alt=""
                            />
                          </td>
                          <td>
                            Danh mục 2
                          </td>
                          <td class="action">
                          <a class="btn btn-primary btn-sm edit" href="/EditCategory">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </a>

                          
                          
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                    <Button variant="primary" onClick={handleShow} type="button" class="btn btn-primary trash" data-bs-toggle="modal" data-bs-target="#basicModal">
                        Xóa danh mục
                        </Button>

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
                    </div>
                    
                  

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
