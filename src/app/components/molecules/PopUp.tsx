import React from 'react'
import Popup from 'reactjs-popup'

type PopupProps = {
    closeModal: () => void
    open: boolean
    text: string
    children: React.ReactNode
}

const PopUp = (props: PopupProps) => {
    return (
        <Popup open={props.open} closeOnDocumentClick onClose={props.closeModal}>
            <div className="modal w-fit mx-2 rounded-lg bg-slate-700 px-8 lg:max-w-3xl">
                <div className='flex w-full justify-end'>
                    <a className="cursor-pointer close text-white text-3xl py-2 " onClick={props.closeModal}>
                        &times;
                    </a>
                </div>
                <p className="text-justify text-base text-white">
                    {props.text}
                </p>
                {props.children}
            </div>
        </Popup>
    )
}

export default PopUp