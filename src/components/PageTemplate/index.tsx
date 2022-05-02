import React from 'react'
import './styles.scss'

interface PageTemplateProps {
    headerText: string
    sidebar: React.ReactElement
    children: React.ReactElement
}

const PageTemplate: React.FC<PageTemplateProps> = ({
    headerText,
    children,
    sidebar,
}) => {
    return (
        <div className={'page-template'}>
            <div className="page-template__sidebar">{sidebar}</div>
            <div className="page-template__content">
                <h4 className={'page-template__content-header'}>
                    {headerText}
                </h4>
                {children}
            </div>
        </div>
    )
}

export default PageTemplate
