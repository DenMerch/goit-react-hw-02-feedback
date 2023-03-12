import css from "./Feedback.module.css"
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ onLeaveFeedback, options, name }) => {
    return (
        <>
            <button className={css.button} type="button" onClick={onLeaveFeedback} name={name}>{options}</button>
        </>
    )
}
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

