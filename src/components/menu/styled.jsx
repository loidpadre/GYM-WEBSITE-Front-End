import styled from "styled-components";
export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
    margin-left: 40px;
    margin-right: 40px;
    ul{
        display: flex;
        gap: 18px;
        
        li{
            list-style: none;
            
            a{
                text-decoration: none;
                color: #fff;
                transition: .5s;
                &:hover{
                    background-color: red;
                    border-radius: 10px;
                    padding: 8px;
                }

            }
            
        }
    }

`
