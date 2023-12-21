import styled from 'styled-components'

const getColumnStyle = widths => {
  return widths.map(item => `${item}fr`).join(" ")
}

const RowStyled = styled.div`
  display: grid;
  ${props => `
    grid-template-columns: ${getColumnStyle(props.widths)};
  `}
`

export { RowStyled }