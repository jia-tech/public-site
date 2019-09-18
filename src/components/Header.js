import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>JIA Technology</h1>
                <p> JIA Technology helps our clients in their biggest technology challenges. <a href="https://html5up.net"> Our innovative designs</a> and ideas<br />
                help build a better tomorrow.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('home')}}>JIA Technology</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('history')}}>JIA Journey</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('clients')}}>Clients</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('careers')}}>Careers</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
