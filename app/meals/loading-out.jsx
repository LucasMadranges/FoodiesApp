import style from "./loading.module.css"

export default function LoadingOut() {
    return (
        <p className={style.loading}>Fetching meals...</p>
    )
}