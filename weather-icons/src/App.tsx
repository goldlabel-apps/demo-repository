import React from "react"
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardHeader,
  Typography,
  CardMedia,
} from "@mui/material"

function App() {
  return (
    <Dialog 
        open 
        fullScreen
        onClose={(e: React.MouseEvent) => {
          e.preventDefault()
          // dispatch(setOpen(false))
        }}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            height: "100vh"
          }
        }}

      >
        <DialogTitle>
          <CardHeader 
            avatar={<Avatar src="/logo.svg" />}
            title={<Typography variant="h6">
                      Weather Icons
                    </Typography>}
            subheader={<Typography variant="body1">
            In this example we use create react app to build some 
            Weather Icon Components we need for another project
            </Typography>}
          />
          
        </DialogTitle>
        
        <DialogContent>
          
        <CardMedia 
          component={"img"}
          height={125}
          src="/svg/All_Wether_Icons.svg"
        />
        </DialogContent>
        <DialogActions>
          <Button variant="contained">
            Next
          </Button>
        </DialogActions>
    </Dialog>
  )
}

export default App
