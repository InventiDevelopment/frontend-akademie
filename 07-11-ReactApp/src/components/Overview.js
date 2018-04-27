import React from "react";
import styled from "styled-components";

const Box = styled.div` 
    background-color: white;
    color: black;
    margin-bottom: 7%;
    padding: 5%;
    box-shadow: 0px 0px 10px 2px rgba(119, 119, 119, 0.27);
`

export default class Overview extends React.Component {
        render() {
            return (
                <div>
                <Box>
                    <div>
                        <h2>Aktuální bilance</h2>
                        <p>Datum</p>
                    </div>
                </Box>
                <Box>
                    <div>
                        <h3>Přehled za dané období</h3>
                    </div>
                </Box>
                    <footer>
                        <i class="fas fa-plus-circle"></i>
                    </footer>
                </div>
            );
        }
    }
