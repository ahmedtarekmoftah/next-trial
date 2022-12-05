import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  gap: 20px;
  #AboutCreator {
    font-weight: 600;
  }
  #AboutImage {
    width: 300px;
  }
  #AboutDesc {
    width: 250px;
    text-align: center;
  }
  @media only screen and (min-width: 1024px) {
    #AboutImage {
      width: 400px;
    }
    #AboutDesc {
      width: 400px;
      text-align: center;
    }
  }
`;
