import React from "react";


export default function MainContent() {

    return (
        <div>
            <div class="hero">
                <div class="container">
                    <div class="hero__text">
                        <h1>Welcome</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a href="#" class="btn">Check for Updates</a>
                    </div>
                </div>
            </div>

            <div class="light">
                <div class="container">
                    <div class="row ">
                        <div class="col">
                            <h2 class="delimiter">Jobs at PS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div class="col">
                            <h2>News</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div class="col">
                            <h2>Refer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="dark">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2>Break the Bias</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div class="col">
                            <h2>The Future of Investment Management</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                *, *::before, *::after {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.3rem;
                }

                h1 {
                    font-size: 3rem;
                }

                .container {
                    width: 80%;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .row {
                    /* display: flex => flex container */
                    display: flex;

                    /* can't use yet */
                    /* gap: 100px; */
                }

                .col {
                    /* these are now flex items */
                    width: 100%;
                    text-align: center;
                }

                .light {
                    padding: 3em 0;
                }

                .light h2 {
                    color: #87629A;
                    
                }

                .dark {
                    color: #FFF;
                    background-color: #23424A;
                    padding: 3em 0;
                }

                .col + .col {
                    margin-left: 30px;
                }

                .hero {
                    padding: 100px 0;
                    background-color: #23424A;
                    color: #FFF;
                }

                .hero__text {
                    width: 60%;
                }

                .hero p {
                    margin-bottom: 3em;
                }

                .btn {
                    display: inline-block;
                    text-decoration: none;
                    text-transform: uppercase; 
                    color: #23424A;
                    font-weight: 900;
                    background-color: #38CFD9;
                    padding: .75em 2em;
                    border-radius: 100px;
                }

                .btn:hover,
                .btn:focus {
                    opacity: .75; 
                }

                .delimiter::before {
                    padding: 0 0.8rem;
                }
            `}</style>
        </div>
    )
}