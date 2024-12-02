import { useEffect, useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';
import { GeneralModal } from "../../Components/Modals/GeneralModal"
import { useKeyDown, useKeyUp, useLocalTab } from '../../Hooks';

const ListenKeys = props => {
    const { keyExec } = props;
    // ---------------------------------------------   KEYBOARD EVENTS   --------------------------------------------- #
    useKeyDown(props.close, ['enter'], keyExec);
    useKeyUp(null, ['any'], keyExec);
    // ---------------------------------------------   /KEYBOARD EVENTS   --------------------------------------------- #

    return null;
}

const DataModal = props => {
    const { f, s } = useStates();

    const keyExec = useMemo(() => !!s.modals?.contact?.emailSended, [s.modals?.contact?.emailSended]);

    const close = e => {
        if(!!e) {e.preventDefault(); e.stopPropagation()};
        f.u2('modals', 'contact', 'emailSended', false);
        // reload page
        window.location.reload();
    }
    return (
        <div className="flex w-full justify-around">
            {keyExec && 
            <ListenKeys 
                keyExec={keyExec}
                close={close}
            />}
            <div className="w-full flex justify-center flex-col">
                <h2
                    className="w-10/12 text-center font-bold"
                    >
                    Mail sent successfully
                </h2>
                <h4
                    className="w-10/12 text-start pl-4 m-3">
                    I will contact you as soon as possible
                </h4>
                <h6
                    className="w-10/12 text-end pr-4 font-semibold italic">
                    Thank you for your interest
                </h6>
                <button
                    className="w-10/12 md:w-1/3 border border-[var(--my-middle)] bg-[var(--my-minor)] hover:bg-[var(--my-minor-sec)] text-[var(--my-major)] font-bold py-1 px-2 rounded-md m-2 self-center"
                    onClick={close}
                    >
                    Aceptar
                </button>
            </div>
        </div>
    )
}

const MailSenderModal = props => {
    return (
        <GeneralModal 
            Component={DataModal}
            lvl1='contact'
            lvl2='emailSended'
        />
    )
}

export { MailSenderModal };