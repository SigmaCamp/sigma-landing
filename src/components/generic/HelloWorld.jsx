import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgLight};
`;

const SpecialButton = styled.button`
  background-color: ${({ theme }) => theme.colors.cyan};
  color: ${({ theme }) => theme.colors.comment};
`;

export default function HelloWorld() {
  return (
    <Wrapper>
      <SpecialButton>Hello world</SpecialButton>
    </Wrapper>
  );
}
