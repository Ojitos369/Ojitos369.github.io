import { useMemo } from 'react';
import { useStates } from '../../../Hooks/useStates';
import { GeneralModal } from '../../../Components/Modals/GeneralModal';

import styles from '../styles/index.module.scss';

const Content = props => {
    const { s } = useStates();
    const value = useMemo(() => s.contact?.form?.text || '', [s.contact?.form?.text]);

    return (
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: value }}></div>
    )
}

const Preview = props => {
    return (
        <GeneralModal 
        Component={Content}
        lvl1='contact'
        lvl2='preview'
        />
    )
}

export { Preview };
