import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: #223344;
  margin: -8px;
  padding: 15px;
  padding-top: 1px;
  width: 100%;
  height: 100%;
  color: LightGrey;
`;

export const CoolButton = styled.button`
  display: block;
  background-color: PaleTurquoise;
  color: #3b3d3f;
  font-size: 18px;
  width: 300px;
  height: 36px;
  border-radius: 3px;
  border: 1px solid #3b3d3f;
  margin-top: 5px;
  margin-bottom: 15px;

  &::focus {
    outline: none;
  }
`;

export const SummarySpan = styled.span`
  display: block;
  width: 300px;
  margin-bottom: 5px;
`;

export const BudgetName = styled.input`
  width: 189px;
  color: #3b3d3f;
  background-color: #8ebdb4;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 5px;
  border: 1px solid #3b3d3f;
  border-right: none;
`;

export const BudgetValue = styled.input`
  width: 89px;
  color: #3b3d3f;
  padding: 5px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: 1px solid #3b3d3f;
  border-left: none;
  text-align: right;
  z-index: -1;
  background-color: ${props => props.heat};
`;

export const DollarSign = styled.span`
  position: relative;
  color: #3b3d3f;
  font-size: 12px;
  margin-right: -10px;
  width: 0px;
`;

export const ClearInput = styled.input`
  display: inline;
  width: 50px;
  border: none;
  border-radius: 3px;
  text-align: right;
  padding-right: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 3px;
`;
