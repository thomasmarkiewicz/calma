import React, { FC } from 'react';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const Statistics: FC = () => {
  const itemStyle = {padding: '24px'};
  const textStyle = {color: 'white'};
  return (
    <div css={{
        backgroundColor: '#7a7572',
        color: 'white',
        fontSize: 20,
        fontWeight: 500,
        lineHeight: '1.8',
        textAlign: 'center',
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridGap: '1rem',
    }}
    >
        <div css={itemStyle}>
          <Heading css={textStyle}>14 +</Heading>
          <Text css={textStyle}>Farms</Text>
        </div>
        <div css={itemStyle}>
          <Heading css={textStyle}>55 +</Heading>
          <Text css={textStyle}>Products</Text>
        </div>
        <div css={itemStyle}>
          <Heading css={textStyle}>163 +</Heading>
          <Text css={textStyle}>Stores</Text>
        </div>
        <div css={itemStyle}>
          <Heading css={textStyle}>1000's +</Heading>
          <Text css={textStyle}>Consumers</Text>
        </div>
    </div>
  );
}
