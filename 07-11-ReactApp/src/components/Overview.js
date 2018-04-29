import React from "react";
import styled from "styled-components";
import MainModal from "./Modal";

const Box = styled.div` 
    background-color: white;
    color: black;
    margin-bottom: 7%;
    padding: 5%;
    box-shadow: 0px 0px 10px 2px rgba(119, 119, 119, 0.27);
    text-align: center;
`

const BalanceValue = styled.div`
    font-size: 3rem;
`

export default class Overview extends React.Component {
        render() {
            return (
                <div>
                <Box>
                    <div>
                        <h2>Aktuální bilance</h2>
                        <BalanceValue><p>5 000 Kč</p></BalanceValue>
                    </div>
                </Box>
                <Box>
                    <div>
                        <h3>Přehled za dané období</h3>
                    </div>
                </Box>
                <MainModal />
                </div>
            );
        }
    }
