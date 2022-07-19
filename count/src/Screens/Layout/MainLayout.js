import Grid from '@mui/material/Grid';
export default function MainLayout({ children }) {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100vh',backgroundColor:'RGB(47,48,64)'}}
        >
                {children}
        </Grid>
    )
}