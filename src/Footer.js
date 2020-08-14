import React from "react"

class Footer extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div class="footer">
                <div class="social-icons">
                <a href="#!">
                    <i class="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#!">
                    <i class="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#!">
                    <i class="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#!">
                    <i class="fab fa-github fa-2x"></i>
                </a>
                </div>
                <span class="footer-copy">&copy; Mantas Jakaitis Copyright 2020</span>
            </div>
        )
    }
}

export default Footer