import React from 'react';
import { Link } from 'react-router-dom';
import adminLogo from '../assets/images/logo/leave2-logo.png';
import background2 from '../assets/images/backgrounds/02.jpg';

const MainMenu = () => {
  return (
    <div className="main-menu menu-fixed menu-light menu-accordion    menu-shadow " data-scroll-to-active="true" data-img={background2}>
    <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
            <li className="nav-item mr-auto"><Link className="navbar-brand" to={'/login'}><img className="brand-logo" alt="Chameleon admin logo" src={adminLogo} />
                    <h3 className="brand-text">Chameleon</h3>
                </Link></li>
            <li className="nav-item d-md-none"><Link className="nav-link close-navbar"><i className="ft-x" /></Link></li>
        </ul>
    </div>
    <div className="navigation-background" style={{ backgroundImage: `url(${background2})` }} />
    <div className="main-menu-content ps ps--active-y" style={{ height: 566 }}>
        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            {/* <li className="nav-item has-sub open"><Link to="index.html"><i className="ft-home" /><span className="menu-title" data-i18n="">Dashboard</span><span className="badge badge badge-info badge-pill float-right mr-2">3</span></Link>
                <ul className="menu-content">
                    <li><Link className="menu-item" to="dashboard-ecommerce.html">eCommerce</Link>
                    </li>
                    <li className="active"><Link className="menu-item" to="dashboard-analytics.html">Analytics</Link>
                    </li>
                </ul>
            </li> */}
            {/* <li className="nav-item has-sub"><Link to="#"><i className="ft-layers" /><span className="menu-title" data-i18n="">Apps</span></Link>
                <ul className="menu-content">
                    <li><Link className="menu-item" to="email-application.html">Email Application</Link>
                    </li>
                    <li><Link className="menu-item" to="chat-application.html">Chat Application</Link>
                    </li>
                    <li><Link className="menu-item" to="full-calender.html">Full Calendar</Link>
                    </li>
                    <li><Link className="menu-item" to="project-summary.html">Project Summary</Link>
                    </li>
                    <li><Link className="menu-item" to="invoice-template.html">Invoice</Link>
                    </li>
                    <li className="has-sub"><Link className="menu-item" to="#">Timelines</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="timeline-center.html">Timelines Center</Link>
                            </li>
                            <li><Link className="menu-item" to="timeline-horizontal.html">Timelines Horizontal</Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="menu-item" to="user-profile.html">Users Profile</Link>
                    </li>
                    <li><Link className="menu-item" to="users-contacts.html">Contact List</Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item has-sub"><Link to="#"><i className="ft-monitor" /><span className="menu-title" data-i18n="">Templates</span></Link>
                <ul className="menu-content">
                    <li className="has-sub"><Link className="menu-item" to="#">Vertical</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="../vertical-menu-template">Classic Menu</Link>
                            </li>
                            <li><Link className="menu-item" to="../vertical-modern-menu-template">Modern Menu</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub"><Link className="menu-item" to="#">Horizontal</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="../horizontal-menu-template-nav">Full Width</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item has-sub"><Link to="#"><i className="ft-layout" /><span className="menu-title" data-i18n="">Layouts</span><span className="badge badge badge-pill badge-danger float-right mr-2">5</span></Link>
                <ul className="menu-content">
                    <li className="has-sub"><Link className="menu-item" to="#">Content Sidebar</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="layout-content-detached-left-sidebar.html">Left
                                    sidebar</Link>
                            </li>
                            <li><Link className="menu-item" to="layout-content-detached-left-sticky-sidebar.html">Sticky
                                    left sidebar</Link>
                            </li>
                            <li><Link className="menu-item" to="layout-content-detached-right-sidebar.html">Right
                                    sidebar</Link>
                            </li>
                            <li><Link className="menu-item" to="layout-content-detached-right-sticky-sidebar.html">Sticky
                                    right
                                    sidebar</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navigation-divider" />
                    <li><Link className="menu-item" to="navbar-hide-on-scroll-top.html">Hide on Scroll Top</Link>
                    </li>
                    <li><Link className="menu-item" to="vertical-nav-compact-menu.html">Compact navigation</Link>
                    </li>
                    <li><Link className="menu-item" to="layout-fixed-navbar.html">Fixed navbar</Link>
                    </li>
                    <li><Link className="menu-item" to="layout-fixed-navigation.html">Fixed navigation</Link>
                    </li>
                    <li><Link className="menu-item" to="layout-fixed-navbar-navigation.html">Fixed navbar &
                            navigation</Link>
                    </li>
                    <li><Link className="menu-item" to="layout-fixed-navbar-footer.html">Fixed navbar & footer</Link>
                    </li>
                    <li className="navigation-divider" />
                    <li><Link className="menu-item" to="layout-fixed.html">Fixed layout</Link>
                    </li>
                    <li><Link className="menu-item" to="layout-boxed.html">Boxed layout</Link>
                    </li>
                    <li><Link className="menu-item" to="layout-static.html">Static layout</Link>
                    </li>
                    <li className="navigation-divider" />
                    <li><Link className="menu-item" to="layout-light.html">Navigation light</Link>
                    </li>
                    <li><Link className="menu-item" to="layout-dark.html">Navigation Dark</Link>
                    </li>
                    <li><Link className="menu-item" to="vertical-nav-flipped.html">Flipped Navigation</Link>
                    </li>
                </ul>
            </li> */}
            {/* <li className="nav-item has-sub"><Link to="#"><i className="ft-zap" /><span className="menu-title" data-i18n="">Starter
                        kit</span></Link>
                <ul className="menu-content">
                    <li className="has-sub"><Link className="menu-item" to="#">Content sidebar</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-content-detached-left-sidebar.html">Left
                                    sidebar</Link>
                            </li>
                            <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-content-detached-left-sticky-sidebar.html">Sticky
                                    left sidebar</Link>
                            </li>
                            <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-content-detached-right-sidebar.html">Right
                                    sidebar</Link>
                            </li>
                            <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-content-detached-right-sticky-sidebar.html">Sticky
                                    right sidebar</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navigation-divider" />
                    <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-fixed-navbar.html">Fixed
                            navbar</Link>
                    </li>
                    <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-fixed-navigation.html">Fixed
                            navigation</Link>
                    </li>
                    <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-fixed-navbar-navigation.html">Fixed
                            navbar
                            & navigation</Link>
                    </li>
                    <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-fixed-navbar-footer.html">Fixed
                            navbar
                            & footer</Link>
                    </li>
                    <li className="navigation-divider" />
                    <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-fixed.html">Fixed
                            layout</Link>
                    </li>
                    <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-boxed.html">Boxed
                            layout</Link>
                    </li>
                    <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-static.html">Static
                            layout</Link>
                    </li>
                    <li className="navigation-divider" />
                    <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-light.html">Navigation
                            Light</Link>
                    </li>
                    <li><Link className="menu-item" to="../../../starter-kit/ltr/vertical-menu-template/layout-dark.html">Navigation
                            Dark</Link>
                    </li>
                </ul>
            </li> */}
            {/* <li className="nav-item has-sub"><Link to="#"><i className="ft-aperture" /><span className="menu-title" data-i18n="">User
                        Interface</span></Link>
                <ul className="menu-content">
                    <li className="has-sub"><Link className="menu-item" to="#">Content</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="content-grid.html">Grid</Link>
                            </li>
                            <li><Link className="menu-item" to="content-typography.html">Typography</Link>
                            </li>
                            <li><Link className="menu-item" to="content-text-utilities.html">Text utilities</Link>
                            </li>
                            <li><Link className="menu-item" to="content-syntax-highlighter.html">Syntax highlighter</Link>
                            </li>
                            <li><Link className="menu-item" to="content-helper-classes.html">Helper classes</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub"><Link className="menu-item" to="#">Color Palette</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="color-palette-primary.html">Primary palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-danger.html">Danger palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-success.html">Success palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-warning.html">Warning palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-info.html">Info palette</Link>
                            </li>
                            <li className="navigation-divider" />
                            <li><Link className="menu-item" to="color-palette-red.html">Red palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-pink.html">Pink palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-purple.html">Purple palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-blue.html">Blue palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-cyan.html">Cyan palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-teal.html">Teal palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-yellow.html">Yellow palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-amber.html">Amber palette</Link>
                            </li>
                            <li><Link className="menu-item" to="color-palette-blue-grey.html">Blue Grey palette</Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="menu-item" to="card-bootstrap.html">Bootstrap Cards</Link>
                    </li>
                    <li><Link className="menu-item" to="card-advanced.html">Advanced Cards</Link>
                    </li>
                    <li className="has-sub"><Link className="menu-item" to="#">Icons</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="icons-feather.html">Feather</Link>
                            </li>
                            <li><Link className="menu-item" to="icons-line-awesome.html">Line Awesome</Link>
                            </li>
                            <li><Link className="menu-item" to="icons-simple-line-icons.html">Simple Line Icons</Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="menu-item" to="animation.html">Animation</Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item has-sub"><Link to="#"><i className="ft-box" /><span className="menu-title" data-i18n="">Components</span></Link>
                <ul className="menu-content">
                    <li className="has-sub"><Link className="menu-item" to="#">Bootstrap</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="component-alerts.html">Alerts</Link>
                            </li>
                            <li><Link className="menu-item" to="component-buttons.html">Buttons</Link>
                            </li>
                            <li><Link className="menu-item" to="component-carousel.html">Carousel</Link>
                            </li>
                            <li><Link className="menu-item" to="component-collapse.html">Collapse</Link>
                            </li>
                            <li><Link className="menu-item" to="component-dropdowns.html">Dropdowns</Link>
                            </li>
                            <li><Link className="menu-item" to="component-list-group.html">List Group</Link>
                            </li>
                            <li><Link className="menu-item" to="component-modals.html">Modals</Link>
                            </li>
                            <li><Link className="menu-item" to="component-pagination.html">Pagination</Link>
                            </li>
                            <li><Link className="menu-item" to="component-navs-component.html">Navs</Link>
                            </li>
                            <li><Link className="menu-item" to="component-tabs-component.html">Tabs</Link>
                            </li>
                            <li><Link className="menu-item" to="component-pills-component.html">Pills</Link>
                            </li>
                            <li><Link className="menu-item" to="component-tooltips.html">Tooltips</Link>
                            </li>
                            <li><Link className="menu-item" to="component-popovers.html">Popovers</Link>
                            </li>
                            <li><Link className="menu-item" to="component-badges.html">Badges</Link>
                            </li>
                            <li><Link className="menu-item" to="component-pill-badges.html">Pill Badges</Link>
                            </li>
                            <li><Link className="menu-item" to="component-progress.html">Progress</Link>
                            </li>
                            <li><Link className="menu-item" to="component-media-objects.html">Media Objects</Link>
                            </li>
                            <li><Link className="menu-item" to="component-spinner.html">Spinner</Link>
                            </li>
                            <li><Link className="menu-item" to="component-toast.html">Toast</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub"><Link className="menu-item" to="#">Extra</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="ex-component-sweet-alerts.html">Sweet Alerts</Link>
                            </li>
                            <li><Link className="menu-item" to="ex-component-toastr.html">Toastr</Link>
                            </li>
                            <li><Link className="menu-item" to="ex-component-ratings.html">Ratings</Link>
                            </li>
                            <li><Link className="menu-item" to="ex-component-tour.html">Tour</Link>
                            </li>
                            <li className="has-sub"><Link className="menu-item" to="#">Editors</Link>
                                <ul className="menu-content">
                                    <li><Link className="menu-item" to="editor-ckeditor.html">CKEditor</Link>
                                    </li>
                                    <li><Link className="menu-item" to="editor-tinymce.html">TinyMCE</Link>
                                    </li>
                                </ul>
                            </li>
                            <li><Link className="menu-item" to="pickers-date-&-time-picker.html">Date & Time
                                    Picker</Link>
                            </li>
                            <li><Link className="menu-item" to="block-ui.html">Block UI</Link>
                            </li>
                            <li><Link className="menu-item" to="file-uploader-dropzone.html">File Uploader</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item has-sub"><Link to="#"><i className="ft-edit" /><span className="menu-title" data-i18n="">Forms</span></Link>
                <ul className="menu-content">
                    <li className="has-sub"><Link className="menu-item" to="#">Form Elements</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="form-inputs.html">Form Inputs</Link>
                            </li>
                            <li><Link className="menu-item" to="form-switch.html">Switch</Link>
                            </li>
                            <li><Link className="menu-item" to="form-select2.html">Select2</Link>
                            </li>
                            <li><Link className="menu-item" to="form-checkboxes-radios.html">Checkboxes & Radios</Link>
                            </li>
                            <li><Link className="menu-item" to="form-tags-input.html">Tags Input</Link>
                            </li>
                            <li><Link className="menu-item" to="form-validation.html">Validation</Link>
                            </li>
                            <li><Link className="menu-item" to="form-extended-inputs.html">Extended Inputs</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub"><Link className="menu-item" to="#">Form Layouts</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="form-layout-basic.html">Basic Forms</Link>
                            </li>
                            <li><Link className="menu-item" to="form-layout-horizontal.html">Horizontal Forms</Link>
                            </li>
                            <li><Link className="menu-item" to="form-layout-hidden-labels.html">Hidden Labels</Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="menu-item" to="form-wizard.html">Form Wizard</Link>
                    </li>
                    <li><Link className="menu-item" to="form-repeater.html">Form Repeater</Link>
                    </li>
                </ul>
            </li> */}
            <li className="nav-item has-sub"><Link to="#"><i className="ft-grid" /><span className="menu-title" data-i18n="">Tables</span></Link>
                <ul className="menu-content">
                    <li><Link className="menu-item" to={'/users'}>Users</Link>
                    </li>
                    {/* <li className="has-sub"><Link className="menu-item" to="#">DataTables</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="dt-basic-initialization.html">Basic Initialisation</Link>
                            </li>
                            <li><Link className="menu-item" to="dt-styling.html">Styling</Link>
                            </li>
                            <li><Link className="menu-item" to="dt-data-sources.html">Data Sources</Link>
                            </li>
                            <li><Link className="menu-item" to="dt-advanced-initialization.html">Advanced
                                    initialisation</Link>
                            </li>
                            <li><Link className="menu-item" to="dt-api.html">API</Link>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </li>
            {/* <li className="nav-item has-sub"><Link to="#"><i className="ft-bar-chart-2" /><span className="menu-title" data-i18n="">Charts</span></Link>
                <ul className="menu-content">
                    <li><Link className="menu-item" to="chartist-charts.html">Chartist</Link>
                    </li>
                    <li><Link className="menu-item" to="chartjs-charts.html">Chartjs</Link>
                    </li>
                    <li className="has-sub"><Link className="menu-item" to="#">Maps</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="google-maps.html">Google Maps</Link>
                            </li>
                            <li><Link className="menu-item" to="jvector-maps.html">jVector Map</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item has-sub"><Link to="#"><i className="ft-sidebar" /><span className="menu-title" data-i18n="">Pages</span></Link>
                <ul className="menu-content">
                    <li><Link className="menu-item" to="gallery-grid.html">Gallery</Link>
                    </li>
                    <li><Link className="menu-item" to="search.html">Search</Link>
                    </li>
                    <li className="has-sub"><Link className="menu-item" to="#">Authentication</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="login.html">Login</Link>
                            </li>
                            <li><Link className="menu-item" to="register.html">Register</Link>
                            </li>
                            <li><Link className="menu-item" to="unlock-user.html">Unlock User</Link>
                            </li>
                            <li><Link className="menu-item" to="recover-password.html">Recover password</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub"><Link className="menu-item" to="#">Error</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="error-400.html">Error 400</Link>
                            </li>
                            <li><Link className="menu-item" to="error-401.html">Error 401</Link>
                            </li>
                            <li><Link className="menu-item" to="error-403.html">Error 403</Link>
                            </li>
                            <li><Link className="menu-item" to="error-404.html">Error 404</Link>
                            </li>
                            <li><Link className="menu-item" to="error-500.html">Error 500</Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="menu-item" to="coming-soon.html">Coming Soon</Link>
                    </li>
                    <li><Link className="menu-item" to="under-maintenance.html">Maintenance</Link>
                    </li>
                </ul>
            </li>
            <li className=" nav-item"><Link to="changelog.html"><i className="ft-file" /><span className="menu-title" data-i18n="">Changelog</span><span className="badge badge badge-pill badge-warning float-right">1.2</span></Link>
            </li>
            <li className="nav-item has-sub"><Link to="#"><i className="ft-server" /><span className="menu-title" data-i18n="">Menu
                        levels</span></Link>
                <ul className="menu-content">
                    <li><Link className="menu-item" to="#">Second level</Link>
                    </li>
                    <li className="has-sub"><Link className="menu-item" to="#">Second level child</Link>
                        <ul className="menu-content">
                            <li><Link className="menu-item" to="#">Third level</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className=" nav-item"><Link to="https://themeselection.com/support"><i className="ft-life-buoy" /><span className="menu-title" data-i18n="">Raise Support</span></Link>
            </li>
            <li className=" nav-item"><Link to="https://themeselection.com/demo/chameleon-admin-template/documentation"><i className="ft-book" /><span className="menu-title" data-i18n="">Documentation</span></Link>
            </li> */}
        </ul>
        <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
            <div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} />
        </div>
        <div className="ps__rail-y" style={{ top: 0, height: 566, right: 0 }}>
            <div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 388 }} />
        </div>
    </div>
</div>
  )
}

export default MainMenu
