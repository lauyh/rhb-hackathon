import { Box, Grid } from '@mui/material'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import PieChartOne from './pieChartOne'
import PieChartTwo from './pieChartTwo'
import { AppTitle } from '@/src/consts/common'
import Navbar from '../utils/Navbar'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const Dashboard = () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <AppTitle sub="Chart Analysis" />
            <Navbar />
            {/* Content */}
            <Container maxWidth="sm">
                <Typography component="h2" variant="h5" sx={{marginTop: 2}}>
                    Chart Analysis
                </Typography>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Grid container>
                        <Grid item={true} xs={6}>
                            <PieChartOne />
                        </Grid>
                        <Grid item={true} xs={6}>
                            <PieChartTwo />
                        </Grid>
                    </Grid>
                </Box>
                <Box width="100%" margin="100px"></Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Income" {...a11yProps(0)} />
                        <Tab label="Expenses" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Completed Learning + 50VRM
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Loss to Flood - 50VRM
                </TabPanel>
            </Container>
        </>
    )
}

export default Dashboard
