
// import { RouterLinks } from "@routes/route-uls";
import BarChart from '@components/BarChart/BarChart';
import Guage from '@components/Guage/Guage';
import LineChart from '@components/LineChart/LineChart';
import LineChartNew from '@components/LineChart/LineChartNew';
import { Box, Grid, Typography } from '@material-ui/core';
// import { logout } from '@utilities/reducer';
// import { useAuthContext } from '@utilities/State';
// import { useHistory, useParams } from 'react-router';
// import ResponsiveDrawer from '@components/ResponsiveDrawer';


const Dashboard: React.FC = () => {
    // const history = useHistory();
    // const { name } = useParams<{ name: string; }>();
    // const { meterId } = useParams<{ meterId: string; }>();
    // const { state, dispatch } = useAuthContext();


    return (
        <div>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Box px={3} py={2}>


                <Grid container spacing={1}>

                    <Grid item xs={12} sm={6}>
                        <BarChart />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Guage />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LineChart />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LineChartNew />
                    </Grid>
                </Grid>


            </Box>

        </div>
        // <ResponsiveDrawer />
    );
};

export default Dashboard;
