import styled, { css } from 'styled-components'

export interface FontProps {
  color?: string
  cursor?: 'pointer'
}

const Inter = css<FontProps>`
  font-family: Inter;
  font-style: normal;
  line-height: normal;
  color: ${(props) =>
    props.color
      ? `${props.color} !important`
      : props.theme.colors.other['1f1f1f']};
  cursor: ${(props) => props.cursor && props.cursor};
`

export const InterB11 = css`
  ${Inter};
  font-size: 11px;
  font-weight: 700;
`
export const SpanInterB11 = styled.span<FontProps>`
  ${InterB11};
`

export const InterB20 = css`
  ${Inter};
  font-size: 20px;
  font-weight: 700;
`
export const SpanInterB20 = styled.span<FontProps>`
  ${InterB20};
`

export const InterB24 = css`
  ${Inter};
  font-size: 24px;
  font-weight: 700;
`
export const SpanInterB24 = styled.span<FontProps>`
  ${InterB24};
`

export const InterB32 = css`
  ${Inter};
  font-size: 32px;
  font-weight: 700;
`
export const SpanInterB32 = styled.span<FontProps>`
  ${InterB32};
`

export const InterB40 = css`
  ${Inter};
  font-size: 40px;
  font-weight: 700;
`
export const SpanInterB40 = styled.span<FontProps>`
  ${InterB40};
`

export const InterR13 = css`
  ${Inter};
  font-size: 13px;
  font-weight: 400;
`
export const SpanInterR13 = styled.span<FontProps>`
  ${InterR13};
`

export const InterR14 = css`
  ${Inter};
  font-size: 14px;
  font-weight: 400;
`
export const SpanInterR14 = styled.span<FontProps>`
  ${InterR14};
`

export const InterR16 = css`
  ${Inter};
  font-size: 16px;
  font-weight: 400;
`
export const SpanInterR16 = styled.span<FontProps>`
  ${InterR16};
`

export const InterR18 = css`
  ${Inter};
  font-size: 18px;
  font-weight: 400;
`
export const SpanInterR18 = styled.span<FontProps>`
  ${InterR18};
`

export const InterM16 = css`
  ${Inter};
  font-size: 16px;
  font-weight: 500;
`
export const SpanInterM16 = styled.span<FontProps>`
  ${InterM16};
`

export const InterM18 = css`
  ${Inter};
  font-size: 18px;
  font-weight: 500;
`
export const SpanInterM18 = styled.span<FontProps>`
  ${InterM18};
`

export const InterM20 = css`
  ${Inter};
  font-size: 20px;
  font-weight: 500;
`
export const SpanInterM20 = styled.span<FontProps>`
  ${InterM18};
`

export const InterM32 = css`
  ${Inter};
  font-size: 32px;
  font-weight: 500;
`
export const SpanInterM32 = styled.span<FontProps>`
  ${InterM32};
`

export const InterSB12 = css`
  ${Inter};
  font-size: 12px;
  font-weight: 600;
`
export const SpanInterSB12 = styled.span<FontProps>`
  ${InterSB12};
`

export const InterSB16 = css`
  ${Inter};
  font-size: 16px;
  font-weight: 600;
`
export const SpanInterSB16 = styled.span<FontProps>`
  ${InterSB16};
`
