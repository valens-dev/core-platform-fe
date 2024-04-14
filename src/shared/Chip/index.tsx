import { Chip as MuiChip } from '@mui/material'

import { IChip } from '@utils/interfaces'

function Chip({ className, label }: IChip) {
  return <MuiChip className={className} label={label} />
}

export default Chip
