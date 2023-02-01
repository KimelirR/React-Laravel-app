import React from 'react';
import { Link } from 'react-router-dom';
import avatar19 from '../assets/images/portrait/small/avatar-s-19.png';
import avatar17 from '../assets/images/portrait/small/avatar-s-17.png';
import avatar18 from '../assets/images/portrait/small/avatar-s-18.png';
import avatar11 from '../assets/images/portrait/small/avatar-s-11.png';
import avatar12 from '../assets/images/portrait/small/avatar-s-12.png';
import avatar14 from '../assets/images/portrait/small/avatar-s-14.png';
import avatar15 from '../assets/images/portrait/small/avatar-s-15.png';


const Content = () => {
  return (
     <div className="app-content content">
        <div className="content-wrapper">
            <div className="content-wrapper-before" />
            <div className="content-header row">
            </div>
            <div className="content-body">
                { /* Revenue, Hit Rate & Deals */ }
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Project Revenue</h4>
                                <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                <div className="heading-elements">
                                    <ul className="list-inline mb-0">
                                        <li><button type="button" className="btn btn-glow btn-round btn-bg-gradient-x-red-pink">More</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-body p-0 pb-0">
                                    <div className="chartist">
                                        <div id="project-stats" className="height-350 areaGradientShadow1"><svg xmlnsct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-line" style={{ width: "100%", height: "100%" }}>
                                                <g className="ct-grids" />
                                                <g>
                                                    <g className="ct-series ct-series-a">
                                                        <path d="M50,315L50,285C108.117,285,108.117,45,166.234,45C224.352,45,224.352,127.5,282.469,127.5C340.586,127.5,340.586,255,398.703,255C456.82,255,456.82,195,514.938,195C573.055,195,573.055,240,631.172,240C689.289,240,689.289,285,747.406,285L747.406,315Z" className="ct-area" />
                                                        <path d="M50,285C108.117,285,108.117,45,166.234,45C224.352,45,224.352,127.5,282.469,127.5C340.586,127.5,340.586,255,398.703,255C456.82,255,456.82,195,514.938,195C573.055,195,573.055,240,631.172,240C689.289,240,689.289,285,747.406,285" className="ct-line" />
                                                        <circle cx="50" cy="285" ctvalue="285" r="9" className="ct-point ct-point-circle-transperent">
                                                        </circle>
                                                        <circle cx="166.234375" cy="45" ctvalue="45" r="9" className="ct-point-circle ct-point">
                                                        </circle>
                                                        <circle cx="282.46875" cy="127.5" ctvalue="127.5" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="398.703125" cy="255" ctvalue="255" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="514.9375" cy="195" ctvalue="195" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="631.171875" cy="240" ctvalue="240" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="747.40625" cy="285" ctvalue="285" r="9" className="ct-point ct-point-circle-transperent" />
                                                    </g>
                                                    <g className="ct-series ct-series-b">
                                                        <path d="M50,315L50,202.5C108.117,202.5,108.117,135,166.234,135C224.352,135,224.352,240,282.469,240C340.586,240,340.586,195,398.703,195C456.82,195,456.82,120,514.938,120C573.055,120,573.055,225,631.172,225C689.289,225,689.289,135,747.406,135L747.406,315Z" className="ct-area" />
                                                        <path d="M50,202.5C108.117,202.5,108.117,135,166.234,135C224.352,135,224.352,240,282.469,240C340.586,240,340.586,195,398.703,195C456.82,195,456.82,120,514.938,120C573.055,120,573.055,225,631.172,225C689.289,225,689.289,135,747.406,135" className="ct-line" />
                                                        <circle cx="50" cy="202.5" ctvalue="202.5" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="166.234375" cy="135" ctvalue="135" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="282.46875" cy="240" ctvalue="240" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="398.703125" cy="195" ctvalue="195" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="514.9375" cy="120" ctvalue="120" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="631.171875" cy="225" ctvalue="225" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="747.40625" cy="135" ctvalue="135" r="9" className="ct-point ct-point-circle-transperent" />
                                                    </g>
                                                    <g className="ct-series ct-series-c">
                                                        <path d="M50,315L50,150C108.117,150,108.117,240,166.234,240C224.352,240,224.352,210,282.469,210C340.586,210,340.586,285,398.703,285C456.82,285,456.82,180,514.938,180C573.055,180,573.055,90,631.172,90C689.289,90,689.289,315,747.406,315L747.406,315Z" className="ct-area" />
                                                        <path d="M50,150C108.117,150,108.117,240,166.234,240C224.352,240,224.352,210,282.469,210C340.586,210,340.586,285,398.703,285C456.82,285,456.82,180,514.938,180C573.055,180,573.055,90,631.172,90C689.289,90,689.289,315,747.406,315" className="ct-line" />
                                                        <circle cx="50" cy="150" ctvalue="150" r="9" className="ct-point ct-point-circle-transperent">
                                                        </circle>
                                                        <circle cx="166.234375" cy="240" ctvalue="240" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="282.46875" cy="210" ctvalue="210" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="398.703125" cy="285" ctvalue="285" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="514.9375" cy="180" ctvalue="180" r="9" className="ct-point ct-point-circle-transperent" />
                                                        <circle cx="631.171875" cy="90" ctvalue="90" r="9" className="ct-point-circle ct-point">
                                                        </circle>
                                                        <circle cx="747.40625" cy="315" ctvalue="315" r="9" className="ct-point ct-point-circle-transperent" />
                                                    </g>
                                                </g>
                                                <g className="ct-labels">
                                                    <foreignObject style={{ overflow: "visible" }} x="50" y="320" width="116.234375" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 116, height: 20 }}>Jan</span>
                                                    </foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} x="166.234375" y="320" width="116.234375" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 116, height: 20 }}>Feb</span>
                                                    </foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} x="282.46875" y="320" width="116.234375" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 116, height: 20 }}>Mar</span>
                                                    </foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} x="398.703125" y="320" width="116.234375" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 116, height: 20 }}>Apr</span>
                                                    </foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} x="514.9375" y="320" width="116.234375" height="20">
                                                        <span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 116, height: 20 }}>May</span>
                                                    </foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} x="631.171875" y="320" width="116.234375" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 116, height: 20 }}>June</span>
                                                    </foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} x="747.40625" y="320" width="30" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 30, height: 20 }}>July</span>
                                                    </foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} y="240" x="10" height="75" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 75, width: 30 }}>0k</span></foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} y="165" x="10" height="75" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 75, width: 30 }}>50k</span>
                                                    </foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} y="90" x="10" height="75" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 75, width: 30 }}>100k</span>
                                                    </foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} y="15" x="10" height="75" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 75, width: 30 }}>150k</span>
                                                    </foreignObject>
                                                    <foreignObject style={{ overflow: "visible" }} y="-15" x="10" height="30" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 30, width: 30 }}>200k</span>
                                                    </foreignObject>
                                                </g>
                                                <defs>
                                                    <linearGradient id="area-gradient" x1="1" y1="0" x2="0" y2="0">
                                                        <stop offset="0" stopColor="rgba(248,161,236, 1)" />
                                                        <stop offset="1" stopColor="rgba(115,150,255, 1)" />
                                                    </linearGradient>
                                                </defs>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="card pull-up">
                                    <div className="card-header">
                                        <h4 className="card-title float-left">Project X</h4><Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                        <span className="badge badge-pill badge-info float-right m-0">In Progress</span>
                                    </div>
                                    <div className="card-content collapse show">
                                        <div className="card-body pt-0 pb-1">
                                            <h6 className="text-muted font-small-3"> Completed Task : 4/10</h6>
                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                <div className="progress-bar bg-gradient-x-info" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                            <div className="media d-flex">
                                                <div className="align-self-center">
                                                    <h6 className="text-bold-600 mt-2"> Client: <span className="info">Xeon
                                                            Inc.</span></h6>
                                                    <h6 className="text-bold-600 mt-1"> Deadline: <span className="blue-grey">5th June, 2018</span></h6>
                                                </div>
                                                <div className="media-body text-right mt-2">
                                                    <ul className="list-unstyled users-list">
                                                        <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="John Doe" className="avatar avatar-sm pull-up">
                                                            <img className="media-object rounded-circle" src={avatar19} alt="Avatar" />
                                                        </li>
                                                        <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Katherine Nichols" className="avatar avatar-sm pull-up">
                                                            <img className="media-object rounded-circle" src={avatar18} alt="Avatar" />
                                                        </li>
                                                        <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Joseph Weaver" className="avatar avatar-sm pull-up">
                                                            <img className="media-object rounded-circle" src={avatar17} alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card pull-up bg-gradient-directional-danger">
                                    <div className="card-header bg-hexagons-danger">
                                        <h4 className="card-title white">Analytics</h4>
                                        <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li>
                                                    <Link className="btn btn-sm btn-white danger box-shadow-1 round btn-min-width pull-right" to="#" target="_blank">Report <i className="ft-bar-chart pl-1" /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content collapse show bg-hexagons-danger">
                                        <div className="card-body">
                                            <div className="media d-flex">
                                                <div className="align-self-center width-100">
                                                    <div id="Analytics-donut-chart" className="height-100 donutShadow"><svg xmlnsct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-donut" style={{ width: "100%", height: "100%" }}>
                                                            <g className="ct-series ct-series-a">
                                                                <path d="M49.992,5A45,45,0,1,0,50,5L50,10A40,40,0,1,1,49.993,10Z" className="ct-slice-donut-solid" ctvalue="100" />
                                                            </g>
                                                            <g><text dx="50" dy="54.75" textAnchor="middle" className="ct-label" fontFamily="feather"></text></g>
                                                            <defs>
                                                                <linearGradient id="donutGradient1" x1="0" y1="1" x2="0" y2="0">
                                                                    <stop offset="0%" stopColor="rgba(250,203,205,1)">
                                                                    </stop>
                                                                    <stop offset="95%" stopColor="rgba(250,203,205, 0.7)" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg></div>
                                                </div>
                                                <div className="media-body text-right mt-1">
                                                    <h3 className="font-large-2 white">12,515</h3>
                                                    <h6 className="mt-1"><span className="text-muted white">Analytics in the <Link to="#" className="darken-2 white">last year.</Link></span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { /*/ Revenue, Hit Rate & Deals */ }
                { /* Emails Products & Avg Deals */ }
                <div className="row">
                    <div className="col-md-12 col-lg-8">
                        <div className="card">
                            <div className="card-header p-1">
                                <h4 className="card-title float-left">Project X - <span className="blue-grey lighten-2 font-small-3 mb-0">24 DEC
                                        2017 - 09 APR 2019</span></h4>
                                <span className="badge badge-pill badge-info float-right m-0">Approved</span>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-footer text-center p-1">
                                    <div className="row">
                                        <div className="col-md-3 col-12 border-right-blue-grey border-right-lighten-5 text-center">
                                            <p className="blue-grey lighten-2 mb-0">Tasks</p>
                                            <p className="font-medium-5 text-bold-400">26</p>
                                        </div>
                                        <div className="col-md-3 col-12 border-right-blue-grey border-right-lighten-5 text-center">
                                            <p className="blue-grey lighten-2 mb-0">Completed</p>
                                            <p className="font-medium-5 text-bold-400">58%</p>
                                        </div>
                                        <div className="col-md-3 col-12 border-right-blue-grey border-right-lighten-5 text-center">
                                            <p className="blue-grey lighten-2 mb-0">Pending</p>
                                            <p className="font-medium-5 text-bold-400">42%</p>
                                        </div>
                                        <div className="col-md-3 col-12 text-center">
                                            <p className="blue-grey lighten-2 mb-0">Version</p>
                                            <p className="font-medium-5 text-bold-400">4.5</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <span className="text-muted"><Link to="#" className="danger darken-2">Project X</Link>
                                        Statistics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="card pull-up border-top-info border-top-3 rounded-0">
                            <div className="card-header">
                                <h4 className="card-title">New Clients <span className="badge badge-pill badge-info float-right m-0">5+</span>
                                </h4>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-body p-1">
                                    <h4 className="font-large-1 text-bold-400">18.5% <i className="ft-users float-right" />
                                    </h4>
                                </div>
                                <div className="card-footer p-1">
                                    <span className="text-muted"><i className="la la-arrow-circle-o-up info" /> 23.67%
                                        increase</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { /*/ Emails Products & Avg Deals */ }
                { /* Chat and Recent Projects */ }
                <div className="row match-height">
                    <div className="col-xl-4 col-lg-6 col-md-12">
                        <div className="card card-transparent" style={{}}>
                            <div className="card-header bg-transparent pl-0">
                                <h5 className="card-title text-bold-700">Project Income</h5>
                                <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                            </div>
                            <div className="card-content">
                                <div id="project-income-chart" className="height-450 BarChartShadow"><svg xmlnsct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-bar" style={{ width: "100%", height: "100%" }}>
                                        <g className="ct-grids" />
                                        <g>
                                            <g className="ct-series ct-series-a">
                                                <line x1="109.78485416666666" x2="109.78385416666666" y1="400" y2="201.66666666666666" className="ct-bar" ctvalue="8000" style={{ strokeWidth: 30 }} />
                                                <circle cx="109.78385416666666" cy="201.66666666666666" r="15" className="ct-slice-pie" />
                                                <line x1="229.35256249999998" x2="229.35156249999997" y1="400" y2="95" className="ct-bar" ctvalue="12000" style={{ strokeWidth: 30 }} />
                                                <circle cx="229.35156249999997" cy="95" r="15" className="ct-slice-pie">
                                                </circle>
                                                <line x1="348.9202708333333" x2="348.9192708333333" y1="400" y2="41.666666666666686" className="ct-bar" ctvalue="14000" style={{ strokeWidth: 30 }} />
                                                <circle cx="348.9192708333333" cy="41.666666666666686" r="15" className="ct-slice-pie" />
                                                <line x1="468.48797916666666" x2="468.4869791666667" y1="400" y2="68.33333333333331" className="ct-bar" ctvalue="13000" style={{ strokeWidth: 30 }} />
                                                <circle cx="468.4869791666667" cy="68.33333333333331" r="15" className="ct-slice-pie" />
                                                <line x1="588.0556874999999" x2="588.0546874999999" y1="400" y2="175" className="ct-bar" ctvalue="9000" style={{ strokeWidth: 30 }} />
                                                <circle cx="588.0546874999999" cy="175" r="15" className="ct-slice-pie">
                                                </circle>
                                                <line x1="707.6233958333332" x2="707.6223958333333" y1="400" y2="228.33333333333334" className="ct-bar" ctvalue="7000" style={{ strokeWidth: 30 }} />
                                                <circle cx="707.6223958333333" cy="228.33333333333334" r="15" className="ct-slice-pie" />
                                            </g>
                                        </g>
                                        <g className="ct-labels">
                                            <foreignObject style={{ overflow: "visible" }} x="50" y="420" width="119.56770833333333" height="20">
                                                <span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 120, height: 20 }}>2017</span>
                                            </foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} x="169.56770833333331" y="420" width="119.56770833333333" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 120, height: 20 }}>2016</span>
                                            </foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} x="289.13541666666663" y="420" width="119.56770833333334" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 120, height: 20 }}>2015</span>
                                            </foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} x="408.703125" y="420" width="119.56770833333331" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 120, height: 20 }}>2014</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} x="528.2708333333333" y="420" width="119.56770833333331" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 120, height: 20 }}>2013</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} x="647.8385416666666" y="420" width="119.56770833333337" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 120, height: 20 }}>2012</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="348.3333333333333" x="10" height="66.66666666666667" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 67, width: 30 }}>0k</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="281.66666666666663" x="10" height="66.66666666666667" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 67, width: 30 }}>2.5k</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="214.99999999999997" x="10" height="66.66666666666666" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 67, width: 30 }}>5k</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="148.33333333333331" x="10" height="66.66666666666669" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 67, width: 30 }}>7.5k</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="81.66666666666669" x="10" height="66.66666666666663" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 67, width: 30 }}>10k</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="15" x="10" height="66.66666666666669" width="30">
                                                <span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 67, width: 30 }}>12.5k</span>
                                            </foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="-15" x="10" height="30" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 30, width: 30 }}>15k</span></foreignObject>
                                        </g>
                                        <defs>
                                            <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="10%" stopColor="rgba(249,111,155,0.9)" />
                                                <stop offset="90%" stopColor="rgba(105,103,206,0.8)" />
                                            </linearGradient>
                                        </defs>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-6 col-md-12">
                        <h5 className="card-title text-bold-700 my-2">Recent Projects</h5>
                        <div className="card" style={{}}>
                            <div className="card-content">
                                <div id="recent-projects" className="media-list position-relative">
                                    <div className="table-responsive">
                                        <table className="table table-padded table-xl mb-0" id="recent-project-table">
                                            <thead>
                                                <tr>
                                                    <th className="border-top-0">Project Name</th>
                                                    <th className="border-top-0">Assigned to</th>
                                                    <th className="border-top-0">Deadline</th>
                                                    <th className="border-top-0">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-truncate align-middle">
                                                        <Link to="#">X Admin</Link>
                                                    </td>
                                                    <td className="text-truncate">
                                                        <ul className="list-unstyled users-list m-0">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="John Doe" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar19} alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Katherine Nichols" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar18} alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Joseph Weaver" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar17} alt="Avatar" />
                                                            </li>
                                                            <li className="avatar avatar-sm">
                                                                <span className="badge badge-info">+2 more</span>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td className="text-truncate pb-0">
                                                        <span>15th July, 2018</span>
                                                        <p className="font-small-2 text-muted"> 1 day left</p>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                            <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate align-middle">
                                                        <Link to="#">Analytics UI</Link>
                                                    </td>
                                                    <td className="text-truncate">
                                                        <ul className="list-unstyled users-list m-0">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="John Doe" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar17} alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Katherine Nichols" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar14} alt="Avatar" />
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td className="text-truncate pb-0">
                                                        <span>26th May, 2018</span>
                                                        <p className="font-small-2 text-muted danger"> behind</p>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                            <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate align-middle">
                                                        <Link to="#">Traveltrip</Link>
                                                    </td>
                                                    <td className="text-truncate">
                                                        <ul className="list-unstyled users-list m-0">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="John Doe" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar19} alt="Avatar" />
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td className="text-truncate pb-0">
                                                        <span>23rd May, 2018</span>
                                                        <p className="font-small-2 text-muted"> in 11 Days</p>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                            <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate align-middle">
                                                        <Link to="#">Apex Angular</Link>
                                                    </td>
                                                    <td className="text-truncate">
                                                        <ul className="list-unstyled users-list m-0">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="John Doe" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar19} alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Katherine Nichols" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar18} alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Joseph Weaver" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar17} alt="Avatar" />
                                                            </li>
                                                            <li className="avatar avatar-sm">
                                                                <span className="badge badge-info">+1 more</span>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td className="text-truncate pb-0">
                                                        <span>13th May, 2018</span>
                                                        <p className="font-small-2 text-muted"> 1 month</p>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                            <div className="progress-bar bg-gradient-x-warning" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate align-middle">
                                                        <Link to="#">Chameleon Admin</Link>
                                                    </td>
                                                    <td className="text-truncate">
                                                        <ul className="list-unstyled users-list m-0">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="John Doe" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar11} alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Katherine Nichols" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle" src={avatar12} alt="Avatar" />
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td className="text-truncate pb-0">
                                                        <span>18th July, 2018</span>
                                                        <p className="font-small-2 text-muted danger"> behind</p>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                            <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { /*/ Products sell and New Orders */ }
                { /* Total earning & Recent Sales  */ }
                <div className="row mt-1">
                    <div className="col-md-12 col-lg-6 col-xl-8">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">New Projects</h4>
                                <Link className="heading-elements-toggle">
                                    <i className="la la-ellipsis-v font-medium-3" />
                                </Link>
                                <div className="heading-elements">
                                    <ul className="list-inline mb-0">
                                        <li>
                                            <Link data-action="reload">
                                                <i className="ft-rotate-cw" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-content mt-1">
                                <div id="new-projects" className="height-400 GradientlineShadow"><svg xmlnsct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-line" style={{ width: "100%", height: "100%" }}>
                                        <g className="ct-grids">
                                            <line y1="365" y2="365" x1="50" x2="757.40625" className="ct-grid ct-vertical">
                                            </line>
                                            <line y1="306.6666666666667" y2="306.6666666666667" x1="50" x2="757.40625" className="ct-grid ct-vertical" />
                                            <line y1="248.33333333333331" y2="248.33333333333331" x1="50" x2="757.40625" className="ct-grid ct-vertical" />
                                            <line y1="190" y2="190" x1="50" x2="757.40625" className="ct-grid ct-vertical">
                                            </line>
                                            <line y1="131.66666666666666" y2="131.66666666666666" x1="50" x2="757.40625" className="ct-grid ct-vertical" />
                                            <line y1="73.33333333333331" y2="73.33333333333331" x1="50" x2="757.40625" className="ct-grid ct-vertical" />
                                            <line y1="15" y2="15" x1="50" x2="757.40625" className="ct-grid ct-vertical">
                                            </line>
                                        </g>
                                        <g>
                                            <g className="ct-series ct-series-a">
                                                <path d="M50,312.5C138.426,312.5,138.426,175.417,226.852,175.417C315.277,175.417,315.277,233.75,403.703,233.75C492.129,233.75,492.129,15,580.555,15C668.98,15,668.98,248.333,757.406,248.333" className="ct-line" />
                                                <circle cx="50" cy="312.5" ctvalue="312.5" r="10" className="ct-point-circle-transperent" />
                                                <circle cx="226.8515625" cy="175.41666666666666" ctvalue="175.41666666666666" r="10" className="ct-point-circle-transperent" />
                                                <circle cx="403.703125" cy="233.75" ctvalue="233.75" r="10" className="ct-point-circle-transperent" />
                                                <circle cx="580.5546875" cy="15" ctvalue="15" r="10" className="ct-point-circle" />
                                                <circle cx="757.40625" cy="248.33333333333331" ctvalue="248.33333333333331" r="10" className="ct-point-circle-transperent" />
                                            </g>
                                            <g className="ct-series ct-series-b">
                                                <path d="M50,20.833C138.426,20.833,138.426,312.5,226.852,312.5C315.277,312.5,315.277,190,403.703,190C492.129,190,492.129,277.5,580.555,277.5C668.98,277.5,668.98,73.333,757.406,73.333" className="ct-line" />
                                                <circle cx="50" cy="20.833333333333314" ctvalue="20.833333333333314" r="10" className="ct-point-circle-transperent" />
                                                <circle cx="226.8515625" cy="312.5" ctvalue="312.5" r="10" className="ct-point-circle-transperent">
                                                </circle>
                                                <circle cx="403.703125" cy="190" ctvalue="190" r="10" className="ct-point-circle-transperent">
                                                </circle>
                                                <circle cx="580.5546875" cy="277.5" ctvalue="277.5" r="10" className="ct-point-circle-transperent">
                                                </circle>
                                                <circle cx="757.40625" cy="73.33333333333331" ctvalue="73.33333333333331" r="10" className="ct-point-circle-transperent" />
                                            </g>
                                        </g>
                                        <g className="ct-labels">
                                            <foreignObject style={{ overflow: "visible" }} x="50" y="370" width="176.8515625" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 177, height: 20 }}>Jan</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} x="226.8515625" y="370" width="176.8515625" height="20">
                                                <span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 177, height: 20 }}>Feb</span>
                                            </foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} x="403.703125" y="370" width="176.8515625" height="20">
                                                <span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 177, height: 20 }}>Mar</span>
                                            </foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} x="580.5546875" y="370" width="176.8515625" height="20">
                                                <span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 177, height: 20 }}>Apr</span>
                                            </foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} x="757.40625" y="370" width="30" height="20"><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{ width: 30, height: 20 }}>May</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="306.6666666666667" x="10" height="58.333333333333336" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 58, width: 30 }}>0</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="248.33333333333334" x="10" height="58.333333333333336" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 58, width: 30 }}>100</span>
                                            </foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="190" x="10" height="58.33333333333333" width="30">
                                                <span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 58, width: 30 }}>200</span>
                                            </foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="131.66666666666666" x="10" height="58.33333333333334" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 58, width: 30 }}>300</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="73.33333333333331" x="10" height="58.33333333333334" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 58, width: 30 }}>400</span></foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="15" x="10" height="58.333333333333314" width="30">
                                                <span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 58, width: 30 }}>500</span>
                                            </foreignObject>
                                            <foreignObject style={{ overflow: "visible" }} y="-15" x="10" height="30" width="30"><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{ height: 30, width: 30 }}>600</span></foreignObject>
                                        </g>
                                        <defs>
                                            <linearGradient id="linear6" x1="0" y1="1" x2="0" y2="0">
                                                <stop offset="0" stopColor="rgba(45,121,255,0.7)" />
                                                <stop offset="1" stopColor="rgba(249,81,255, 0.7)" />
                                            </linearGradient>
                                            <linearGradient id="linear7" x1="0" y1="1" x2="1" y2="0">
                                                <stop offset="0" stopColor="rgba(247,214,142,1)" />
                                                <stop offset="1" stopColor="rgba(248,120,131, 1)" />
                                            </linearGradient>
                                        </defs>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Chat</h4>
                                <Link className="heading-elements-toggle">
                                    <i className="la la-ellipsis-v font-medium-3" />
                                </Link>
                                <div className="heading-elements">
                                    <ul className="list-inline mb-0">
                                        <li>
                                            <Link data-action="reload">
                                                <i className="ft-rotate-cw" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-body chat-application">
                                    <div className="chats height-300 ps ps--active-y">
                                        <div className="chats">
                                            <div className="chat">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="right" title="" data-original-title="">
                                                        <img src={avatar19} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>How can we help? We're here htmlFor you!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="left" title="" data-original-title="">
                                                        <img src={avatar15} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>Hey Jacob, Could you please help me to find it out?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="right" title="" data-original-title="">
                                                        <img src={avatar19} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>Absolutely!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="left" title="" data-original-title="">
                                                        <img src={avatar15} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>I am looking htmlFor the best Angular admin template.</p>
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="right" title="" data-original-title="">
                                                        <img src={avatar19} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>Crest admin is the responsive Angular 5 bootstrap 4 admin
                                                            template.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="left" title="" data-original-title="">
                                                        <img src={avatar15} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>Looks clean and fresh UI.</p>
                                                    </div>
                                                    <div className="chat-content">
                                                        <p>It's perfect htmlFor my next project.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="right" title="" data-original-title="">
                                                        <img src={avatar19} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>Thanks a lot!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="left" title="" data-original-title="">
                                                        <img src={avatar15} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>How can I purchase it?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="right" title="" data-original-title="">
                                                        <img src={avatar19} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>From Wrapbootstrap.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="left" title="" data-original-title="">
                                                        <img src={avatar15} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>I will purchase it htmlFor sure.</p>
                                                    </div>
                                                    <div className="chat-content">
                                                        <p>Thanks.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat">
                                                <div className="chat-avatar">
                                                    <Link className="avatar" data-toggle="tooltip" to="#" data-placement="right" title="" data-original-title="">
                                                        <img src={avatar19} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-content">
                                                        <p>Great!!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                            <div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} />
                                        </div>
                                        <div className="ps__rail-y" style={{ top: 0, height: 300, right: 0 }}>
                                            <div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 117 }}>
                                            </div>
                                        </div>
                                    </div>
                                    <form className="chat-app-input mt-1 row">
                                        <div className="col-12">
                                            <fieldset>
                                                <div className="input-group position-relative has-icon-left">
                                                    <div className="form-control-position">
                                                        <span id="basic-addon3"><i className="ft-image" /></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Send message" aria-describedby="button-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">Send</button>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { /*/ Total earning & Recent Sales  */ }
            </div>
        </div>
    </div>
  )
}

export default Content
