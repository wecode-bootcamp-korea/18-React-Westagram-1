import React from 'react';
import '../../Main.scss'

class NavBar extends React.Component {
    render() {
        return(
            <>
            <nav className="nav">
                <div className="nav_bar">
                    <div className="nav_bar_container">
                        <div className="nav_bar_container_logo">instagram</div>
                            <div className="nav_bar_container_search">
                                <i className="fas fa-search fa-xs"></i>
                                <input className="container_border" type="text" placeholder="검색" />
                            </div>
                            <div className="nav_bar_container_icon">
                                <i className="fas fa-home fa-lg mr-15 homeicon"></i>
                                <i className="far fa-paper-plane fa-lg mr-15"></i>
                                <i className="far fa-compass fa-lg mr-15"></i>
                                <i className="far fa-heart fa-lg mr-15"></i>
                                <i className="far fa-user fa-lg"></i>
                            </div>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}

export default NavBar