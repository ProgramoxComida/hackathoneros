import * as React from 'react';
import {BrowserRouter as Router/*, Route, Link*/} from 'react-router-dom';

class Sidebar extends React.Component {
    public render() {
        return (
            <Router>
                <div className="sidebar">
                    <nav className="sidebar-nav ps ps--active-y">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">
                                    <i className="nav-icon icon-speedometer"/> Dashboard
                                    <span className="badge badge-info">NEW</span>
                                </a>
                            </li>
                            <li className="nav-title">Theme</li>
                            <li className="nav-item">
                                <a className="nav-link" href="colors.html">
                                <i className="nav-icon icon-drop"/> Colors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="typography.html">
                                <i className="nav-icon icon-pencil"/> Typography</a>
                            </li>
                            <li className="nav-title">Components</li>
                            <li className="nav-item nav-dropdown open">
                                <a className="nav-link nav-dropdown-toggle" href="#">
                                    <i className="nav-icon icon-puzzle"/> Base</a>
                                    <ul className="nav-dropdown-items">
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/breadcrumb.html">
                                            <i className="nav-icon icon-puzzle"/> Breadcrumb</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/cards.html">
                                            <i className="nav-icon icon-puzzle"/> Cards</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/carousel.html">
                                            <i className="nav-icon icon-puzzle"/> Carousel</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/collapse.html">
                                            <i className="nav-icon icon-puzzle"/> Collapse</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/jumbotron.html">
                                            <i className="nav-icon icon-puzzle"/> Jumbotron</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/list-group.html">
                                            <i className="nav-icon icon-puzzle"/> List group</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="base/navs.html">
                                            <i className="nav-icon icon-puzzle"/> Navs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/pagination.html">
                                            <i className="nav-icon icon-puzzle"/> Pagination</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/popovers.html">
                                            <i className="nav-icon icon-puzzle"/> Popovers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/progress.html">
                                            <i className="nav-icon icon-puzzle"/> Progress</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="base/scrollspy.html">
                                        <i className="nav-icon icon-puzzle"/> Scrollspy</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="base/switches.html">
                                        <i className="nav-icon icon-puzzle"/> Switches</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="base/tabs.html">
                                        <i className="nav-icon icon-puzzle"/> Tabs</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="base/tooltips.html">
                                        <i className="nav-icon icon-puzzle"/> Tooltips</a>
                                        </li>
                                    </ul>
                                </li>
                        </ul>
                    </nav>
                </div>


            </Router>
        );
    }
}

export default Sidebar;