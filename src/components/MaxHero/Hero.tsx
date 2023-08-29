import React from 'react';
import {
  grettingCSS,
  heroCSS,
  punchlineCSS,
  lastLineCSS,
} from './styles';
import { strings } from './strings';
import { LangCode } from '../../bits/types';


const punchline = {
  en: (<div css={punchlineCSS}>I'm 
  <b> Maxime.</b> I work on <b css={{color: '#588CF6'}}>digital art</b> experiences and I build <b css={{color: '#ad206d'}}>software</b> for digital artists and cultural institutions.
  </div>),
  fr:  <div css={punchlineCSS}>Moi c'est 
  <b> Maxime.</b> Je crée des expériences <b css={{color: '#588CF6'}}> d'art numérique</b> et je développe des <b css={{color: '#ad206d'}}>logiciels</b> pour les artistes et institutions culturelles.
  </div>
};
interface OwnProps {
  langCode: LangCode;
}
export default function Hero({langCode}: OwnProps) {

  return (
    <div css={heroCSS}>
      <div css={grettingCSS}>{strings.hello[langCode]}</div>
      {punchline[langCode]}  
      <p css={lastLineCSS}>
       {strings.checkOut[langCode]}
       <br/>
       <b css={{fontStyle: 'none'}}>↓</b>
      </p>
    </div>
  )
}
