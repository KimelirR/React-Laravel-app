import React from 'react'
import Navbar from './Navbar'
import MainMenu from './MainMenu';
import Content from './Content';
import Customizer from './Customizer';
import Footer from './Footer';


const MasterLayout = () => {
  return (
    <body className="vertical-layout vertical-menu 2-columns fixed-navbar  menu-collapsed pace-done" data-open="click"
    data-menu="vertical-menu" data-color="bg-gradient-x-purple-blue" data-col="2-columns">
      <div className="pace  pace-inactive">
        <div className="pace-progress" data-progress-text="100%" data-progress="99" style={{ transform: "translate3d(100%, 0px, 0px)" }}>
            <div className="pace-progress-inner" />
        </div>
        <div className="pace-activity" />
    </div>

    <Navbar />

    <MainMenu />

    <Content />

    <Customizer />

    <Footer />

    <div className="chartist-tooltip" style={{ top: 128, left: 592 }} />
    <div className="chartist-tooltip" />
    <div className="chartist-tooltip" />
    </body>
  )
}

export default MasterLayout
