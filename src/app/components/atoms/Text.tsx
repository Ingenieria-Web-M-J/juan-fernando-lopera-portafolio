import React from 'react'

type TextProps = {
  classes?: string
  children: React.ReactNode
}

// Este átomo se creó con la finalidad de ser usado en todos los lugares donde se requiera ingresar texto.
// Adicionalmente, cuenta con las propiedades 'classes' que permite colocarle estilo o propiedades de tailwind para
// tener mayor flexibilidad a la hora de usarlo en otros lugares.
const Text = (props: TextProps) => {
  const classNames = `${props.classes || ''}`
  return <p className={classNames}>{props.children}</p>
}

export default Text
