import { cn } from '@/lib/utils'

type CoastAppLogoProps = {
  className?: string
}

/** Brand mark from `/CoastApp.svg`. Use next to visible “CoastApp” text; decorative when that text is present. */
export function CoastAppLogo({ className }: CoastAppLogoProps) {
  return (
    <img
      src="/CoastApp.svg"
      alt=""
      aria-hidden
      className={cn('h-5 w-auto max-w-full object-contain', className)}
    />
  )
}
