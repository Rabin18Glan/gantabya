import { ReactElement } from 'react'

function PageWrapper({ children }: { children: ReactElement }) {
    return (
        <div>{children}</div>
    )
}

export default PageWrapper