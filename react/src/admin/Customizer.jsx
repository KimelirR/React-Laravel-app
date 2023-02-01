import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage1 from '../assets/images/backgrounds/01.jpg';
import backgroundImage2 from '../assets/images/backgrounds/02.jpg';
import backgroundImage4 from '../assets/images/backgrounds/04.jpg';
import backgroundImage5 from '../assets/images/backgrounds/05.jpg';

const Customizer = () => {
  return (
        <div className="customizer border-left-blue-grey border-left-lighten-4 d-none d-xl-block"><Link className="customizer-close" to="#"><i className="ft-x font-medium-3" /></Link><Link className="customizer-toggle bg-primary box-shadow-3" to="#" id="customizer-toggle-setting"><i className="ft-settings font-medium-3 spinner white" /></Link>
        <div className="customizer-content p-2 ps">
            <h5 className="mt-1 mb-1 text-bold-500">Navbar Color Options</h5>
            <div className="navbar-color-options clearfix">
                <div className="gradient-colors mb-1 clearfix">
                    <div className="bg-gradient-x-purple-blue navbar-color-option active" data-bg="bg-gradient-x-purple-blue" title="bg-gradient-x-purple-blue" />
                    <div className="bg-gradient-x-purple-red navbar-color-option" data-bg="bg-gradient-x-purple-red" title="bg-gradient-x-purple-red" />
                    <div className="bg-gradient-x-blue-green navbar-color-option" data-bg="bg-gradient-x-blue-green" title="bg-gradient-x-blue-green" />
                    <div className="bg-gradient-x-orange-yellow navbar-color-option" data-bg="bg-gradient-x-orange-yellow" title="bg-gradient-x-orange-yellow" />
                    <div className="bg-gradient-x-blue-cyan navbar-color-option" data-bg="bg-gradient-x-blue-cyan" title="bg-gradient-x-blue-cyan" />
                    <div className="bg-gradient-x-red-pink navbar-color-option" data-bg="bg-gradient-x-red-pink" title="bg-gradient-x-red-pink" />
                </div>
                <div className="solid-colors clearfix">
                    <div className="bg-primary navbar-color-option" data-bg="bg-primary" title="primary" />
                    <div className="bg-success navbar-color-option" data-bg="bg-success" title="success" />
                    <div className="bg-info navbar-color-option" data-bg="bg-info" title="info" />
                    <div className="bg-warning navbar-color-option" data-bg="bg-warning" title="warning" />
                    <div className="bg-danger navbar-color-option" data-bg="bg-danger" title="danger" />
                    <div className="bg-blue navbar-color-option" data-bg="bg-blue" title="blue" />
                </div>
            </div>

            <hr />

            <h5 className="my-1 text-bold-500">Layout Options</h5>
            <div className="row">
                <div className="col-12">
                    <div className="d-inline-block custom-control custom-radio mb-1 col-4">
                        <input type="radio" className="custom-control-input bg-primary" name="layouts" id="default-layout" checked={true} />
                        <label className="custom-control-label" htmlFor="default-layout">Default</label>
                    </div>
                    <div className="d-inline-block custom-control custom-radio mb-1 col-4">
                        <input type="radio" className="custom-control-input bg-primary" name="layouts" id="fixed-layout" />
                        <label className="custom-control-label" htmlFor="fixed-layout">Fixed</label>
                    </div>
                    <div className="d-inline-block custom-control custom-radio mb-1 col-4">
                        <input type="radio" className="custom-control-input bg-primary" name="layouts" id="static-layout" />
                        <label className="custom-control-label" htmlFor="static-layout">Static</label>
                    </div>
                    <div className="d-inline-block custom-control custom-radio mb-1">
                        <input type="radio" className="custom-control-input bg-primary" name="layouts" id="boxed-layout" />
                        <label className="custom-control-label" htmlFor="boxed-layout">Boxed</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-inline-block custom-control custom-checkbox mb-1">
                        <input type="checkbox" className="custom-control-input bg-primary" name="right-side-icons" id="right-side-icons" />
                        <label className="custom-control-label" htmlFor="right-side-icons">Right Side Icons</label>
                    </div>
                </div>
            </div>

            <hr />

            <h5 className="mt-1 mb-1 text-bold-500">Sidebar menu Background</h5>
            { /* <div className="sidebar-color-options clearfix">
             		<div class="bg-black sidebar-color-option" data-sidebar="menu-dark" title="black"></div>
             		<div class="bg-white sidebar-color-option" data-sidebar="menu-light" title="white"></div>
             	</div> */ }
            <div className="row sidebar-color-options ml-0">
                <label htmlFor="sidebar-color-option" className="card-title font-medium-2 mr-2">White Mode</label>
                <div className="text-center mb-1">
                    <input type="checkbox" id="sidebar-color-option" className="switchery" data-size="xs" data-switchery="true" style={{ display: "none" }} /><span className="switchery switchery-xsmall switchery-default" style={{ boxShadow: "0px 0px 0px 0px inset", transition: "border 0.4s ease 0s, box-shadow 0.4s ease 0s" }}><small style={{ left: 0, transition: "background-color 0.4s ease 0s, left 0.2s ease 0s" }} /></span>
                </div>
                <label htmlFor="sidebar-color-option" className="card-title font-medium-2 ml-2">Dark Mode</label>
            </div>

            <hr />

            <label htmlFor="collapsed-sidebar" className="font-medium-2">Menu Collapse</label>
            <div className="float-right">
                <input type="checkbox" id="collapsed-sidebar" className="switchery" data-size="xs" data-switchery="true" style={{ display: "none" }} /><span className="switchery switchery-xsmall switchery-default" style={{ boxShadow: "0px 0px 0px 0px inset", transition: "border 0.4s ease 0s, box-shadow 0.4s ease 0s" }}><small style={{ left: 0, transition: "background-color 0.4s ease 0s, left 0.2s ease 0s" }} /></span>
            </div>

            <hr />

            { /*Sidebar Background Image Starts*/ }
            <h5 className="mt-1 mb-1 text-bold-500">Sidebar Background Image</h5>
            <div className="cz-bg-image row">
                <div className="col mb-3">
                    <img src={backgroundImage4} className="rounded sidiebar-bg-img" width="50" height="100" alt="background image" />
                </div>
                <div className="col mb-3">
                    <img src={backgroundImage1} className="rounded sidiebar-bg-img" width="50" height="100" alt="background image" />
                </div>
                <div className="col mb-3">
                    <img src={backgroundImage2} className="rounded sidiebar-bg-img" width="50" height="100" alt="background image" />
                </div>
                <div className="col mb-3">
                    <img src={backgroundImage5} className="rounded sidiebar-bg-img" width="50" height="100" alt="background image" />
                </div>
            </div>
            { /*Sidebar Background Image Ends*/ }

            { /*Sidebar BG Image Toggle Starts*/ }
            <div className="sidebar-image-visibility">
                <div className="row ml-0">
                    <label htmlFor="toggle-sidebar-bg-img" className="card-title font-medium-2 mr-2">Hide Image</label>
                    <div className="text-center mb-1">
                        <input type="checkbox" id="toggle-sidebar-bg-img" className="switchery" data-size="xs" checked={true} data-switchery="true" style={{ display: "none" }} /><span className="switchery switchery-xsmall switchery-default" style={{ backgroundColor: "rgb(250, 98, 107)", borderColor: "rgb(250, 98, 107)", boxShadow: "rgb(250, 98, 107) 0px 0px 0px 0px inset", transition: "border 0.4s ease 0s, box-shadow 0.4s ease 0s, background-color 1.2s ease 0s" }}><small style={{ left: 12, backgroundColor: "rgb(255, 255, 255)", transition: "background-color 0.4s ease 0s, left 0.2s ease 0s" }} /></span>
                    </div>
                    <label htmlFor="toggle-sidebar-bg-img" className="card-title font-medium-2 ml-2">Show Image</label>
                </div>
            </div>
            { /*Sidebar BG Image Toggle Ends*/ }

            <hr />

            <div className="row mb-2">
                { /* <div className="col">
                 			<Link to="https://themeselection.com/products/chameleon-admin-modern-bootstrap-webapp-dashboard-html-template-ui-kit/" class="btn btn-danger btn-block box-shadow-1" target="_blank">Buy Now</Link>
                 		</div> */ }
                <div className="col">
                    <Link to="https://themeselection.com/" className="btn btn-primary btn-block box-shadow-1" target="_blank">More
                        Themes</Link>
                </div>
            </div>
            <div className="text-center">
                <button id="twitter" className="btn btn-social-icon btn-twitter sharrre mr-1"><i className="la la-twitter" /></button>
                <button id="facebook" className="btn btn-social-icon btn-facebook sharrre mr-1"><i className="la la-facebook" /></button>
                <button id="google" className="btn btn-social-icon btn-google sharrre"><i className="la la-google" /></button>
            </div>
            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                <div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} />
            </div>
            <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                <div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 0 }} />
            </div>
        </div>
    </div>
  )
}

export default Customizer
