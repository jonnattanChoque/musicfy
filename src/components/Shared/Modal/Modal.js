import React from 'react';
import "./Modal.scss";
import { Modal as ModalSemantic, Icon } from 'semantic-ui-react';

export function Modal(props) {
    const { show, setShow, size, title, children } = props;
    return (
        <ModalSemantic open={show} size={size} onClose={setShow} className='basic-modal'>
            <ModalSemantic.Header>
                <span>{title}</span>
                <Icon name='close' onClick={setShow} link />
            </ModalSemantic.Header>
            <ModalSemantic.Content>
                {children}
            </ModalSemantic.Content>
        </ModalSemantic>
    )
}

Modal.defaultProps = {
    size: "tiny"
}
