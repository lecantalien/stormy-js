import {useToast} from "vue-toastification";

export const ToastService = {
    props: {},
    data() {
        return {
            AppToast: useToast(),
        }
    },
    computed: {},
    methods: {},
}