export default function ProjectImage({ src, optimizedSrc, alt, width, height, loading = 'lazy', className = 'h-auto w-full', pictureClassName = 'block' }) {
  return (
    <picture className={pictureClassName}>
      {optimizedSrc && <source srcSet={optimizedSrc} type="image/webp" />}
      <img src={src} alt={alt} width={width} height={height} loading={loading} decoding="async" className={className} />
    </picture>
  )
}
