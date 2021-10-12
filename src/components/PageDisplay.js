import { Container, Divider, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import React from 'react'

function PageDisplay() {
    return (
        <Container sx={{ width: "82.4%", height: "100vh", ml: "250.906px", mr: 1, bgcolor: 'primary.bgColor'}}>
            <Typography variant="h4" component="h4" sx={{ textAlign:"center", color: 'text.primary' }}>
                    h1 Heading
            </Typography>

            <Divider sx={{ mt: 2}} />

            <Typography variant="body1" component="div" sx={{ margin: 6, mt: 3, color: 'text.primary' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lacus ac purus vulputate sagittis. Sed scelerisque justo at est molestie, ut cursus lacus mattis. Cras vitae urna et sem tristique placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula tincidunt nisl, sed venenatis massa. Ut vehicula nisi id consequat venenatis. Fusce rutrum arcu sed pulvinar sodales. Nullam ut nulla eros. Suspendisse a semper felis. Aenean nibh purus, euismod vitae sem et, pellentesque varius erat.
            </Typography>

        </Container>
    )
}

export default PageDisplay