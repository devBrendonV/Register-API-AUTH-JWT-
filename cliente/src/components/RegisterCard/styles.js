import styled from "styled-components";

export const Container = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  text-align: center;
  color: #474747;
  position: relative;
  top: center;
  left: center;
  a {
    text-decoration: none;
    color: #658cf7;
  }
  .icon {
    font-size: 30px;
    position: absolute;
    left: 0;
    top: 0;
    color: #4090f7;
    margin:15px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 400px;
  margin-top: 20px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
    cursor: pointer;
    
  }
  .remember {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 15px;
  }
`;

export const CardInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: transparent;
  background-color: #ebe4e4;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 20px;
  font-size: 17px;
  padding-left: 10px;
`;

export const CardButton = styled.button`
  width: 100%;
  height: 40px;
  font-size: 18px;
  background-color: #4090f7;
  border-radius: 5px;
  border: transparent;
  padding: 10px;
  color: #f7f2f2;
  margin-bottom: 10px;
  cursor: pointer;
`;
