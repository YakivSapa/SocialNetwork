import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from '../Dialogs.module.css';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textForm}>
                <div>
                    <Field component={Textarea} validate={[required, maxLength50]} className={s.textarea} name="newMessageBody" placeholder='Write a message...' />
                </div>
                <div><button className={s.button}>Send</button></div>
            </div>
        </form>
    )
}

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);