import { useStates } from '../../Hooks/useStates';

function Test() {
    const { ls, lf, s, f } = useStates();
    return (
        <>
            Component to make tests
        </>
    )
}

export { Test };
