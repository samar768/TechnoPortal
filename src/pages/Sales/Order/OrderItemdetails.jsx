import React from "react";

function OrderItemdetails() {
  return (
    <div className="section-body">
    <div className="row">
      <div className="col-12 col-md-12 col-lg-12">
        <div className="card">
          <div className="card-body">
          <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Order</h4>
                    <div className="card-header-form">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          {/* <div className="input-group-btn">
                            <button className="btn btn-primary">
                              <i className="fas fa-search"></i>
                            </button>
                          </div> */}
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-striped child-table center-align">
                        <tr>
                          <th>
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                data-checkbox-role="dad"
                                className="custom-control-input"
                                id="checkbox-all"
                              />
                              <label
                                for="checkbox-all"
                                className="custom-control-label"
                              >
                                {/* &nbsp; */}
                              </label>
                            </div>
                          </th>
                          <th>Party Name</th>
                          <th>Progress</th>
                          <th>Members</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                className="custom-control-input"
                                id="checkbox-1"
                              />
                              <label
                                for="checkbox-1"
                                className="custom-control-label"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>Create a mobile app</td>
                          <td className="align-middle">
                            <div
                              className="progress"
                              data-height="4"
                              data-toggle="tooltip"
                              title="100%"
                            >
                              <div
                                className="progress-bar bg-success"
                                data-width="100"
                              ></div>
                            </div>
                          </td>
                          <td>
                            <img
                              alt="image"
                              src="../assets/img/avatar/avatar-5.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Wildan Ahdian"
                            />
                          </td>
                          <td>2018-01-20</td>
                          <td>
                            <div className="badge badge-success">Completed</div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                className="custom-control-input"
                                id="checkbox-2"
                              />
                              <label
                                for="checkbox-2"
                                className="custom-control-label"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>Redesign homepage</td>
                          <td className="align-middle">
                            <div
                              className="progress"
                              data-height="4"
                              data-toggle="tooltip"
                              title="0%"
                            >
                              <div className="progress-bar" data-width="0"></div>
                            </div>
                          </td>
                          <td>
                            <img
                              alt="image"
                              src="../assets/img/avatar/avatar-1.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Nur Alpiana"
                            />
                            <img
                              alt="image"
                              src="../assets/img/avatar/avatar-3.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Hariono Yusup"
                            />
                            <img
                              alt="image"
                              src="../assets/img/avatar/avatar-4.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Bagus Dwi Cahya"
                            />
                          </td>
                          <td>2018-04-10</td>
                          <td>
                            <div className="badge badge-info">Todo</div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                className="custom-control-input"
                                id="checkbox-3"
                              />
                              <label
                                for="checkbox-3"
                                className="custom-control-label"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>Backup database</td>
                          <td className="align-middle">
                            <div
                              className="progress"
                              data-height="4"
                              data-toggle="tooltip"
                              title="70%"
                            >
                              <div
                                className="progress-bar bg-warning"
                                data-width="70"
                              ></div>
                            </div>
                          </td>
                          <td>
                            <img
                              alt="image"
                              src="../assets/img/avatar/avatar-1.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Rizal Fakhri"
                            />
                            <img
                              alt="image"
                              src="../assets/img/avatar/avatar-2.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Hasan Basri"
                            />
                          </td>
                          <td>2018-01-29</td>
                          <td>
                            <div className="badge badge-warning">In Progress</div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                className="custom-control-input"
                                id="checkbox-4"
                              />
                              <label
                                for="checkbox-4"
                                className="custom-control-label"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>Input data</td>
                          <td className="align-middle">
                            <div
                              className="progress"
                              data-height="4"
                              data-toggle="tooltip"
                              title="100%"
                            >
                              <div
                                className="progress-bar bg-success"
                                data-width="100"
                              ></div>
                            </div>
                          </td>
                          <td>
                            <img
                              alt="image"
                              src="../assets/img/avatar/avatar-2.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Rizal Fakhri"
                            />
                            <img
                              alt="image"
                              src="../assets/img/avatar/avatar-5.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Isnap Kiswandi"
                            />
                            <img
                              alt="image"
                              src="../assets/img/avatar/avatar-4.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Yudi Nawawi"
                            />
                            <img
                              alt="image"
                              src="../assets/img/avatar/avatar-1.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Khaerul Anwar"
                            />
                          </td>
                          <td>2018-01-16</td>
                          <td>
                            <div className="badge badge-success">Completed</div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default OrderItemdetails;
