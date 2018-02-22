import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import { Redirect, Link } from 'react-router-dom'
import { AppBar } from 'material-ui'
import { Container, Row, Col, } from 'react-grid-system'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-upward'
import SideNavigation from '../../components/sideNavigation';
import Header from '../../components/topNavigation'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import ActionInfo from 'material-ui/svg-icons/navigation/arrow-drop-up'
import './styles.scss'
import Drawer from 'material-ui/Drawer';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  border:'1px solid #000',
};

export default class TopNavigation extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {open: false};
  }
  componentWillMount(){
    localStorage.removeItem('scrollTo')
  }
  handleToggle = () => this.setState({open: !this.state.open});

  render() {  
    let user = JSON.parse(window.localStorage.getItem("user"))
    const style = {
      margin: 12,
    };
    let role = user.account
      const currentLocation = location.pathname
    return (
    <div>
        <SideNavigation/>
        {/* Aside Ends*/}
        {/*Main Content Start */}
        <section className="content">
          {/* Header */}
          <header className="top-head container-fluid">
            <button type="button" className="navbar-toggle pull-left">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {/* Search */}
            <form role="search" className="navbar-left app-search pull-left hidden-xs">
              <input type="text" placeholder="Search..." className="form-control" />
              <a href><i className="fa fa-search" /></a>
            </form>
            {/* Left navbar */}
            <nav className=" navbar-default" role="navigation">
              <ul className="nav navbar-nav hidden-xs">
                <li className="dropdown">
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">English <span className="caret" /></a>
                  <ul role="menu" className="dropdown-menu">
                    <li><a href="#">German</a></li>
                    <li><a href="#">French</a></li>
                    <li><a href="#">Italian</a></li>
                    <li><a href="#">Spanish</a></li>
                  </ul>
                </li>
                <li><a href="#">Files</a></li>
              </ul>
              {/* Right navbar */}
              <ul className="nav navbar-nav navbar-right top-menu top-right-menu">  
                {/* mesages */}  
                <li className="dropdown">
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                    <i className="fa fa-envelope-o " />
                    <span className="badge badge-sm up bg-purple count">4</span>
                  </a>
                  <ul className="dropdown-menu extended fadeInUp animated nicescroll" tabIndex={5001}>
                    <li>
                      <p>Messages</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="pull-left"><img src="img/avatar-2.jpg" className="img-circle thumb-sm m-r-15" alt="img" /></span>
                        <span className="block"><strong>John smith</strong></span>
                        <span className="media-body block">New tasks needs to be done<br /><small className="text-muted">10 seconds ago</small></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="pull-left"><img src="img/avatar-3.jpg" className="img-circle thumb-sm m-r-15" alt="img" /></span>
                        <span className="block"><strong>John smith</strong></span>
                        <span className="media-body block">New tasks needs to be done<br /><small className="text-muted">3 minutes ago</small></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="pull-left"><img src="img/avatar-4.jpg" className="img-circle thumb-sm m-r-15" alt="img" /></span>
                        <span className="block"><strong>John smith</strong></span>
                        <span className="media-body block">New tasks needs to be done<br /><small className="text-muted">10 minutes ago</small></span>
                      </a>
                    </li>
                    <li>
                      <p><a href="inbox.html" className="text-right">See all Messages</a></p>
                    </li>
                  </ul>
                </li>
                {/* /messages */}
                {/* Notification */}
                <li className="dropdown">
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                    <i className="fa fa-bell-o" />
                    <span className="badge badge-sm up bg-pink count">3</span>
                  </a>
                  <ul className="dropdown-menu extended fadeInUp animated nicescroll" tabIndex={5002}>
                    <li className="noti-header">
                      <p>Notifications</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="pull-left"><i className="fa fa-user-plus fa-2x text-info" /></span>
                        <span>New user registered<br /><small className="text-muted">5 minutes ago</small></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="pull-left"><i className="fa fa-diamond fa-2x text-primary" /></span>
                        <span>Use animate.css<br /><small className="text-muted">5 minutes ago</small></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="pull-left"><i className="fa fa-bell-o fa-2x text-danger" /></span>
                        <span>Send project demo files to client<br /><small className="text-muted">1 hour ago</small></span>
                      </a>
                    </li>
                    <li>
                      <p><a href="#" className="text-right">See all notifications</a></p>
                    </li>
                  </ul>
                </li>
                {/* /Notification */}
                {/* user login dropdown start*/}
                <li className="dropdown text-center">
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                    <img alt src="img/avatar-2.jpg" className="img-circle profile-img thumb-sm" />
                    <span className="username">John Deo </span> <span className="caret" />
                  </a>
                  <ul className="dropdown-menu pro-menu fadeInUp animated" tabIndex={5003} style={{overflow: 'hidden', outline: 'none'}}>
                    <li><a href="profile.html"><i className="fa fa-briefcase" />Profile</a></li>
                    <li><a href="#"><i className="fa fa-cog" /> Settings</a></li>
                    <li><a href="#"><i className="fa fa-bell" /> Friends <span className="label label-info pull-right mail-info">5</span></a></li>
                    <li><a href="#"><i className="fa fa-sign-out" /> Log Out</a></li>
                  </ul>
                </li>
                {/* user login dropdown end */}       
              </ul>
              {/* End right navbar */}
            </nav>
          </header>
          {/* Header Ends */}
          {/* Page Content Start */}
          {/* ================== */}
          <div className="wraper container-fluid">
            <div className="page-title"> 
              <h3 className="title">Welcome !</h3> 
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="widget-panel widget-style-2 white-bg">
                  <i className="ion-eye text-pink" /> 
                  <h2 className="m-0 counter">50</h2>
                  <div>Daily Visits</div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget-panel widget-style-2 white-bg">
                  <i className="ion-wifi text-purple" /> 
                  <h2 className="m-0 counter">8956</h2>
                  <div>Sales</div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget-panel widget-style-2 white-bg">
                  <i className="ion-ios7-pricetag text-info" /> 
                  <h2 className="m-0 counter">1268</h2>
                  <div>New Orders</div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget-panel widget-style-2 white-bg">
                  <i className="ion-android-contacts text-success" /> 
                  <h2 className="m-0 counter">145</h2>
                  <div>New Users</div>
                </div>
              </div>
            </div> {/* end row */}
            <div className="row">
              <div className="col-lg-6">
                <div className="portlet">{/* /primary heading */}
                  <div className="portlet-heading">
                    <h3 className="portlet-title text-dark text-uppercase">
                      Yearly Sales Report
                    </h3>
                    <div className="portlet-widgets">
                      <a href="javascript:;" data-toggle="reload"><i className="ion-refresh" /></a>
                      <span className="divider" />
                      <a data-toggle="collapse" data-parent="#accordion1" href="#portlet2"><i className="ion-minus-round" /></a>
                      <span className="divider" />
                      <a href="#" data-toggle="remove"><i className="ion-close-round" /></a>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div id="portlet2" className="panel-collapse collapse in">
                    <div className="portlet-body">
                      <div id="morris-area-example" style={{height: 320}} />
                      <div className="row text-center m-t-30 m-b-30">
                        <div className="col-sm-3 col-xs-6">
                          <h4>$ 126</h4>
                          <small className="text-muted"> Today's Sales</small>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                          <h4>$ 967</h4>
                          <small className="text-muted">This Week's Sales</small>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                          <h4>$ 4500</h4>
                          <small className="text-muted">This Month's Sales</small>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                          <h4>$ 87,000</h4>
                          <small className="text-muted">This Year's Sales</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* /Portlet */}
              </div>
              <div className="col-lg-6">
                <div className="portlet">{/* /primary heading */}
                  <div className="portlet-heading">
                    <h3 className="portlet-title text-dark text-uppercase">
                      Weekly Sales Report
                    </h3>
                    <div className="portlet-widgets">
                      <a href="javascript:;" data-toggle="reload"><i className="ion-refresh" /></a>
                      <span className="divider" />
                      <a data-toggle="collapse" data-parent="#accordion1" href="#portlet1"><i className="ion-minus-round" /></a>
                      <span className="divider" />
                      <a href="#" data-toggle="remove"><i className="ion-close-round" /></a>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div id="portlet1" className="panel-collapse collapse in">
                    <div className="portlet-body">
                      <div id="morris-bar-example" style={{height: 320}} />
                      <div className="row text-center m-t-30 m-b-30">
                        <div className="col-sm-3 col-xs-6">
                          <h4>$ 126</h4>
                          <small className="text-muted"> Today's Sales</small>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                          <h4>$ 967</h4>
                          <small className="text-muted">This Week's Sales</small>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                          <h4>$ 4500</h4>
                          <small className="text-muted">This Month's Sales</small>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                          <h4>$ 87,000</h4>
                          <small className="text-muted">This Year's Sales</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* /Portlet */}
              </div> {/* end col */}
            </div> {/* End row */}
            <div className="row">
              <div className="col-lg-4">
                {/* TODO */}
                <div className="portlet" id="todo-container">{/* /primary heading */}
                  <div className="portlet-heading">
                    <h3 className="portlet-title text-dark text-uppercase">
                      Todo
                    </h3>
                    <div className="portlet-widgets">
                      <a href="javascript:;" data-toggle="reload"><i className="ion-refresh" /></a>
                      <span className="divider" />
                      <a data-toggle="collapse" data-parent="#accordion1" href="#portlet-5" className aria-expanded="true"><i className="ion-minus-round" /></a>
                      <span className="divider" />
                      <a href="#" data-toggle="remove"><i className="ion-close-round" /></a>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div id="portlet-5" className="panel-collapse collapse in">
                    <div className="portlet-body todoapp">
                      <div className="row">
                        <div className="col-sm-8">
                          <h4 id="todo-message"><span id="todo-remaining" /> of <span id="todo-total" /> remaining</h4> 
                        </div>
                        <div className="col-sm-4">
                          <a href className="pull-right btn btn-primary btn-sm" id="btn-archive">Archive</a>
                        </div>
                      </div>
                      <ul className="list-group no-margn nicescroll todo-list" style={{maxHeight: 279}} id="todo-list" />
                      <form name="todo-form" id="todo-form" role="form" className="m-t-20">
                        <div className="row">
                          <div className="col-sm-9 todo-inputbar">
                            <input type="text" id="todo-input-text" name="todo-input-text" className="form-control" placeholder="Add new todo" />
                          </div>
                          <div className="col-sm-3 todo-send">
                            <button className="btn-primary btn-block btn" type="button" id="todo-btn-submit">Add</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> {/* end col */}
              <div className="col-lg-8">
                <div className="portlet">{/* /primary heading */}
                  <div className="portlet-heading">
                    <h3 className="portlet-title text-dark text-uppercase">
                      Projects
                    </h3>
                    <div className="portlet-widgets">
                      <a href="javascript:;" data-toggle="reload"><i className="ion-refresh" /></a>
                      <span className="divider" />
                      <a data-toggle="collapse" data-parent="#accordion1" href="#portlet7"><i className="ion-minus-round" /></a>
                      <span className="divider" />
                      <a href="#" data-toggle="remove"><i className="ion-close-round" /></a>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div id="portlet7" className="panel-collapse collapse in">
                    <div className="portlet-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Project Name</th>
                              <th>Start Date</th>
                              <th>Due Date</th>
                              <th>Status</th>
                              <th>Assign</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Velonic Admin v1</td>
                              <td>01/01/2015</td>
                              <td>26/04/2015</td>
                              <td><span className="label label-info">Released</span></td>
                              <td>Coderthemes</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Velonic Frontend v1</td>
                              <td>01/01/2015</td>
                              <td>26/04/2015</td>
                              <td><span className="label label-success">Released</span></td>
                              <td>Coderthemes</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Velonic Admin v1.1</td>
                              <td>01/05/2015</td>
                              <td>10/05/2015</td>
                              <td><span className="label label-pink">Pending</span></td>
                              <td>Coderthemes</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Velonic Frontend v1.1</td>
                              <td>01/01/2015</td>
                              <td>31/05/2015</td>
                              <td><span className="label label-purple">Work in Progress</span></td>
                              <td>Coderthemes</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Velonic Admin v1.3</td>
                              <td>01/01/2015</td>
                              <td>31/05/2015</td>
                              <td><span className="label label-warning">Coming soon</span></td>
                              <td>Coderthemes</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Velonic Admin v1.3</td>
                              <td>01/01/2015</td>
                              <td>31/05/2015</td>
                              <td><span className="label label-primary">Coming soon</span></td>
                              <td>Coderthemes</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Velonic Admin v1.3</td>
                              <td>01/01/2015</td>
                              <td>31/05/2015</td>
                              <td><span className="label label-info">Cool</span></td>
                              <td>Coderthemes</td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>Velonic Admin v1.3</td>
                              <td>01/01/2015</td>
                              <td>31/05/2015</td>
                              <td><span className="label label-warning">Coming soon</span></td>
                              <td>Coderthemes</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* end col */}
            </div> {/* End row */}
          </div>
          {/* Page Content Ends */}
          {/* ================== */}
          {/* Footer Start */}
          <footer className="footer">
            2015 © Velonic.
          </footer>
          {/* Footer Ends */}
        </section>
      </div>    
    );
  }
} 