import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Footer = () => (
  <div className="footer">
    <p >Show:</p>
    <Link to="/all">All,</Link>
    <Link to="/active">Active,</Link>
    <Link to="/bought">Bought</Link>
  </div>
);

export default Footer;
