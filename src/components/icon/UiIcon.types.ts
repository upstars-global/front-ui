export type IconSize = '16' | '20' | '24' | '32' | '40' | '48' | 'full'

export type IconSizes = {
  height: IconSize
  width: IconSize
}

export type IconProps = {
  icon?: string
  src?: string
  size?: IconSize
}
