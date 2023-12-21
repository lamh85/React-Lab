import React from "react"

const Cell = props => {
  const { value, formatter } = props
  const content = formatter ? formatter(value) : value
  return <div>{content}</div>
}

export { Cell }
