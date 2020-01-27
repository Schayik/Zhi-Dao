import React from "react"

function SvgComponent(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 50 35" {...props}>
      <path d="M49 0h.04a1.09 1.09 0 01.465.126 1.058 1.058 0 01.188.13l-.088-.068a.99.99 0 01.072.055l.016.014a.99.99 0 01.182.217.985.985 0 01.023.042l.009.016a.88.88 0 01.093.39l-.004-.083.002.03L50 .92v33.16c0 .509-.448.921-1 .921H1a1.102 1.102 0 01-.46-.103.94.94 0 01-.233-.154l.09.07a.99.99 0 01-.08-.06l-.01-.01a.977.977 0 01-.21-.267A.843.843 0 010 34.08l.004.083a.854.854 0 01-.003-.049L0 34.08V.92A.864.864 0 01.093.53L.102.517a.895.895 0 01.22-.273.99.99 0 01.329-.185C.759.02.877 0 1 0L.888.006.936.002 1 0h48zM31.705 18.843l-5.984 5.742-.095.08a1.064 1.064 0 01-1.347-.08l-5.985-5.742L3.349 33.157H46.65L31.705 18.843zM48 3.209L33.091 17.513 48 31.793V3.209zM2 3.21v28.582l14.908-14.279L2 3.21zm44.653-1.368H3.346l15.534 14.9.018.013.105.081c.06.054.112.113.155.176L25 22.616 46.653 1.842z" />
    </svg>
  )
}

export default SvgComponent