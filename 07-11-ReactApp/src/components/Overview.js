import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const Page = styled.div`
    height: 94vh;
`

const Box = styled.div` 
    background-color: white;
    color: black;
    margin-bottom: 7%;
    padding: 5%;
    box-shadow: 0px 0px 10px 2px rgba(119, 119, 119, 0.27);
    text-align: center;
`
const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  color: white;
  text-align: center;
  text-shadow: 1px 3px 20px rgba(0,0,0,0.2),
  0px -5px 35px rgba(255,255,255,0);
`

const BalanceValue = styled.div`
    font-size: 3rem;
`

export default class Overview extends React.Component {
        render() {
            return (
                <div>
                    <Page>
                    <div>
                        <Title><h1>Overview</h1></Title>
                        <Box>
                        <BalanceValue><p>5 000 Kč</p></BalanceValue>
                        <p>spent today</p>
                        </Box>
                    </div>
                    </Page>
                    <Footer />
                </div>
            );
        }
    }
