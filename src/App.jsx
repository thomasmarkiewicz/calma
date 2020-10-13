import React from 'react';
import { css } from '@emotion/core'

const style = css({
  color: 'hotpink'
})

const anotherStyle = css({
  textDecoration: 'underline'
})
 
const App = () => (
  <div css={style}>
    Some hotpink text.
    <div css={anotherStyle}>Some text with an underline.</div>
  </div>
)

export default App;
