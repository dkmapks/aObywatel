import styled from 'styled-components';

const StyledIconChevron = styled.div`
  height: 30px;
  width: 30px;
`;

function IconChevron() {
  return (
    <StyledIconChevron>
      <svg width="100%" height="100%" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7.21084 6.76721C7.6369 7.16284 7.6369 7.83716 7.21084 8.23279L1 14" stroke="black" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </StyledIconChevron>
  );
}

export default IconChevron;
