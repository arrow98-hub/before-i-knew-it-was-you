import { useRef, type CSSProperties } from 'react'
import { usePhraseReveal } from '../lib/useStoryMotion'

type ScrollStoryProps = { lines: string[]; className?: string }

/** A mobile-first narrative cadence: one thought arrives as the previous recedes. */
export function ScrollStory({ lines, className = '' }: ScrollStoryProps) {
  const stage = useRef<HTMLDivElement>(null)
  usePhraseReveal(stage)
  return <div ref={stage} className={`story-reveal ${className}`} style={{ height: `${lines.length * 30 + 24}vh` } as CSSProperties}>
    {lines.map((line, index) => <p className="story-line" style={{ top: `${index * 30 + 12}vh` } as CSSProperties} key={`${index}-${line}`}>{line}</p>)}
  </div>
}
