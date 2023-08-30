import { styled } from 'styled-components';

const Box = styled.div`
  text-align: center;
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
`

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  p {
    margin: 15px;
  }
`

function Header() {
  return (
    <HeaderStyles>
        <p>My ToDo List</p>
        <p>React</p>
    </HeaderStyles> 
  );
}

function Layout({ children }) {
  return (
    <Box>
      <Header />
      <div >
        {children}
      </div>
    </Box>
  );
}

export default Layout;