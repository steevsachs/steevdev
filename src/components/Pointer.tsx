import React from 'react'
import { css } from 'emotion'

type PointerProps = {
  className?: string
}

const styles = {
  container: css({
    marginRight: '.2em',
    marginTop: 6,
  }),
  image: css({
    height: '.65em',
  }),
}

const Pointer: React.FC<PointerProps> = ({ className }) => (
  <div className={css(styles.container, className)}>
    <img
      alt="pointer"
      className={styles.image}
      src="data:image/gif;base64,R0lGODlhIAAgAJkBAAAAAP///wD/AKSkpCH5BAkUAAIALAAAAAAgACAAAAKOlI+gq+gPDWOxHhayzs1CvGmddwGhNqRqOi2Pcmbr2o4CGOdxh+s+t5ANfsQAy2QcFn3H5Wmm6jmTUFBqeWxJkNdidrIVYge2BFdJPEZgyXQUsD671Z9zN0ePC++xfP248vRmoQCoIugXxwBFA0dyM8E4+GhWYwlWcanpUrLp+QkaKrq5NUrqAEpZeUpSAAA7"
    />
  </div>
)

export default Pointer
