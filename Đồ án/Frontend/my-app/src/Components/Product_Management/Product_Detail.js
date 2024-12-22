import './main.css';
import React from "react";
import {Link} from "react-router-dom";


export default function Product_Detail() {
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
                <li className="breadcrumb-item"><a href="#">Chi tiết sản phẩm</a></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Chi tiết sản phẩm</h3>
                  <div className="tile-body">
                    <form className="row">
                      <div className="group col-md-4">
                        <label className="control-label">Tên sản phẩm </label>
                        <input placeholder='Tên 1' className="form-control" type="text" disabled />
                      </div>
                      
                      <div className="form-group col-md-4">
                        <label className="control-label">Giá tiền</label>
                        <input placeholder='1$' className="form-control" type="text" disabled />
                      </div>

                      <div className="form-group col-md-4">
                        <label className="control-label">Sale </label>
                        <input placeholder='10%' className="form-control" type="text" disabled />
                      </div>

                      <div className="form-group col-md-4">
                        <label className="control-label">Thương hiệu </label>
                        <input placeholder='Thương hiệu 1' className="form-control" type="text" disabled />
                      </div>

                      <div className="form-group col-md-4">
                        <label className="control-label">Danh mục </label>
                        <input placeholder='Danh mục 1' className="form-control" type="text" disabled />
                      </div>

                      <div className="form-group col-md-4">
                        <label className="control-label">Ngày tạo</label>
                        <input placeholder='14/02/2023' className="form-control" type="text" disabled />
                      </div>

                      {/* <div class="form-floating">
                        
                      </div> */}
                      <div className="form-group col-md-10">
                        <label className="control-label">Mô tả </label>
                        <br>
                        </br>
                        Nhắc đến Ultrabook, chắc chắn rồi Dell XPS là một trong những mẫu sản phẩm mà ta không thể bỏ qua. Điển hình trong đó là chiếc Dell XPS 9315 - một mẫu sản phẩm của nhà Dell mới ra mắt trên thị trường hiện nay. Đây cũng là chiếc Ultrabook đạt được sự cân bằng hoàn hảo giữa tính di động và hiệu suất để mang lại cho người dùng những trải nghiệm tuyệt vời nhất. Hãy đọc bài viết dưới đây của LaptopAZ để có cái nhìn tổng quan về chiếc Dell XPS 13 9315 này nhé!   
                      </div>
                      <br>
                      </br>
                      <p><a href='/ListProduct'>Quay lại</a></p>
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