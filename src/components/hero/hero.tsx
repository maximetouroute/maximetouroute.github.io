import { useTheme } from '@mui/styles'
import {
  detailsCSS,
  grettingCSS,
  heroCSS,
  punchlineCSS,
  textCSS,
} from './styles'

export default function Hero() {
  const theme = useTheme()
  return (
    <div css={heroCSS}>
      <div css={grettingCSS}>Hello 👋 </div>
      <div css={punchlineCSS}>I'm Maxime</div>
      <div css={detailsCSS}>One more line</div>
      <p css={textCSS}>
        I work with cultural institutions and digital artists to create stuff
      </p>
    </div>
  )
}
