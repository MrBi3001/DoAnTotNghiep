import './main.css';
import React from "react";
import {Link} from "react-router-dom";


export default function EditProduct() {
      return (
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
            <div className="app-title mt-5">
              <ul className="app-breadcrumb breadcrumb">
                <li className="breadcrumb-item"><a href="/ListProduct">Danh sách sản phẩm</a></li>
                <li className="breadcrumb-item"><a href="#">Sửa sản phẩm</a></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Sửa sản phẩm</h3>
                  <div className="tile-body">
                    <form className="row">
                      <div className="group col-md-4">
                        <label className="control-label">Tên sản phẩm </label>
                        <input placeholder='Tên sản phẩm' className="form-control" type="text"  required/>
                      </div>
                      
                      <div className="form-group col-md-4">
                        <label className="control-label">Giá tiền</label>
                        <input placeholder='Giá tiền' className="form-control" type="text" required />
                      </div>

                      <div className="form-group col-md-4">
                        <label className="control-label">Sale</label>
                        <input placeholder='Giảm giá' className="form-control" type="text"/>
                      </div>

                      <div className="form-group col-md-4">
                        <label className="control-label">Thương hiệu</label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <div className="form-group col-md-4">
                        <label className="control-label">Danh mục</label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <div class="form-floating">
                        
                      </div>
                      <div className="form-group col-md-10">
                      <label className="control-label">Mô tả</label>
                        <textarea class="form-control" placeholder="Mô tả"></textarea>
                      </div>
                      <div>
                            <button type='submit' class="btn btn-success">Lưu lại</button> &nbsp;
                            <button type="cancel" class="btn btn-secondary">Hủy bỏ</button>
                        </div>
                      </form>
                      
                    
                  </div>
                </div>
              </div>
            </div></main>
          {/* Essential javascripts for application to work*/}
          {/* The javascript plugin to display page loading on top*/}
        </div>
      );
    }
  ;