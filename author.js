
// * this could be HoC to wrap editing dialogs
export const Dialog = ({ submitContent, defaultContent }) => {
  const [state, set] = useState(defaultContent)

  // * validation
  // * business logic

  const submit = () => {
    submitContent(state)
    // * close dialog
  }

  return (
    <div>
      <input onChange={set} />
      <button onClick={submit}>Submit</button>
    </div>
  )
}

const someComp = props => {
  const { data: val, storeContent } = useContent(``)

  return (
    <div
      muiAuthorComponent={
        () => (<Dialog submitContent={storeContent} defaultContent={val} />)
      }
    >
      {val}
    </div>
  )
}
