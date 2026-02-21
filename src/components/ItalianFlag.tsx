interface ItalianFlagProps {
  width?: number
  height?: number
  className?: string
}

export default function ItalianFlag({ width = 28, height = 18, className }: ItalianFlagProps) {
  const r = Math.round(height * 0.18) // border-radius proportional to height
  return (
    <span
      className={className}
      aria-label="Italiensk flag"
      role="img"
      style={{
        display: 'inline-flex',
        width,
        height,
        borderRadius: r,
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.22)',
        flexShrink: 0,
        verticalAlign: 'middle',
      }}
    >
      <span style={{ flex: 1, background: '#009246' }} />
      <span style={{ flex: 1, background: '#ffffff' }} />
      <span style={{ flex: 1, background: '#ce2b37' }} />
    </span>
  )
}
