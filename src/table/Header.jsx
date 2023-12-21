import React, { Component } from "react"
import styled from 'styled-components'

import { RowStyled } from './RowStyled.jsx'
import { Cell } from './Cell.jsx'

const HeaderCell = styled(Cell)`
  font-weight: bold;
`

class Header extends Component {
  renderCell = name => {
    const {
      columnHeaders,
      tooltips
    } = this.props

    return (
      <HeaderCell tooltip={tooltips[name]}>
        {columnHeaders[name]}
      </HeaderCell>
    )
  }

  render() {
    const { columnSequence, columnWidths } = this.props

    const widths = columnSequence.map(item => columnWidths[item])

    return (
      <RowStyled widths={widths}>
        {columnSequence.map(this.renderCell)}
      </RowStyled>
    )
  }
}

export { Header }
