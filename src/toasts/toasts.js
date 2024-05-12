import {toast} from "vue-sonner";

export const successNotify = (text) => {
    return toast(text, {
        style: {
            background: '#50C878'
        },
        class: 'my-toast',
        descriptionClass: 'my-toast-description'
    })
}

export const errorNotify = (text) => {
    return toast(text, {
        style: {
            background: '#fda4af'
        },
        class: 'my-toast',
        descriptionClass: 'my-toast-description'
    })
}