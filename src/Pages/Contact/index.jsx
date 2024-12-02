import { useEffect, useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';
import { MailSenderModal } from './MailSenderModal';
import { TextFormat } from './TextFormat';
import { Preview } from './Preview';

import styles from './styles/index.module.scss';

const Contact = props => {
    const { ls, lf, s, f } = useStates();

    const validContact = useMemo(() => {
        return !!s.contact?.form?.email || !!s.contact?.form?.phone
    }, [s.contact?.form?.email, s.contact?.form?.phone])

    const validForm = useMemo(() => {
        return !!s.contact?.form?.text && (!!s.contact?.form?.email || !!s.contact?.form?.phone)
    }, [s.contact?.form?.email, s.contact?.form?.phone, s.contact?.form?.text])

    const submit = e => {
        if (!!e) e.preventDefault();
        f.contact.sendEmail();
    }

    useEffect(() => {
        if (ls.theme === 'black') {
            document.documentElement.style.setProperty('--my-major', '#1A3752');
            document.documentElement.style.setProperty('--my-major-sec', '#F47424');
            document.documentElement.style.setProperty('--my-middle', '#907E5D');
            document.documentElement.style.setProperty('--my-minor-sec', '#FAA437');
            document.documentElement.style.setProperty('--my-minor', '#DCCFA8');
        } else {
            document.documentElement.style.setProperty('--my-major', '#DCCFA8');
            document.documentElement.style.setProperty('--my-major-sec', '#FAA437');
            document.documentElement.style.setProperty('--my-middle', '#907E5D');
            document.documentElement.style.setProperty('--my-minor-sec', '#F47424');
            document.documentElement.style.setProperty('--my-minor', '#1A3752');
        }
    }, [ls.theme]);

    return (
        <section className={`${styles.contact_container} w-full flex flex-col items-center`}>
            <h2 className={`text-center h2 fw-bold mt-2 ${styles.h2_text}`}>
                Contact me
            </h2>
            <form
                onSubmit={submit}
                className={`flex flex-col items-center w-full mt-5`}
                >
                {/* -------------  Name  ------------- */}
                <div
                    className={`flex flex-col items-start px-3 w-10/12 md:w-1/2 ${styles.input_container}`}
                    >
                    <label htmlFor="contact_name" className={`w-full ${styles.input_label}`}>Name</label>
                    <input
                        type="text"
                        id="contact_name"
                        name="name"
                        value={s.contact?.form?.name || ''}
                        placeholder="Erick Garcia"
                        onChange={e => {
                            f.u2('contact', 'form', 'name', e.target.value);
                        }}
                        className={`w-full ${styles.input}`}
                        />
                </div>
                {/* -------------  /Name  ------------- */}

                {/* -------------  Email  ------------- */}
                <div
                    className={`flex flex-col justify-start px-3 w-10/12 md:w-1/2 ${styles.input_container}`}
                    >
                    <label htmlFor="contact_email" className={`w-full ${styles.input_label}`}>Email</label>
                    <input
                        type="text"
                        id="contact_email"
                        name="email"
                        value={s.contact?.form?.email || ''}
                        placeholder="ojitos369@gmail.com"
                        onChange={e => {
                            f.u2('contact', 'form', 'email', e.target.value);
                        }}
                        className={`w-full ${styles.input}`}
                        />
                        {!validContact && 
                        <small className={`${styles.small} w-full`}>
                            You must provide at least one contact method
                        </small>}
                </div>
                {/* -------------  /Email  ------------- */}

                {/* -------------  Phone  ------------- */}
                <div
                    className={`flex flex-col justify-start px-3 w-10/12 md:w-1/2 ${styles.input_container}`}
                    >
                    <label htmlFor="contact_phone" className={`w-full ${styles.input_label}`}>Phone</label>
                    <input
                        type="text"
                        id="contact_phone"
                        name="phone"
                        value={s.contact?.form?.phone || ''}
                        placeholder="+525525605025"
                        onChange={e => {
                            f.u2('contact', 'form', 'phone', e.target.value);
                        }}
                        className={`w-full ${styles.input}`}
                        />
                        {!validContact && 
                        <small className={`${styles.small} w-full`}>
                            You must provide at least one contact method
                        </small>}
                </div>
                {/* -------------  /Phone  ------------- */}

                {/* -------------  Subject  ------------- */}
                <div
                    className={`flex flex-col justify-start px-3 w-10/12 md:w-1/2 ${styles.input_container}`}
                    >
                    <label htmlFor="contact_subject" className={`w-full ${styles.input_label}`}>Subject</label>
                    <input
                        type="text"
                        id="contact_subject"
                        name="subject"
                        value={s.contact?.form?.subject || ''}
                        placeholder="Let's Go and Make the Future"
                        onChange={e => {
                            f.u2('contact', 'form', 'subject', e.target.value);
                        }}
                        className={`w-full ${styles.input}`}
                        />
                </div>
                {/* -------------  /Subject  ------------- */}

                {/* -------------  Text  ------------- */}
                <div
                    className={`flex flex-col justify-start px-3 w-10/12 md:w-1/2 mb-[150px] ${styles.input_container}`}
                    >
                    <label htmlFor="contact_text" className={`w-full ${styles.input_label}`}>Text</label>
                    {/* <textarea
                        id="contact_text"
                        name="text"
                        value={s.contact?.form?.text || ''}
                        placeholder="Your Text Here"
                        onChange={e => {
                            f.u2('contact', 'form', 'text', e.target.value);
                        }}
                        className={`w-full ${styles.input}`}
                        /> */}
                    <TextFormat />
                </div>
                {/* -------------  /Text  ------------- */}

                <div className="w-10/12 md:w-1/2 px-3 flex flex-col items-center mt-5 mb-[50px]">
                    {!s?.contact?.sending &&
                    <input 
                        type="submit" 
                        className={`${validForm ? styles.submit_class : styles.submit_class_isabled} ${styles.button}`}
                        value="Send"
                        disabled={!validForm}
                    />}
                    {!!s?.contact?.sending &&
                    <button 
                    className={`${styles.submit_class_isabled} ${styles.button}`}
                        type="button" disabled>
                        <span className='me-3'>
                            Sendind...
                        </span>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                    }
                    {!validForm && 
                    <small className={`${styles.small} w-full`}>
                        You must provide a text and at least one contact method
                    </small>}
                </div>
                {!!s.modals?.contact?.emailSended &&
                <MailSenderModal/>}
                {!!s.modals?.contact?.preview &&
                <Preview/>}
            </form>
        </section>
    )
}

export { Contact };