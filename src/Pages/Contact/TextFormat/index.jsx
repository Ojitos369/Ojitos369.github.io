import { useEffect, useMemo } from 'react';
import { useStates } from '../../../Hooks/useStates';

import { Eyes } from '../../../Components/Icons';

import "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
import 'https://cdnjs.cloudflare.com/ajax/libs/quill/2.0.0-dev.3/quill.min.js';
import 'https://unpkg.com/quill-better-table@1.2.10/dist/quill-better-table.min.js';

import '../../../static/css/quill/demo1.js.css';
import '../../../static/css/quill/quill-better-table.css';
import '../../../static/css/quill/extra.css';
import '../../../static/css/quill/atom-one-dark.css';

import styles from '../styles/index.module.scss';

const TextFormat = props => {
    const { ls, lf, s, f } = useStates();
    const value = useMemo(() => s.contact?.form?.text || '', [s.contact?.form?.text]);
    Quill.register({ 'modules/better-table': quillBetterTable }, true);

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'],
    ];

    const setValue = value => {
        f.u2('contact', 'form', 'text', value);
    }

    const showPrev = () => {
        // s.new?.options?.showPrev
        f.u2('modals', 'contact', 'preview', true);
    }

    useEffect(() => {
        const myDiv = document.getElementById('editor-form');
        const content = myDiv.innerHTML;
        if (content) return;

        const quill = new Quill('#editor-form', {
            theme: 'snow',
            modules: {
                table: true,
                'better-table': {
                    operationMenu: {
                        items: {
                            unmergeCells: {
                                text: 'Another unmerge cells name'
                            }
                        },
                        color: {
                            colors: ['red', 'green', 'yellow', 'white', 'red', 'green', 'yellow', 'white']
                        },
                    },
                },
                toolbar: toolbarOptions,
                syntax: true,
            },
        });
        quill.root.innerHTML = value;
        // add event listener when change
        quill.on('text-change', () => {
            let innerHTML = quill.root.innerHTML;
            setValue(innerHTML);
        });

        let tableModule = quill.getModule('better-table');

        document.body.querySelector('#insert-table-form').onclick = () => {
            tableModule.insertTable(3, 3);
        };

    }, []);


    return (
        <div className={`${styles.text_format}`}>
            <span 
                className={`${styles.show_mode}`}
                onClick={showPrev}>
                <Eyes />
            </span>
            <div className={`${styles.add_table_container}`}>
                <span 
                    className={`${styles.add_table}`} 
                    id='insert-table-form'>
                    addTable
                </span>
            </div>
            <div id="editor-form"></div>
        </div>
    )
}

export { TextFormat };
