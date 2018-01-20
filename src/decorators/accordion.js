import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        openId: null
    }

    render() {
        return <OriginalComponent 
            {...this.props} 
            openId = {this.state.openId}
            toggleOpenAccordion = {this.toggleOpenAccordion}
        />
    }

    toggleOpenAccordion = (openId) => {
        if (openId === this.state.openId) {
            this.setState({openId : null})
         } else {
             this.setState({openId})
         }
    }
}