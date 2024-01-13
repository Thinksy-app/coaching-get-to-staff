import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
    <NextImage src={`/coaching-get-to-staff${src}`} {...rest} />
  )

  export default Image