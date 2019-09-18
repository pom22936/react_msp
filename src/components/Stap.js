import React, { useState , useEffect } from 'react'
import { Step } from 'semantic-ui-react'

const StepExampleOrdered = (props) => {
    let [sta , setSta ] = useState(false)

    useEffect(() => {
        setSta(props.status)
        console.log(sta)
      },[props.status, sta]);

    return (
        <Step.Group ordered>
            <Step completed={sta} >
                <Step.Content>
                    <Step.Title>Shipping </Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                </Step.Content>
            </Step>

            <Step completed={false}>
                <Step.Content>
                    <Step.Title>Billing</Step.Title>
                    <Step.Description>Enter billing information</Step.Description>
                </Step.Content>
            </Step>

            <Step completed={false}>
                <Step.Content>
                    <Step.Title>Confirm Order</Step.Title>
                </Step.Content>
            </Step>
        </Step.Group>
    )
}

export default StepExampleOrdered