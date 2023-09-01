import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return(
        <div className="layout">
            <nav>
                <h2>MyQuiz</h2>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                       <Link to="/questions">Questionnaire</Link>
                    </li>
                    <li>
                        <Link to="/add-question">Create</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default Layout;