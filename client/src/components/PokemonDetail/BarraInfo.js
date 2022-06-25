import s from "./BarraInfo.module.css"

export default function BarraInfo({ id, name, value, max }) {

    return (
        <div className={ s.barraInfoContainer }>
            <label className={ s.etiqueta }>{ name }</label>
            <input
                readOnly
                className={ id[0] === "A" ? s.barraInfoBD : s.barraInfo }
                type="range"
                min={ 0 }
                max={ max || 100 }
                value={ value || 0 }

            />
        </div>
    )
}