import React, {forwardRef} from 'react'
import { Box } from "@mui/system";


const TestFileHooks = (props, testRef) => {
    return (
        <>
        <Box>
            <input ref={testRef} />
        </Box>
        </>
    )
}

export default forwardRef(TestFileHooks);