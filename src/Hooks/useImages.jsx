// hybot, 6
import hybot1 from '../static/img/hybot/hybot-1.png';
import hybot2 from '../static/img/hybot/hybot-2.png';
import hybot3 from '../static/img/hybot/hybot-3.png';
import hybot4 from '../static/img/hybot/hybot-4.png';
import hybot5 from '../static/img/hybot/hybot-5.png';
import hybot6 from '../static/img/hybot/hybot-6.png';
// ups, 7
import ups1 from '../static/img/ups/ups-1.png';
import ups2 from '../static/img/ups/ups-2.png';
import ups3 from '../static/img/ups/ups-3.png';
import ups4 from '../static/img/ups/ups-4.png';
import ups5 from '../static/img/ups/ups-5.png';
import ups6 from '../static/img/ups/ups-6.png';
import ups7 from '../static/img/ups/ups-7.png';
// blg, 4
import blg1 from '../static/img/blg/blg-1.png';
import blg2 from '../static/img/blg/blg-2.png';
import blg3 from '../static/img/blg/blg-3.png';
import blg4 from '../static/img/blg/blg-4.png';


const useHybotImages = () => {
    return { hybot1, hybot2, hybot3, hybot4, hybot5, hybot6 };
};
const useUpsImages = () => {
    return { ups1, ups2, ups3, ups4, ups5, ups6, ups7 };
};
const useBlgImages = () => {
    return { blg1, blg2, blg3, blg4 };
}

export {
    useHybotImages,
    useUpsImages,
    useBlgImages,
}