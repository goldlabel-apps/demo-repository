import React from "react"
import {
  Avatar,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
  Container,
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
        }}>
        <DialogContent>
          <DialogTitle>
            <Container maxWidth="md">
              <CardHeader
                avatar={<IconButton>
                          <Avatar src="/logo.svg" />
                          </IconButton>}
                title={<Typography variant="h6">
                          Weather Icons
                        </Typography>}
                subheader={<Typography variant="body1">
                              Using create react app to make some Weather Icon Components
                            </Typography>}
              />
            </Container>
          </DialogTitle>
          <Container maxWidth="md">
            <CardContent>
              <CardMedia 
                component={"img"}
                height={125}
                src="/svg/All_Wether_Icons.svg"
              />
            </CardContent>
          </Container>
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
