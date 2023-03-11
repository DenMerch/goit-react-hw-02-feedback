export const FeedbackOptions = ({ onLeaveFeedback, options, name }) => {
    return (
        <>
            <button type="button" onClick={onLeaveFeedback} name={name}>{options}</button>
        </>
    )
}

