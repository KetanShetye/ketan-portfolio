import { LinearProgress } from "@mui/material"
import {Box, Typography} from "../source/components/index"

const AppEntry = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100lvh',overflow:'hidden',bgcolor:'#F6F6F6',flexDirection:'column',rowGap:1}}>
        <Typography>
            This is my portfolio website
        </Typography>
        <LinearProgress sx={{width:'290px'}} />
    </Box>
  )
}

export default AppEntry