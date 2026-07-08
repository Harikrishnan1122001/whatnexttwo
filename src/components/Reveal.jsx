import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children and adds a "reveal--visible" class once the element
 * scrolls into view. Respects prefers-reduced-motion via CSS (see index.css).
 *
 * @param {{children: React.ReactNode, delay?: number, as?: string, className?: string}} props
 */
export default function Reveal({ children, delay = 0, as = 'div', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const Tag = as

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
