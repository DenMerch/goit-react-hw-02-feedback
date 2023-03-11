import css from './Statistics.module.css'
export const Statistics = ({ good,
    neutral,
    bad,
    total,
    positivePercentage }) => {
    return (
        <div>
            <p className={css.green}>Good: {good}</p>
            <p className={css.yellow}>Neutral: {neutral}</p>
            <p className={css.red}>Bad: {bad}</p>
            <p className={css.blue}>Total: {total}</p>
            <p className={css.blue}>Positive feedback: {positivePercentage}%</p>
        </div >
    )
}



