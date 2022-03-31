let working = false;
let changing = true;

function loadskills() {
    const images = document.getElementsByClassName("skill-img-cont");

    let left = document.getElementsByClassName("left")[0];
    let right = document.getElementsByClassName("right")[0];
    left.classList.add("animation_center_to_right");
    right.classList.add("animation_center_to_left");

    if (!working) {
        working = true;
        setTimeout(() => {
            let random_int = Math.floor(Math.random() * images.length);
            let random_int2 = Math.floor(Math.random() * images.length);
            random_int == random_int2 ? random_int2++ : null;
            random_int2 == images.length ? random_int2 = 0 : null;

            let new_left = images[random_int];
            let new_right = images[random_int2];

            new_left.classList.add("left");
            new_left.classList.add("skill-img-start");
            new_left.classList.add("start_left_animation");
            new_right.classList.add("right");
            new_right.classList.add("skill-img-start");
            new_right.classList.add("start_right_animation");
        } , 2500);
        setTimeout(() => {
            left.classList.add("animation_center_to_right");
            right.classList.add("animation_center_to_left");
            left.classList.remove("skill-img-start");
            left.classList.remove("animation_center_to_right");
            left.classList.remove("left");
            left.classList.remove("start_left_animation")
            right.classList.remove("skill-img-start");
            right.classList.remove("animation_center_to_left");
            right.classList.remove("right");
            right.classList.remove("start_right_animation");
            working = false;
        } , 2500);
        setTimeout(() => {
            if (changing) {
                loadskills();
            }
        } , 5000);
    }
}

function restoreskills(){
    const images = document.getElementsByClassName("skill-img-cont");
    changing = false;

    setTimeout(() => {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("left");
            images[i].classList.remove("right");
            images[i].classList.remove("skill-img-start");
        }
        const base_img = document.getElementsByClassName("img-skill-star");
        const left = base_img[0];
        const right = base_img[1];

        left.classList.add("left");
        left.classList.add("skill-img-start");
        left.classList.add("start_left_animation");
        right.classList.add("right");
        right.classList.add("skill-img-start");
        right.classList.add("start_right_animation");
    } , 2500);

}

