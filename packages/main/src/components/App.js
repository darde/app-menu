import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  height: 80px;
  background: ${({ bgColor }) => bgColor };
  display: flex;
  align-items: center;
  justify-content: center;
`

const Menu = styled.nav`
  width: 100%;
  max-width: 1002px;
  height: 100%;
  background: rgba(255,255,255,0.3);
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
`
const ListItem = styled.li`
  width: 130px;
  height: 60%;
`

const Button = styled.button`
  width: 130px;
  height: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  background: ${({ bgColor }) => bgColor};

  &:hover {
    border: 1px solid black;
  }
`

const menuItems = [
  { label: 'pink' },
  { label: 'lightblue' },
  { label: 'gold' },
  { label: 'gray' },
]

function App({ bgColor, handleOnClick }) {
  return (
    <AppContainer bgColor={bgColor}>
      <Menu>
        {
          menuItems.length && (
            <List>
              {
                menuItems.map(item => (
                  <ListItem key={item.label}>
                    <Button
                      value={item.label}
                      onClick={handleOnClick}
                      bgColor={item.label}
                    >
                      Emit changeFontColor {item.label}
                    </Button>
                  </ListItem>
                ))
              }
            </List>
          )
        }
      </Menu>
    </AppContainer>
  )
}

export default React.memo(App)
