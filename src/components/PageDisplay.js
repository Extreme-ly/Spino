import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'

import React from 'react'

function PageDisplay() {
    return (
        <Box sx={{ bgcolor: "#fff", width: "82.5%", height: "100vh", ml: "250.906px", mr: 1}}>
            <Typography variant="h4" component="h4" sx={{ textAlign:"center" }}>
                    h1 Heading
            </Typography>

            <Divider sx={{ mt: 2}}/>

            <Typography variant="body1" component="body" sx={{ margin: 6, mt: 3}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lacus ac purus vulputate sagittis. Sed scelerisque justo at est molestie, ut cursus lacus mattis. Cras vitae urna et sem tristique placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula tincidunt nisl, sed venenatis massa. Ut vehicula nisi id consequat venenatis. Fusce rutrum arcu sed pulvinar sodales. Nullam ut nulla eros. Suspendisse a semper felis. Aenean nibh purus, euismod vitae sem et, pellentesque varius erat.
            </Typography>

        </Box>
    )
}

export default PageDisplay