import { Card } from 'primereact/card';
import { useEffect } from 'react';

function MyCard({title,subTitle,children,header,className,footer}:any) {
    
  return (
    <Card title={title} subTitle={subTitle} header={header} className={className} footer={footer}>
        {children}
    </Card>
  )
}

export default MyCard