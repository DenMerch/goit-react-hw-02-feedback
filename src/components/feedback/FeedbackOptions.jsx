import css from "./Feedback.module.css"
export const FeedbackOptions = ({ onLeaveFeedback, options, name }) => {
    return (
        <>
            <button className={css.button} type="button" onClick={onLeaveFeedback} name={name}>{options}</button>
        </>
    )
}

