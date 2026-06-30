import { Box, Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Page() {

    return(
        <Container>
            <Typography variant="h4">
                Material UI
            </Typography>
            <Button variant="contained">
                MUI
            </Button>
            <button>sin MUI</button>

            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      </CardContent>

    </Card>
        </Container>
    );
}