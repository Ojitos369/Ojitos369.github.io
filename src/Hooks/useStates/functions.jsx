import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useDispatch, useSelector } from "react-redux";
import { f as ff } from "./fs";

const MySwal = withReactContent(Swal);

const base_link = 'http://localhost:8369/api/'
// const base_link = 'https://me.ojitos369.com/api/'
axios.defaults.withCredentials = true
const miAxios = axios.create({
    baseURL: base_link,
});

const useF = props => {
    const ls = useSelector(state => state.fs.ls);
    const s = useSelector(state => state.fs.s);
    const d = useDispatch();

    const contact = {
        sendEmail: () => {
            u1('contact', 'sending', true);
            let data = s.contact?.form;
            const url = 'send_email/'
            miAxios.post(url, data)
            .then((response) => {
                u2('modals', 'contact', 'emailSended', true);
                u1('contact', 'form', {});
                u2('contact', 'form', 'text', "");
            })
            .catch((err) => {
                console.log(err);
            }).finally(() => {
                u1('contact', 'sending', false);
            });
        }
    }
    const exp = {
        getData: () => {
            if (!!s.loadings?.exp?.getData) return;
            u2('loadings', 'exp', 'getData', true);

            const url = 'get_data_exp/';

            miAxios.get(url)
            .then((response) => {
                const data = response.data.data;
                u2('exp', 'data', 'data_exp', data);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                u2('loadings', 'exp', 'getData', false);
            });
        }
    }

    // u[0-9]
    const u0 = (f0, value) => {
        d(ff.u0({f0, value}));
    }
    const u1 = (f0, f1, value) => {
        d(ff.u1({f0, f1, value}));
    }
    const u2 = (f0, f1, f2, value) => {
        d(ff.u2({f0, f1, f2, value}));
    }
    const u3 = (f0, f1, f2, f3, value) => {
        d(ff.u3({f0, f1, f2, f3, value}));
    }
    const u4 = (f0, f1, f2, f3, f4, value) => {
        d(ff.u4({f0, f1, f2, f3, f4, value}));
    }
    const u5 = (f0, f1, f2, f3, f4, f5, value) => {
        d(ff.u5({f0, f1, f2, f3, f4, f5, value}));
    }
    const u6 = (f0, f1, f2, f3, f4, f5, f6, value) => {
        d(ff.u6({f0, f1, f2, f3, f4, f5, f6, value}));
    }
    const u7 = (f0, f1, f2, f3, f4, f5, f6, f7, value) => {
        d(ff.u7({f0, f1, f2, f3, f4, f5, f6, f7, value}));
    }
    const u8 = (f0, f1, f2, f3, f4, f5, f6, f7, f8, value) => {
        d(ff.u8({f0, f1, f2, f3, f4, f5, f6, f7, f8, value}));
    }
    const u9 = (f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, value) => {
        d(ff.u9({f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, value}));
    }

    return { u0, u1, u2, u3, u4, u5, u6, u7, u8, u9, contact, exp };
}

export { useF };