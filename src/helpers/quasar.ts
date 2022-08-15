// outside of a Vue file
import { Notify, Loading } from 'quasar'

interface LoadingConfig {
    message: string;
}

interface NotifyConfig {
    type: string,
    message: string;
}

export function showNotify(notify: NotifyConfig) {
    Notify.create(notify)
}

export function showLoading(loading: LoadingConfig) {
    Loading.show(loading)
}

export function hideLoading() {
    Loading.hide()
}