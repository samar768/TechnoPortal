import React from 'react'
import { connect } from 'react-redux'

export const ExpenseHeaderControl = (props) => {
    return (
        // <div className="main-content">
        //     <div className="form-group">
        //         <div className="section-body">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Expense List</h4>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-sm">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Expense</th>
                                                        <th scope="col">Per</th>
                                                        <th scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Gross</th>
                                                        <td>0</td>
                                                        <td>5000</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Discount</th>
                                                        <td>10</td>
                                                        <td>500</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Net Amount</th>
                                                        <td>0</td>
                                                        <td>4500</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {/* <div className="section-title">Dark</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        //         </div>
        //     </div>
        // </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseHeaderControl)
