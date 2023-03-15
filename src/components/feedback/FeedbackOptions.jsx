import css from "./Feedback.module.css"
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {

    return (
        <>
            {options.map(option => {
                if (option === "good" || option === "bad" || option === "neutral") {
                    return (< button key={option} className={css.button} type="button"
                        onClick={onLeaveFeedback} name={option}>{option}</button>)
                } else {
                    return null
                }

            })}

        </>
    )
}
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,

}

