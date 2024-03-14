import { useState } from 'react'
import '@/styles/views/LoaderSelector.scss'
import Button from '@/components/common/Button'
import BoxLoader from '@/components/common/BoxLoader'

const LoaderSelector = () => {
    const [size, setSize] = useState('medium')

    return (
        <div
        id="BoxLoader"
        key="boxLoader"
        className="view-wrapper">
            <div className="buttons-wrapper">
                <Button
                text="BIG"
                isDisabled={size === 'big'}
                clicked={() => setSize('big')}/>
                <Button
                text="MEDIUM"
                isDisabled={size === 'medium'}
                clicked={() => setSize('medium')}/>
                <Button
                text="SMALL"
                isDisabled={size === 'small'}
                clicked={() => setSize('small')}/>
            </div>

            {/* esta key vai fazer com que o component seja force rerendered quando muda, não precisas do codigo 
            abaixo como tinhas para forçar o component a dar rerender quando mudas de tamanho */}
            <BoxLoader key={size} size={size}/>

            {/* { size === 'big' && <BoxLoader size={size} /> }
            { size === 'medium' && <BoxLoader size={size} /> }
            { size === 'small' && <BoxLoader size={size} /> } */}

            {/* <BoxLoader size={size} /> */}
        </div>
    )
}

export default LoaderSelector
