// versioned api
import { MuiComponent, MuiComponentSchema } from 'mui-content/0.3';

// default behaviors for property types
import MuiString from 'mui-content-types/string';
// versioned type behavior
import MuiDate from 'mui-content-types/0.2/date';

import spellCheck from 'awesome-spellcheck';

const DialogProps = {
    title: MuiString,
    paragraphText: MuiString,
    buttonText: MuiString,
    date: MuiDate
}

// Prop overrides
const OtherDialogProps = {
    ...DialogProps,
    paragraphText: MuiString({
        onSave: (content) => spellCheck(content)
    })
}

const DialogSchema = new MuiComponentSchema(DialogProps)
const OverrideDialogSchema = new MuiComponentSchema(OtherDialogProps)

const Dialog = (props) => {
    return <div>
        <h1>{props.title} <span>{props.date}</span></h1>
        <p>{props.paragraphText}</p>
        <button>{props.buttonText}</button>
    </div>;
}

const StrictDialog = new MuiComponent(Dialog, DialogSchema)
const OverrideDialog = new MuiComponent(Dialog, OverrideDialogSchema)
// if'n you don't want a schema:
const DialogLoose = new MuiComponent(Dialog)
